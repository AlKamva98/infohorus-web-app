// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cred, Tasks, Recommendations, User, QuestionnaireQuestionAnswer, Answer, Question, Questionnaire, AssessorReport, File } = initSchema(schema);

export {
  Cred,
  Tasks,
  Recommendations,
  User,
  QuestionnaireQuestionAnswer,
  Answer,
  Question,
  Questionnaire,
  AssessorReport,
  File
};