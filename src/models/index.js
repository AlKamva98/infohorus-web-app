// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Team, User, QuestionnaireQuestionAnswer, Answer, Question, Questionnaire, Recommendations, Tasks, AssessorReport, Cred, File } = initSchema(schema);

export {
  Team,
  User,
  QuestionnaireQuestionAnswer,
  Answer,
  Question,
  Questionnaire,
  Recommendations,
  Tasks,
  AssessorReport,
  Cred,
  File
};