import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer } from '@coreui/react'

// routes config
import {routes} from '../../routes'

const AppContent = (props) => {
    const {approve, approved, recommendations, errModal, errToggle, revToggle, revModal, msg, rec,toggle,modal, setMessages, setRec,teamTable,addTask, tasks, news,assRep, continueAss, events, userDetails, messages }= props;
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
<route.component teamList={a} approve={approve} approved={approved} recommendations={recommendations} errModal={errModal} errToggle={errToggle} revToggle={revToggle} revModal={revModal} msg={msg} rec={rec} toggle={toggle} modal={modal} setMessages={setMessages}  setRec={setRec} teamTable= {teamTable} addTask= {addTask} tasks= {tasks} news= {news} assRep= {assRep} continueAss= {continueAss} events= {events} userDetails= {userDetails}  {...props} />
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
