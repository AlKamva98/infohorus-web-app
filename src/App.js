import React, { useEffect } from 'react';
import {Home} from './pages/EndUser/Home.js'
import {About} from './pages/EndUser/About.js'
import Contact from './pages/EndUser/Contact.js'
import {Pricing} from './pages/EndUser/Pricing.js'
import {Recomendations} from './pages/EndUser/Recomendations.js'
import './App.css';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import Amplify from 'aws-amplify';
//import aws_exports from './aws-exports';
import {Questions} from './pages/EndUser/Questions.js';
import '@aws-amplify/ui/dist/style.css';
import Register from './components/Register/Register.js';
import {Findings} from "./pages/EndUser/Findings";
import {ExpertViewCustList} from "./pages/ExpertViewCustList";
import {ExpertViewAssess} from "./pages/ExpertViewAssess";
import {SignIn} from './components/Sign-in/Sign-in.js';
import { Landing } from './pages/EndUser/Landing.js';
import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';
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
        <Route path="/" exact component={Landing}/>
        <Route path="/about" component={About} />
        <Route path="/contact"component={Contact}/>
        <Route path="/pricing"component={Pricing}/>
        <Route path="/register"component={Register}/>
        <Route path="/questions" exact component ={Questions}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/recomendations" exact component={Recomendations}/>
        <Route path="/findings" exact component={Findings}/>
        <Route path="/expertview/custlist" exact component={ExpertViewCustList}/>
        <Route path="/expertview/assess" exact component={ExpertViewAssess}/>
      </Switch>
      </div>
      </Router>
      
      </>
    );
    }

    Amplify.Logger.LOG_LEVEL = "DEBUG";

export default App;
