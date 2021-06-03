// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { QuestionnaireQuestionAnswer, Answer, Question, Questionnaire, User } = initSchema(schema);

export {
  QuestionnaireQuestionAnswer,
  Answer,
  Question,
  Questionnaire,
  User
};