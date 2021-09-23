import React,{useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../dashboard/index'
import {API} from 'aws-amplify'
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations'


const DefaultLayout = (props) => {
  const {signedIn, signOut, userGroup} = props;
  let approvedRecs =[];
  let upRec = [];
  let ts=[];
  let RecomendationsList = listRecs();
  const [approved, updateApproved]=useState([]);
  const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [rec, setRec] =useState("");
    const errToggle = () => setErrModal(!errModal);
    const [errModal, setErrModal] = useState(false);
    const [tasks, setTasks] =useState([]);
    const [revModal, setRevModal] = useState(false);
    const revToggle = () => setRevModal(!revModal);
    const [msg, setMsg] =useState("");
    const [hasData, setHasData] = useState(false);
    const [recommendations, updateRecs] =useState(RecomendationsList);
    const [data, setData] = useState([])
    var d ;

    useEffect(() => { 
      if(!hasData){
      listRecs().then(data =>{
      updateRecs(data);
      listArticles().then(promise=>{
        console.log(promise)
        setData(promise);
      })
      })
    }
    },[])
    
         async function listArticles() { //gets the recommendations from the backend     
      var url ='https://newsapi.org/v2/everything?' +
          'q=Cyber security&' +
          'sortBy=popularity&' +
          'apiKey=9abab85cc12644679ad3ac5b6226206d';
          var req = new Request(url);
    var res = fetch(req)
    .then(response => response.json())
    .then(data =>{ 
      console.log(data.articles)
      d = data.articles;
      return d;
    });
    return res;
           }
             async function listRecs() { //gets the recommendations from the backend     
             var data = await API.graphql({query: queries.listRecommendationss}).then(promise => {
              
              return promise.data.listRecommendationss.items;
            }).catch(e => {
                console.error(e);
            }).finally(()=>{
              setHasData(true);
              getApproved()
            })
          return data;
  }
    function getApproved(){//scans through the a recommendations array, gets approved recs, and moves those recs to a new array
      
         try{
          if(hasData){

            approvedRecs = recommendations.filter(checkRec);//filters 
            upRec = recommendations;
            if(approvedRecs!==undefined||approvedRecs!==null){//checks if approvedRecs is not null
              for(let i in recommendations){//loops through the array 
                if(recommendations[i].isApproved){//checks if the array 
            upRec.splice(i,1)}// removes the approved rec from the main array
          }
                }
        for(let i in approvedRecs){
          approved.push(approvedRecs[i])//adds the approved rev to the approved array
              }
          updateApproved(approved);//
          updateRecs(upRec)
        }
}catch(err){

      console.log("View task error: ", err);
    }
      }
       function checkRec(recommendation){
         return recommendation.isApproved === true;
       }
      function approve(rec){
        rec.isApproved = true;
        for(let i in recommendations){
          if(rec.id === recommendations[i].id){
            recommendations.splice(i, 1, rec)
         }
        }
        getApproved()

        console.log("This Recommendation has been approved!!")
       }
       
  //      function viewTasks(i){
  //     try{
  //       let task = "no task found"
  //       if(tasks){
  //    let recId = recommendations[i].id;
  //    for(let n in tasks){
  //    if(tasks[n].recId ===recId){
  //    task = tasks[n];
  //   }}
  // }
  // console.log("View task : ", task);
  // setTasks(task);
  // setRec(recommendations[i].recDesc);
  // toggle();
  //   }catch(err){

  //     setMsg(err.message);
  //     errToggle();
  //     console.log("View task error: ", err);
  //   }
  //   }

    async function saveChanges(rec){
      try{
        console.log("This is the Save changes function", rec)
        
       if(rec){
          for (let i in rec)
          {
          await API.graphql({ query: mutations.updateRecommendations, variables: {input: rec[i]}});
          }
      }
      if (tasks){
        for (let i in tasks){
          await API.graphql({query: mutations.updateTasks, variables: {input: tasks[i]}})
        }
      }
     
    }
      catch(err){
        console.log("There's an error in the Save changes function", err)
      }
    }

    
    function addTask(task){
      console.log("List of tasks before pushing new", tasks);
      console.log("This is the task that I'm adding:", task)
      tasks.push(task);
      setTasks(tasks)
      console.log("List of tasks after pushing new", tasks);
    }
    
      return (
    <div>
      {signedIn ? <section>
      <AppSidebar group={userGroup} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader tasks={tasks} recommendations={recommendations} signOut={signOut} saveChanges={saveChanges} approved={approved} />
        <div className="body flex-grow-1 px-3">
          <AppContent approve={approve} approved={approved} recommendations={recommendations} 
          errModal={errModal} hasData={hasData} errToggle={errToggle} revModal={revModal} revToggle={revToggle}  msg={msg} tasks={tasks} rec={rec} toggle={toggle} news={data} modal={modal} setRec={setRec} addTask={addTask} />
        </div>
        <AppFooter />
      </div>
  </section>: <Redirect to="/login" />}
    </div>
  )
}

export default DefaultLayout
