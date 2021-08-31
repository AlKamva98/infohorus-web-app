import React,{useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../dashboard/index'
import {API} from 'aws-amplify'
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations'


const DefaultLayout = (props) => {
  const {getUserStatus,checkUser, signOut, userGroup} = props;
  let approvedRecs =[];
  let upRec = [];
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
    //const [recData, setRecData] = useState();
    
    useEffect(() => {
     
    checkUser();
      getApproved();
      if(!hasData){
      listRecs().then(data =>{
        updateRecs(data);
        console.log("This is supposed to be changed ", recommendations)
      })
    }
      
    },[])
    
         async function listRecs() { //gets the recommendations from the backend     
             var data = await API.graphql({query: queries.listRecommendationss}).then(promise => {
              console.log(promise.data.listRecommendationss.items);
              return promise.data.listRecommendationss.items;
            }).catch(e => {
                console.error(e);
            }).finally(()=>{
              console.log("Data has been recieved")
              setHasData(true);
            })
          return data;
  }
    function getApproved(){//scans through the a recommendations array, gets approved recs, and moves those recs to a new array
      console.log("Aprroved data recieved")
         try{
          if(hasData){

            approvedRecs = recommendations.filter(checkRec);//filters 
            console.log("these are the approved recommendations", approvedRecs);
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
          console.log("these are the approved recommendations", approved);
          console.log("these are the Pending recommendations", recommendations);
        }
}catch(err){

      setMsg(err.message);
      errToggle();
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
         let data }
        }
        getApproved()

        console.log("This Recommendation has been approved!!")
       }
       function viewTasks(i){
      try{
     let task = recommendations[i].tasks;
     console.log("View task : ", task);
     setTasks(task);
     setRec(recommendations[i].recDesc);
     toggle();
    }catch(err){

      setMsg(err.message);
      errToggle();
      console.log("View task error: ", err);
    }
    }

    async function saveChanges(rec){
      try{
        console.log("This is the Save changes function", rec)
        if(rec){
          for (let i in rec)
          {
            var upRec = await API.graphql({ query: mutations.updateRecommendations, variables: {input: rec[i]}});
          }
      }}
      catch(err){
        console.log("There's an error in the Save changes function", err)
      }
    }

    function addTask(task){
      console.log("List of tasks before pushing new", tasks);
      console.log("This is the task that I'm adding:", task)
      tasks.push(task)
      console.log("List of tasks after pushing new", tasks);
    }
    
      return (
    <div>
      { <section>
      <AppSidebar group={userGroup} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader saveChanges={saveChanges} approved={approved} />
        <div className="body flex-grow-1 px-3">
          <AppContent approve={approve} approved={approved} recommendations={recommendations} 
          errModal={errModal} hasData={hasData} errToggle={errToggle} revModal={revModal} revToggle={revToggle} viewTasks={viewTasks}  msg={msg} tasks={tasks} rec={rec} toggle={toggle} modal={modal} setRec={setRec} addTask={addTask} />
        </div>
        <AppFooter />
      </div>
  </section>}
    </div>
  )
}

export default DefaultLayout
