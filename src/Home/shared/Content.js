import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer } from '@coreui/react'

// routes config
import {mainRoutes} from '../../routes'

const Content = () => {

 
  return (
    
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
  )
}

export default React.memo(Content)
