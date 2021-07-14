import React from 'react';
import { SurveyJS } from './SurveyJS';
import { Header } from '../index/Header';
import Footer from '../index/Footer.js';
import './questions.css';
import '../../pages/EndUser/body.css'

function QuestionsComp(props) {
  const {
    buttonLabel, className
  } = props;

  return (<>
    <Header />
    <div className="w-3/4 mx-auto bg-cover bg-no-repeat bg-center bg-contact" >
    <SurveyJS className="justify-center bg-white opacity-90" />
    </div>
    <Footer />
  </>
  )
}

export default QuestionsComp;