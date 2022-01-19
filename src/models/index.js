// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Chat, Message, User, QuestionnaireQuestionAnswer, Answer, Question, Questionnaire, Recommendations, Tasks, AssessorReport, Team, Cred, File } = initSchema(schema);

export {
  Chat,
  Message,
  User,
  QuestionnaireQuestionAnswer,
  Answer,
  Question,
  Questionnaire,
  Recommendations,
  Tasks,
  AssessorReport,
  Team,
  Cred,
  File
};