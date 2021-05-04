// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { QuestionSection, Section, Question, QuestionnaireQuestion, AnswerQuestion, Answer, Questionnaire, User } = initSchema(schema);

export {
  QuestionSection,
  Section,
  Question,
  QuestionnaireQuestion,
  AnswerQuestion,
  Answer,
  Questionnaire,
  User
};