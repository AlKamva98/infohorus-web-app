// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Section, Question, QuestionQuestionnaire, Questionnaire, User, Answer } = initSchema(schema);

export {
  Section,
  Question,
  QuestionQuestionnaire,
  Questionnaire,
  User,
  Answer
};