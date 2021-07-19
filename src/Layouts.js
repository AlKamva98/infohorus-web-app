import React from 'react';
import {  Redirect, Route, Switch } from 'react-router-dom';

//Containers
import DefaultLayout from './Dash/layout/DefaultLayout';
import MainLayout from './Home/layout/MainLayout';


const Layouts = () => {
  return (
        <Switch>
          <Route path="/dash" name="DashboardHome" render={(props) => <DefaultLayout {...props} />} />
          <Route path="/main" name="Main" render={(props) => <MainLayout {...props} />} />
          <Redirect from="/" to="/main"/>
        </Switch>
    
  ) 
}

export default React.memo(Layouts);
