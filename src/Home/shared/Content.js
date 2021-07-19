import React, { Suspense, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import {mainRoutes} from '../../routes'
const Index = React.lazy(() => import('../views/index/Index'))

const Content = () => {

 
  return (
    <div className="bg-white w-full">
    <CContainer lg>
        <Switch>
          {mainRoutes.map((route, idx) => {
            return (
              route.component && (
                <Route
                key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
                )
            )
          })}
          <Redirect from="/main" to='/main/index'/>
        </Switch>
      
    </CContainer>
                </div>
  )
}

export default React.memo(Content)
