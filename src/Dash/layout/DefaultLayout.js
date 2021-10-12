import React,{useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../dashboard/index'
import {COLUMNS} from "../assessor/columns";
import {API} from 'aws-amplify'
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations'


const DefaultLayout = (props) => {
  const {signedIn, signOut, userGroup} = props;
  let approvedRecs =[];
  let upRec = [];
  let ts=[];
  var completed;
  let RecomendationsList = listProps("Rec");
  let TasksList = listProps("Task");
  const [approved, updateApproved]=useState([]);
  const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [rec, setRec] =useState("");
    const errToggle = () => setErrModal(!errModal);
    const [errModal, setErrModal] = useState(false);
    const [tasks, setTasks] =useState(TasksList);
    const [revModal, setRevModal] = useState(false);
    const revToggle = () => setRevModal(!revModal);
    const [msg, setMsg] =useState("");
    const [hasData, setHasData] = useState(false);
    const [hasTData, setHasTData] = useState(false);
    const [datatable, setDatatable] = useState('');
    const [recommendations, updateRecs] =useState(RecomendationsList);
    const [data, setData] = useState([])
    var d ;

    useEffect(() => { 
      listUsers().then(listOfUsers => {
             let users = [];
          
          for(let i in  listOfUsers.data.listUsers.items){
            if( (listOfUsers.data.listUsers.items[i].userType === "Team member")&& !(listOfUsers.data.listUsers.items[i]._deleted)){
              completed =  listOfUsers.data.listUsers.items[i];
              users.push(completed)
            }
          }
          let data = {
                 columns: COLUMNS,
                 rows: users
             }
             setDatatable(data);
         }).finally(()=>{
           setHasTData(true);
          });
      if(!hasData){
      listProps("Rec").then(data =>{
      updateRecs(data);
      listProps("Task").then(response=>{
        setTasks(response)
        console.log("This is the tasks",response)
      })
      listArticles().then(promise=>{
        setData(promise);
      })
      })
      
    }
    },[])
    
      async function listArticles() { //gets the recommendations from the backend     
        var url = "https://bing-news-search1.p.rapidapi.com/news/search?q=ransomware%20attacks&freshness=Day&textFormat=Raw&safeSearch=Off"
        var headers={
          "method": "GET",
          "headers": {
            "x-bingapis-sdk": "true",
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key": "e9f592d88cmshdf92743d72abbf8p11fd0ajsn2ac0044023b0"
          }
        }
        var req = new Request(url, headers);  
        var res =  fetch(req)
        .then(response => { 
          return  response.json();
        })
        var s = res.then(data=>{
          return data.value;
        })
            return s;
          }

             async function listProps(prop) { //gets the recommendations from the backend     
             var data;
             switch(prop){
               case "Rec":
                 data = await API.graphql({query: queries.listRecommendationss}).then(promise => {
              
              return promise.data.listRecommendationss.items;
            }).catch(e => {
                console.error(e);
            }).finally(()=>{
              setHasData(true);
              getApproved()
            })
            break;
            case "Task": 
            data = await API.graphql({query: queries.listTaskss}).then(promise => {
              
              return promise.data.listTaskss.items;
            }).catch(e => {
                console.error(e);
            })
             }
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

    async function listUsers() {
      try {
        var userslist = await API.graphql({query: queries.listUsers});
        return userslist;
      } catch (err) {
          console.log("Error:>> ", err);
      }
  }

    async function saveChanges(rec, tasks){
      try{
      
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
          errModal={errModal} datatable={datatable} hasTData={hasTData} hasData={hasData} errToggle={errToggle} revModal={revModal} revToggle={revToggle}  msg={msg}  tasks={tasks} rec={rec} toggle={toggle} news={data} modal={modal} setRec={setRec} addTask={addTask} />
        </div>
        <AppFooter />
      </div>
  </section>: <Redirect to="/login" />}
    </div>
  )
}

export default DefaultLayout
