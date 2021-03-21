import React from 'react';
import {Home} from './pages/EndUser/Home.js'
import {About} from './pages/EndUser/About.js'
import {Contact} from './pages/EndUser/Contact.js'
import {Payment} from './pages/EndUser/Payment.js'
import {Pricing} from './pages/EndUser/Pricing.js'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Amplify from 'aws-amplify';
//import aws_exports from './aws-exports';
import { Questions } from './pages/EndUser/Questions.js';
import '@aws-amplify/ui/dist/style.css';
import Register from './components/Register/Register.js';



function App(){
  
    return (
      <Router>
      <div className="App">
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/questions" component ={Questions}/>
        <Route path="/about" component={About} />
        <Route path="/contact" components={Contact}/>
        <Route path="/payment"component={Payment}/>
        <Route path="/pricing"component={Pricing}/>
        <Route path="/register"component={Register}/>
      </Switch>
      
      </div>
      </Router>
    );
    }

    Amplify.Logger.LOG_LEVEL = "DEBUG";

export default App;
