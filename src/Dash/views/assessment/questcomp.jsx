import React from 'react';
import { SurveyJS } from './SurveyJS';



function QuestionsComp(props) {
  const {
    teamList, approved, userDetails, questionnaire, hasQuestionnaire,handleCreateQuestionnaire
  } = props;

  return (
    <div >
      <SurveyJS teamList={teamList} approved={approved} hasQuestionnaireData={hasQuestionnaire} handleCreateQuestionnaire={handleCreateQuestionnaire} userDetails={userDetails} questionnaireData={questionnaire} className="justify-center bg-white opacity-90" />
    </div>)
}

export default QuestionsComp;