import React,{useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../dashboard/index'
import {COLUMNS} from "../assessor/columns";
import {API, Auth, graphqlOperation} from 'aws-amplify'
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations'
import {sendEmail} from '../../Home/shared/functions/AwsFuncs'
import IdleTimer from "./IdleTimer";


const DefaultLayout = (props) => {
  const {signedIn, signOut,otpVerified, userGroup} = props;
  const [userDetails, setUserDetails] = useState({});
  const [hasQuestionnaire, setHasQuestionnaire ] = useState(false);
  const [questionnaire, setQuestionnaire ] = useState({});
  const [teamMembers, setTeamMembers] = useState([])
  const [MilLevel, setMilLevel] = useState([])
  const [teamTable, setTeamTable] = useState('');
  const [recommendations, setRecommendations] =useState([]);
  const [approved, setApproved]=useState([]);
  const [tasks, setTasks] =useState([]);
  const [news, setNews] = useState([])
  const [evt, setEvt] = useState([]);
  const [assRepData, setAssRepData] = useState(null) 
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [rec, setRec] =useState("");
  const [errModal, setErrModal] = useState(false);
  const errToggle = () => setErrModal(!errModal);
  const [revModal, setRevModal] = useState(false);
  const revToggle = () => setRevModal(!revModal);
  const [msg, setMsg] =useState("");
  const [messages, setMessages] = useState([]);
  const [isTimeout, setIsTimeout] = useState(false);
    
    useEffect(() => {
      const timer = new IdleTimer({
        timeout: 300, //expire after  seconds
        onTimeout: () => {
          signOut();
          setIsTimeout(true);
        },
        onExpired: () => {
          //do something if expired on load
          setIsTimeout(true);
        }
      });
      console.log("Is the page timed out?", isTimeout)
      return () => {
        timer.cleanUp();
      };
    }, []);
  
    useEffect(() => { 
      const getDashValues = async() =>{
        newsArticleshandler()
        const currentUser = await getUser();
        if(currentUser){
          setUserDetails(currentUser.data.getUser);
          const team = await listTeam(currentUser.data.getUser.company)
          setTeamMembers(team)
          teamsTableHandler(team)
          recommendationsHandler(currentUser.data.getUser.id)
          tasksHandler(currentUser.data.getUser.id)
          getQuestionnaire(currentUser.data.getUser.id)
          getAssessReportHandler(currentUser.data.getUser.id)
        }
      }
      getDashValues();

    },[])
    
    useEffect(() => {   
    // console.log("This is the teams table", teamTable)  
    },[teamMembers])
    
    useEffect(() => {  
      console.log("Recommendations have been changed to", recommendations)
      const approvedRec = recommendations.filter((rec)=>{
        return rec.isApproved
      });//filters 
    
    console.log("These are the apporved recos", approvedRec);
    
     },[recommendations])
    const addToApprovedHandler =(appRec)=>{
      console.log("These are the approved recommendations", approved);
      if(approved){
        setApproved([...approved, appRec])
      }else{
        setApproved(appRec)
      }

    }
    //team member handlers
    const addTeamMemberHandler= async(member) =>{
     const creds = await getCreds() ;
            sendEmail("New Team member",member, creds, "infohorus@bahatitech.co.za");
        
        const response = await API.graphql(graphqlOperation(
          mutations.createTeam,{
            input:{
              
              email: member.email,
                first_name: member.fname,
                last_name: member.lname,
                job_title: member.jobtitle,
                company: userDetails.company,
                userID: userDetails.id,
                user_type: "Team member",
                
              }
              
            })).catch(e=>{
              console.log("adding new team member error", e)
            });
            // console.log("You've add team member::",response)
            setTeamMembers([...teamMembers, response.data.createTeam]);
        teamsTableHandler([...teamMembers, response.data.createTeam]);
        
      
    }

    const getAssessReportHandler = async (userId)=>{

      const response = API.graphql({query:queries.listAssessorReports, variables: {filter: {userId: {contains: userId}}}}).then((arpd)=>{
        if(arpd)
      assRepHandler(arpd.data.listAssessorReports.items[0])
      MILHandler(arpd.data.listAssessorReports.items[0])
      }).catch((err)=>{console.log("Error getting the Assessor Report", err)})
      
    }

    const MILHandler = (assessData) =>{
      if(assessData)
      if(assessData.assessScore >= 70){
        setMilLevel("MIL3")
      }else if( assessData.assessScore >=50 && assessData.assessScore <= 70 ){
        setMilLevel("MIL2")
      }else if(assessData.assessScore >=20 && assessData.assessScore <= 50){
        setMilLevel("MIL1")
      }else{
        setMilLevel("MIL0")
      } 
    }

    const updateTeamMemberHandler= async (member) =>{
      const response = await API.graphql({ query: mutations.updateTeam, variables: {input: member}})
        .catch((err)=>{console.log("There was an error in updating the team member", err)});

        setTeamMembers(teamMembers.map((teamMember)=>{
          return teamMember.id === member.id ? {...response.data.updateTeam}: teamMember
        }))
    }
    const deleteTeamMemberHandler= (id) =>{
        const newTeam = teamMembers.filter((teamMember)=>{
          return teamMember.id !== id;
        })  
        setTeamMembers(newTeam);
        teamsTableHandler(newTeam);
    }
    const teamsTableHandler = (team) =>{
      const newTeam = team.filter((member)=>{
        return member._deleted === null
      })
      const data = {columns: COLUMNS,rows: newTeam}
      setTeamTable(data)

    }

    const recommendationsHandler = async (id)=>{
      const recommendations = await listProps("Rec", id)
      // getApproved(recommendations);
      getPending(recommendations);

    }
const eventsHandler = (Tasks)=>{
  let taskEvents=[]
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

const addEventHandler=(task)=>{
  let evnt ={
    id: task.id,
    color: task.color,
    from: task.taskStart.toString().replace("Z",""),
    to: task.taskEnd.toString().replace("Z",""),
    title: task.taskDesc
  };
  setEvt([...evt, evnt])  

}
    const tasksHandler = async (id)=>{
    const Tasks = await listProps("Task",id);

    setTasks(Tasks)
    eventsHandler(Tasks)  
  }

    const assRepHandler = (data)=>{
      setAssRepData(data);
    }

    const newsArticleshandler = async () =>{
      const articles = await listArticles();
      articles.sort((a,b) => (a.datePublished < b.datePublished) ? 1 : ((b.datePublished < a.datePublished) ? -1 : 0))
      setNews(articles);
    }


      async function listArticles() { //gets the articles from the bing news api     
        var url = "https://bing-news-search1.p.rapidapi.com/news/search?q=critical%20infrastructure%20hacking%20ransomware&freshness=Month&originalImg=true&textFormat=Raw&safeSearch=Strict"
        var headers={
          "method": "GET",
          "headers": {
            "x-bingapis-sdk": "true",
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            'X-Search-Location': 'ZA',
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
            data = await API.graphql({query: queries.listTaskss, variables: {filter: {userID: {contains: userId}}}}).then(promise => {
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

  
    function getPending(recommendations){//
            const pendingRecs = recommendations.filter((rec)=>{
              return rec.isApproved === false;
            });//filters 
            console.log("Pending Recomendations",pendingRecs)
          setRecommendations(recommendations);
          }
          
       
      function approve(rec){
        rec.isApproved = true;
        setRecommendations(recommendations.map((recommendation)=>{
          // console.log(recommendation.isApproved)
          return recommendation.id === rec.id ? {...recommendation, isApproved: true}: recommendation;
        }))
        if(rec){
          addToApprovedHandler(rec)
        }
        // console.log("rec is ",rec.isApproved)

       }

       async function getCreds(){
        let cred  = await API.graphql(graphqlOperation(queries.getCred, { id: 'ak100' })).catch(err=>{
          console.log("Error getting creds",err)
        });
        return cred;
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

  const getQuestionnaire = async (id) =>{
    const response = await API.graphql({query: queries.listQuestionnaires, variables:{filter: {userId: {contains: id}}}})
    .catch((err)=>{console.log("Error getting questionnaire", err)});

    if(response.data.listQuestionnaires.items.length !== 0)
      setHasQuestionnaire(true)
      setQuestionnaire(response.data.listQuestionnaires.items[0])
  }

  const createQuestionnaireHandler = async (qid)=>{
    const response = await API.graphql(graphqlOperation(
      mutations.createQuestionnaire, {
          input: {
              id: qid,
              questionaireCompleted: false,
              currentPage: 0,
              userId: userDetails.id,
          }
      }
      )).catch(err=>{console.error("Error creating questionnaire",err)});
      setHasQuestionnaire(true)
      setQuestionnaire(response.data.createQuestionnaire)
  }

    async function saveChanges(rec, tasks){ //update the backend data
      console.log("saving recommendation", rec )
       if(rec){
          for (let i in rec)
          {
            let approvedRecommendation = {
              id: rec[i].id,
              isApproved: true,
              _version: rec[i]._version 
            }
          await API.graphql({ query: mutations.updateRecommendations, variables: {input:approvedRecommendation}}).catch(err=>{console.error("Error updating recommendations", err)});
          }
      }
      if (tasks){
        for (let i in tasks){
          await API.graphql({query: mutations.updateTasks, variables: {input: tasks[i]}}).catch(err=>{console.error("Error updating task", err)})
        }
      }
     
    
    }

     async function addTask(task){//add task to recommendation
      
      if (task){   
       await API.graphql({query: mutations.createTasks, variables: {input: task}})
       .then((res)=>{
        console.log("THis is tasks result",res)
        if(res)
        setTasks([...tasks, res.data.createTasks])
        addEventHandler(res.data.createTasks)
       })
       .catch((err)=>{
           console.log("Task upload error::::>",err)
          })

          
        }
    }
    
      return (
    <div>
      {otpVerified? <section>
      <AppSidebar group={userGroup} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader tasks={tasks} recommendations={recommendations} signOut={signOut} saveChanges={saveChanges} approved={approved} />
        <div className="body flex-grow-1 px-3">
          <AppContent approve={approve} approved={approved} recommendations={recommendations} getAssessReportHandler={getAssessReportHandler} errModal={errModal} teamTable={teamTable} MilLevel={MilLevel} handleMemberAdd={addTeamMemberHandler} updateMember={updateTeamMemberHandler} handleCreateQuestionnaire={createQuestionnaireHandler} deleteMember={deleteTeamMemberHandler} errToggle={errToggle} hasQuestionnaire={hasQuestionnaire} questionnaire={questionnaire} revModal={revModal} revToggle={revToggle}  msg={msg} setMsg={setMsg}  tasks={tasks} rec={rec} toggle={toggle} news={news} messages={messages} setMessages={setMessages} modal={modal} events={evt} userDetails={userDetails}  assRepData={assRepData}  setRec={setRec} addTask={addTask} />
        </div>
        <AppFooter />
      </div>
  </section>: <Redirect to="/login" />}
    </div>
  )
}

export default DefaultLayout
