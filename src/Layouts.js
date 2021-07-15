import React, { Suspense } from 'react';
import {  Redirect, Route, Switch } from 'react-router-dom';
import {  CSpinner } from '@coreui/react';

//Containers
const DefaultLayout = React.lazy(() => import('./Dash/layout/DefaultLayout'))
const MainLayout = React.lazy(() => import('./Home/layout/MainLayout'))


const Layouts = () => {
  return (
    
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          <Route path="/dash" name="DashboardHome" render={(props) => <DefaultLayout {...props} />} />
          <Route path="/main" name="Main" render={(props) => <MainLayout {...props} />} />
          <Redirect from="/" to="/main"/>
        </Switch>
      </Suspense>
    
  )
}

export default React.memo(Layouts);
