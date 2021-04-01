// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Report, Answer, User, RecomendationUser, Recomendation, Question, Account } = initSchema(schema);

export {
  Report,
  Answer,
  User,
  RecomendationUser,
  Recomendation,
  Question,
  Account
};