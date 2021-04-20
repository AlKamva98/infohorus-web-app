import React from 'react';
import {Home} from './pages/EndUser/Home.js'
import {About} from './pages/EndUser/About.js'
import Contact from './pages/EndUser/Contact.js'
import {Payment} from './pages/EndUser/Payment.js'
import {Pricing} from './pages/EndUser/Pricing.js'
import {Recomendations} from './pages/EndUser/Recomendations.js'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Amplify from 'aws-amplify';
//import aws_exports from './aws-exports';
import { Questions } from './pages/EndUser/Questions.js';
import '@aws-amplify/ui/dist/style.css';
import Register from './components/Register/Register.js';
import {ExpertViewCustList  } from "./pages/ExpertViewCustList";
import {ExpertViewAssess  } from "./pages/ExpertViewAssess";
import { SignIn } from './components/Sign-in/Sign-in.js';



function App(){
    return (
      <>
      <Router>
      <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/questions" exact component ={Questions}/>
        <Route path="/about" component={About} />
        <Route path="/contact"component={Contact}/>
        <Route path="/pricing"component={Pricing}/>
        <Route path="/recomendations" exact component={Recomendations}/>
        <Route path="/register"component={Register}/>
        <Route path="/signIn" component={SignIn}/>
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
