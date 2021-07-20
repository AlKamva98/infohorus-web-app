// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AssessorReport, Assessor, QuestionnaireQuestionAnswer, Answer, Question, Questionnaire, User, File } = initSchema(schema);

export {
  AssessorReport,
  Assessor,
  QuestionnaireQuestionAnswer,
  Answer,
  Question,
  Questionnaire,
  User,
  File
};