import React,{useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../dashboard/index'
import {COLUMNS} from "../assessor/columns";
import {API} from 'aws-amplify'
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations'
import * as subscriptions from '../../graphql/subscriptions'

const DefaultLayout = (props) => {
  const {signedIn, signOut, userGroup,setUser, user} = props;
  let approvedRecs =[];
  let upRec = [];
  let ts=[];
  var completed;
  // let RecomendationsList = listProps("Rec");
  // let TasksList = listProps("Task") ;
    const [approved, updateApproved]=useState([]);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [rec, setRec] =useState("");
    const [errModal, setErrModal] = useState(false);
    const errToggle = () => setErrModal(!errModal);
    const [tasks, setTasks] =useState([]);
    const [revModal, setRevModal] = useState(false);
    const revToggle = () => setRevModal(!revModal);
    const [msg, setMsg] =useState("");
    const [messages, setMessages] = useState([]);
    const [hasData, setHasData] = useState(false);
    const [hasTData, setHasTData] = useState(false);
    const [datatable, setDatatable] = useState('');
    const [continueAss, setContinueAss] = useState(false);
    const [assRep, setAssRep] = useState({});
    const [recommendations, updateRecs] =useState([]);
    const [data, setData] = useState([])
    var upTeam =[] ;
    let userObj;
    var [evt, setEvt] = useState([]);
    var rectks= [];
    useEffect(() => { 
      
      getUser().then(User => {
        let users = [];
          userObj= User;
          if((userObj !== undefined)){
          setUser(userObj);}
          if((userObj !== undefined) && (userObj.userType === "Assessor")){
                checkAssessComplete(userObj.id);
              }
              if(userObj!==undefined){
            listTeam(userObj).then(teamlist =>{
                  completed =  teamlist;
                  for(let i in completed){
                    if(completed[i]._deleted===null){
                  users.push(completed[i])}
                }
              })}       
          
              let data = {columns: COLUMNS,rows: users}
              setDatatable(data);
              if(!hasData && userObj!==undefined){
                listProps("Rec", userObj.id).then(data =>{
                  updateRecs(data);
                  listProps("Task",userObj.id).then(response=>{
                    if(response){
                      setTasks(response)
                      console.log("This is the tasks",response)
                      for(let i in response){
                        let item ={
                          id: i,
                          color: response[i].color,
                          from: response[i].taskStart.toString().replace("Z",""),
                          to: response[i].taskEnd.toString().replace("Z",""),
                          title: response[i].taskDesc};
                         
                          rectks.push(item)
                          console.log("RecTasks", rectks)
                          setEvt(rectks)
                        }
                       }})
                       listArticles().then(promise=>{setData(promise);})
                      })
                      
                    }
                    
                    subscribetoTeam(users);
                  }).finally(()=>{
           
            getMessages(userObj).then(data=>{
              setMessages(data)
                         });
           setHasTData(true); 
          });

    
    },[])
    
    function subscribetoTeam(dt){
      API.graphql({
        query: subscriptions.onCreateTeam,
      }).subscribe({
        next: team => {
         dt.push(team.value.data.onCreateTeam) ;
         let data = {columns: COLUMNS,rows: dt}
              setDatatable(data);
        //upTeam.push(team.value.data.onCreateTeam)
        }
      })
    }
    async function checkAssessComplete(id){
      var reps;
      var complete = false;
      const assRep = await API.graphql({query: queries.listAssessorReports, variables:{filter: {ID: {contains: id}}}}).then(promise => {
              reps = promise.data.listAssessorReports.items;
            }).finally(()=>{
              for(let i in reps){
                if(reps[i].isComplete){
                    setContinueAss(true)
                    setAssRep(reps[i])
                    break;
                }
              }
             return complete; 
            })
    }

      async function listArticles() { //gets the articles from the bing news api     
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

             async function listProps(prop, userId) { //gets the recommendations from the backend     
             var data;
             switch(prop){
               case "Rec":
                 data = await API.graphql({query: queries.listRecommendationss, variables: {filter: {userID: {contains: userId}}}}).then(promise => {
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

       async function getMessages(userId) {
      try {
        var messages = await API.graphql({query: queries.listMessages, variables:{filter: {chatID: {contains: userId.chatID}}}});
        return messages.data.listMessages.items;
      } catch (err) {
          console.log("Error:>> ", err);
      }
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

    async function getUser() {
      try {
        var userslist = await API.graphql({query: queries.listUsers, variables:{filter: {email: {contains: user}}}});
        return userslist.data.listUsers.items[0];
      } catch (err) {
          console.log("Error:>> ", err);
      }
  }
    async function listTeam(user) {//get teams
      var company = user.company;
      if(company!==undefined){
      try {
        var teamlist = await API.graphql({query: queries.listTeams,variables:{filter: {company: {contains: company}}}});
        return teamlist.data.listTeams.items;
      } catch (err) {
          console.log("Error:>> ", err);
      }}
  }

    async function saveChanges(rec, tasks){ //update the backend data
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
      }
    }

    async function uploadTask (task){//add tasks to backend
      var res;
      if (task){   
       res= await API.graphql({query: mutations.createTasks, variables: {input: task}})
      }
      return res;
    }
    function addTask(task){//add task to recommendation
      uploadTask(task).then(response=>{
        tasks.push(response.data.createTasks);
      setTasks(tasks)}).catch((err)=>{
        console.log("Task upload error::::>",err)
      })
    }
    
      return (
    <div>
      {signedIn ? <section>
      <AppSidebar group={userGroup} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader tasks={tasks} recommendations={recommendations} signOut={signOut} saveChanges={saveChanges} approved={approved} />
        <div className="body flex-grow-1 px-3">
          <AppContent approve={approve} approved={approved} recommendations={recommendations} 
          errModal={errModal} datatable={datatable} hasTData={hasTData} hasData={hasData} errToggle={errToggle} revModal={revModal} revToggle={revToggle}  msg={msg}  tasks={tasks} rec={rec} toggle={toggle} news={data} messages={messages} setMessages={setMessages} modal={modal} events={evt} userId={user} continuesAss={continueAss} assRep={assRep} setRec={setRec} addTask={addTask} />
        </div>
        <AppFooter />
      </div>
  </section>: <Redirect to="/login" />}
    </div>
  )
}

export default DefaultLayout
