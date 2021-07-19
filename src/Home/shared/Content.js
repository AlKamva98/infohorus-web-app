import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'


// routes config
import {mainRoutes} from '../../routes'

const Content = () => {

 
  return (
    
    <div className="w-full">
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
    </div>
  )
}

export default React.memo(Content)
