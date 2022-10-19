import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer } from '@coreui/react'

// routes config
import {routes} from '../../routes'

const AppContent = (props) => {
    const {approve, assRepData, approved,deleteMember,updateMember,handleMemberAdd, recommendations, errModal, errToggle,getAssessReportHandler, revToggle, revModal,handleCreateQuestionnaire, msg, rec,toggle,modal, setMessages, setRec,teamTable,addTask, tasks, news, continueAss, events, userDetails, MilLevel,hasQuestionnaire, questionnaire}= props;
    console.log("This is approved on app content page",approved)

    const teamList = ()=>{
    var t;
    var e;
    var mmb = [];
    if(teamTable.rows){ 
    for(t in teamTable.rows){
      var f = teamTable.rows[t].email;
      e={value: f, label: f}
      mmb.push(e)
    }
  }
    return mmb;
  }
  var a =teamList();
  return (
    <CContainer lg className="w-full">
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
<route.component teamList={a} approve={approve} handleMemberAdd={handleMemberAdd} deleteMember={deleteMember} updateMember={updateMember} getAssessReportHandler={getAssessReportHandler} hasQuestionnaire={hasQuestionnaire} questionnaire={questionnaire} approved={approved} handleCreateQuestionnaire={handleCreateQuestionnaire} recommendations={recommendations} errModal={errModal} errToggle={errToggle} revToggle={revToggle} revModal={revModal} msg={msg} rec={rec} toggle={toggle} modal={modal} setMessages={setMessages} MilLevel={MilLevel} setRec={setRec} teamTable= {teamTable} addTask= {addTask} tasks= {tasks} news= {news} assRepData={assRepData} continueAss= {continueAss} events= {events} userDetails= {userDetails}  {...props} />
                    </>
                  )}
                />
              )
            )
          })}
        <Redirect from="/dash" to="/dash/dashboard" />
        </Switch>
    </CContainer>
  )
}

export default React.memo(AppContent)
