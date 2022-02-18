import React from 'react';
import { SurveyJS } from './SurveyJS';



function QuestionsComp(props) {
  const {
    teamList, approved, userDetails, questionnaire, hasQuestionnaire
  } = props;

  return (
    <div className="w-full mx-auto bg-cover bg-no-repeat bg-center bg-contact" >
      <SurveyJS teamList={teamList} approved={approved} hasQuestionnaireData={hasQuestionnaire} userDetails={userDetails} questionnaireData={questionnaire} className="justify-center bg-white opacity-90" />
    </div>)
}

export default QuestionsComp;