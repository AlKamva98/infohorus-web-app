// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Answers, User } = initSchema(schema);

export {
  Answers,
  User
};