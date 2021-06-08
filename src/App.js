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
import {Findings} from "./pages/EndUser/Findings";
import {Demo} from "./pages/EndUser/Demo";
import Terms from './pages/Terms'
import PrivacyNotice from './pages/PrivacyNotice'
import {ExpertViewCustList} from "./pages/ExpertViewCustList";
import {ExpertViewAssess} from "./pages/ExpertViewAssess";
import {SignIn} from './components/Sign-in/Sign-in.js';

import './css/style.scss';

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
        <Route path="/findings" exact component={Findings}/>
        <Route path="/expertview/custlist" exact component={ExpertViewCustList}/>
        <Route path="/expertview/assess" exact component={ExpertViewAssess}/>
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
