// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Questionnaire, Answer, Question, User } = initSchema(schema);

export {
  Questionnaire,
  Answer,
  Question,
  User
};