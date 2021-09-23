import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer } from '@coreui/react'

// routes config
import {routes} from '../../routes'

const AppContent = (props) => {
    const {approve, approved, recommendations, errModal, errToggle, revToggle, revModal, msg, tasks, rec,toggle,modal, setRec, addTask, hasData, news }= props;
    console.log("This is recommendations on app content page",recommendations)
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
          errModal={errModal} hasData={hasData} errToggle={errToggle} revModal={revModal} revToggle={revToggle} msg={msg} tasks={tasks} rec={rec} news={news} toggle={toggle} modal={modal} setRec={setRec} addTask={addTask} {...props} />
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
