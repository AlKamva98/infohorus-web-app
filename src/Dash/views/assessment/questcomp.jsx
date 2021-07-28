import React from 'react';
import { SurveyJS } from './SurveyJS';



function QuestionsComp(props) {
  const {
    buttonLabel, className
  } = props;

  return (
    <div className="w-full mx-auto bg-cover bg-no-repeat bg-center bg-contact" >
      <SurveyJS className="justify-center bg-white opacity-90" />
    </div>)
}

export default QuestionsComp;