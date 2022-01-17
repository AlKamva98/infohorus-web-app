import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer } from '@coreui/react'

// routes config
import {routes} from '../../routes'

const AppContent = (props) => {
    const {approve, approved, recommendations, errModal, errToggle, revToggle, revModal, msg, rec,toggle,modal, setMessages, setRec, hasData,datatable,addTask, tasks ,hasTData, news,assRep, continueAss, events, userId, messages }= props;
    console.log("This is messages on app content page",messages)
    const teamList = ()=>{
    var t;
    var e;
    var mmb = [];
    if(datatable.rows){ 
    for(t in datatable.rows){
      var f = datatable.rows[t].email;
      e={value: f, label: f}
      mmb.push(e)
    }
  }
    return mmb;
  }
  var a =teamList();
  console.log("These are the messages in the App content page:::", messages);
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
                      <route.component approve={approve} approved={approved} RecomendationsList={recommendations} 
          errModal={errModal} datatable={datatable} hasTData={hasTData} hasData={hasData} errToggle={errToggle} revModal={revModal} revToggle={revToggle} msg={msg} rec={rec} news={news} toggle={toggle} modal={modal} messages={messages} setMessages={setMessages} setRec={setRec} userId={userId} teamList={a} addTask={addTask} tasks={tasks} events={events} {...props} />
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
