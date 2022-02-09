import React,{useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../dashboard/index'
import {COLUMNS} from "../assessor/columns";
import {API, Auth, graphqlOperation} from 'aws-amplify'
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations'
import Contact from 'src/Home/views/contact/Contact';

const DefaultLayout = (props) => {
  const {signedIn, signOut, userGroup} = props;
  const [userDetails, setUserDetails] = useState({});
  const [teamMembers, setTeamMembers] = useState([])
  const [teamTable, setTeamTable] = useState('');
  const [recommendations, setRecommendations] =useState([]);
  const [approved, setApproved]=useState([]);
  const [tasks, setTasks] =useState([]);
  
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [rec, setRec] =useState("");
    const [errModal, setErrModal] = useState(false);
    const errToggle = () => setErrModal(!errModal);
    const [revModal, setRevModal] = useState(false);
    const revToggle = () => setRevModal(!revModal);
    const [msg, setMsg] =useState("");
    const [messages, setMessages] = useState([]);
    const [continueAss, setContinueAss] = useState(false);
    const [assRep, setAssRep] = useState({});
    const [data, setData] = useState([])
    var [evt, setEvt] = useState([]);
    
    useEffect(() => { 
      const getDashValues = async() =>{
        const currentUser = await getUser();
        if(currentUser){
          setUserDetails(currentUser.data.getUser);
          const team = await listTeam(currentUser.data.getUser.company)
          setTeamMembers(team)
          teamsTableHandler(team)
          recommendationsHandler(currentUser.data.getUser.id)
          tasksHandler(currentUser.data.getUser.id)
          newsArticleshandler()
        }
      }
      getDashValues();

    },[])
    
    useEffect(() => {   
    console.log("This is the teams table", teamTable)  
    },[teamMembers])
    
    useEffect(() => {  
      console.log("Recommendations have been changed to", recommendations)
      const approvedRec = recommendations.filter((rec)=>{
        return rec.isApproved
      });//filters 
    
    console.log("These are the apporved recos", approvedRec[0]);
    addToApprovedHandler(approvedRec[0])
     },[recommendations])
    const addToApprovedHandler =(appRec)=>{
      setApproved([...approved, appRec])
    }
    //team member handlers
    const addTeamMemberHandler= (member) =>{
      
    }
    const updateTeamMemberHandler= () =>{

    }
    const deleteTeamMemberHandler= (id) =>{
        const newTeam = teamMembers.filter((teamMember)=>{
          return teamMember.id !== id;
        })  
        setTeamMembers(newTeam);
        teamsTableHandler(newTeam);
    }
    const teamsTableHandler = () =>{
      const newTeam = teamMembers.filter((member)=>{
        return member._deleted === undefined
      })
      const data = {columns: COLUMNS,rows: newTeam}
      setTeamTable(data)

    }

    const recommendationsHandler = async (id)=>{
      const recommendations = await listProps("Rec", id)
      // getApproved(recommendations);
      getPending(recommendations);

    }

    const tasksHandler = async (id)=>{
    const Tasks = await listProps("Task",id);

    setTasks(Tasks)
    let taskEvents = [];
    for(let i in Tasks){
      let item ={
        id: i,
        color: Tasks[i].color,
        from: Tasks[i].taskStart.toString().replace("Z",""),
        to: Tasks[i].taskEnd.toString().replace("Z",""),
        title: Tasks[i].taskDesc
      };
  
      taskEvents.push(item);
      }
      
      setEvt(taskEvents)
    }

    const newsArticleshandler = async () =>{
      const articles = await listArticles();
      setData(articles);
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
            })
            break;
            case "Task": 
            data = await API.graphql({query: queries.listTaskss}).then(promise => {
              return promise.data.listTaskss.items;
            }).catch(e => {
                console.error(e);
            });
            break;
            default:
              console.log("Niether Recommendations nor Tasks were selected");
              break;
             }
          return data;
  }

  
    function getApproved(recommendations){//scans through the a recommendations array, gets approved recs, and moves those recs to a new array
            const approvedRecs = recommendations.filter((rec)=>{
              return rec.isApproved
            });//filters 
          
          console.log("These are the apporved recos", approvedRecs);
          setApproved(approvedRecs);
          }
    function getPending(recommendations){//
            const pendingRecs = recommendations.filter((rec)=>{
              return rec.isApproved === false;
            });//filters 
          setRecommendations(recommendations);
          }
          
       function checkRec(recommendation){
         return recommendation.isApproved === true;
       }
      function approve(rec){
        rec.isApproved = true;
        setRecommendations(recommendations.map((recommendation)=>{
          console.log(recommendation.isApproved)
          return recommendation.id === rec.id ? {...recommendation, isApproved: true}: recommendation;
        }))
        console.log("rec is ",rec.isApproved)

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
        const a = await Auth.currentUserInfo();
          return  await API.graphql(graphqlOperation(queries.getUser, { id: a.username }));
      } catch (err) {
          console.log("Error:>> ", err);
      }
  }
    
  
  async function listTeam(company) {//get teams
      
      if(company){
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
          errModal={errModal} teamTable={teamTable}  errToggle={errToggle} revModal={revModal} revToggle={revToggle}  msg={msg} setMsg={setMsg}  tasks={tasks} rec={rec} toggle={toggle} news={data} messages={messages} setMessages={setMessages} modal={modal} events={evt} userDetails={userDetails} continuesAss={continueAss} assRep={assRep} setRec={setRec} addTask={addTask} />
        </div>
        <AppFooter />
      </div>
  </section>: <Redirect to="/login" />}
    </div>
  )
}

export default DefaultLayout
