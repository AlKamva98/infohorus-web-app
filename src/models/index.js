// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Section, Answer, Question, Questionnaire, User } = initSchema(schema);

export {
  Section,
  Answer,
  Question,
  Questionnaire,
  User
};