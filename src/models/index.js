// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Chat, Message, User, QuestionnaireQuestionAnswer, Answer, Question, Questionnaire, AssessorReport, Recommendations, Tasks, Team, Cred, File } = initSchema(schema);

export {
  Chat,
  Message,
  User,
  QuestionnaireQuestionAnswer,
  Answer,
  Question,
  Questionnaire,
  AssessorReport,
  Recommendations,
  Tasks,
  Team,
  Cred,
  File
};