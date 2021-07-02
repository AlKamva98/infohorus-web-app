import React, { useEffect } from 'react';
import {Home} from './pages/EndUser/Home.js'
import {About} from './pages/EndUser/About.js'
import Contact from './pages/EndUser/Contact.js'
import {Pricing} from './pages/EndUser/Pricing.js'
import {Recomendations} from './pages/EndUser/Recomendations.js'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Amplify from 'aws-amplify';
//import aws_exports from './aws-exports';
import {Questions} from './pages/EndUser/Questions.js';
import '@aws-amplify/ui/dist/style.css';
import Register from './components/Register/Register.js';
import {Demo} from "./pages/EndUser/Demo";
import Terms from './pages/Terms'
import PrivacyNotice from './pages/PrivacyNotice'
import {ExpertViewCustList} from "./pages/ExpertViewCustList";
import {ExpertViewAssess} from "./pages/ExpertViewAssess";
import {SignIn} from './components/Sign-in/Sign-in.js';
import Dashboard from './dashboard/app/dashboard/Dashboard';
import Buttons from './dashboard/app/basic-ui/Buttons'
import Dropdowns from './dashboard/app/basic-ui/Dropdowns';
import BasicElements from './dashboard/app/form-elements/BasicElements' ;
import BasicTable from './dashboard/app/tables/BasicTable';
import Mdi from './dashboard/app/icons/Mdi';
import ChartJs from './dashboard/app/charts/ChartJs';
import Error404 from './dashboard/app/error-pages/Error404';
import Error500 from './dashboard/app/error-pages/Error500';
import Login from './dashboard/app/user-pages/Login';
import Register1 from './dashboard/app/user-pages/Register';
//This is the data
import './css/style.scss';
import './dashboard/app/App.scss'
import AOS from 'aos';

function App(){
   //const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  //   focusHandling('outline');
  // }, [location.pathname]); // triggered on route change

    return (
      <>
      <Router>
      <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/contact"component={Contact}/>
        <Route path="/demo"component={Demo}/>
        <Route path="/register"component={Register}/>
        <Route path="/questions" exact component ={Questions}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/recomendations" exact component={Recomendations}/>
        <Route path="/expertview/custlist" exact component={ExpertViewCustList}/>
        <Route path="/expertview/assess" exact component={ExpertViewAssess}/>
        <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/form-Elements/basic-elements" component={ BasicElements } />
          <Route path="/tables/basic-table" component={ BasicTable } />
          <Route path="/icons/mdi" component={ Mdi } />
          <Route path="/charts/chart-js" component={ ChartJs } />
          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

        <Route path='/instagram' >
  {() => { 
       window.location.href = 'https://www.instagram.com/bahatitech/'; 
     return null;
  }}
</Route>
        <Route path='/twitter' >
  {() => { 
       window.location.href = 'https://twitter.com/bahati_tech/'; 
     return null;
  }}
</Route>
        <Route path='/facebook' >
  {() => { 
          window.location.href = 'https://www.facebook.com/bahatitech17/'; 
       return null;
  }}
</Route>
        <Route path='/linkedin' >
  {() => { 
          window.location.href = 'https://www.linkedin.com/company/bahati-tech/'; 
       return null;
  }}
</Route>
        <Route path='/bahati' >
  {() => { 
          window.location.href = 'https://www.bahatitech.co.za/'; 
       return null;
  }}
</Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/privacy">
          <PrivacyNotice />
        </Route>
  
      </Switch>
      </div>
      </Router>
      
      </>
    );
    }

    Amplify.Logger.LOG_LEVEL = "DEBUG";

export default App;