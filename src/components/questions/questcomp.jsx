import React from 'react';
import {SurveyJS} from './SurveyJS';
import {Header} from '../index/Header';
import Footer from '../index/Footer.js';
import './questions.css';
import '../../pages/EndUser/body.css'

 function QuestionsComp(props){
   const {
    buttonLabel, className
  } = props;
   
 return(<>
  <Header/>
  <SurveyJS className="flex justify-center mx-auto" />
  <Footer/>
    </>
 )
}

export default QuestionsComp;