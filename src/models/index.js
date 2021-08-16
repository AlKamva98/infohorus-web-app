// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tasks, Recommendations, AssessorReport, Assessor, QuestionnaireQuestionAnswer, Answer, Question, Questionnaire, User, File } = initSchema(schema);

export {
  Tasks,
  Recommendations,
  AssessorReport,
  Assessor,
  QuestionnaireQuestionAnswer,
  Answer,
  Question,
  Questionnaire,
  User,
  File
};