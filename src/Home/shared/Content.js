import React, { Suspense, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import {mainRoutes} from '../../routes'

const Content = () => {

 
  return (
    <div className="bg-white w-full">
    <CContainer lg>
      {/* <Suspense fallback={<CSpinner color="primary" />}>
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
      </Suspense> */}
    </CContainer>
                </div>
  )
}

export default React.memo(Content)
