import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class QuestionnaireQuestionAnswer {
  readonly id: string;
  readonly questionID?: string;
  readonly answerID?: string;
  readonly questionnaireID?: string;
  readonly Answers?: (Answer | null)[];
  readonly Questions?: (Question | null)[];
  readonly Questionnaire?: Questionnaire;
  constructor(init: ModelInit<QuestionnaireQuestionAnswer>);
  static copyOf(source: QuestionnaireQuestionAnswer, mutator: (draft: MutableModel<QuestionnaireQuestionAnswer>) => MutableModel<QuestionnaireQuestionAnswer> | void): QuestionnaireQuestionAnswer;
}

export declare class Answer {
  readonly id: string;
  readonly answer?: string;
  readonly Questionnaire?: QuestionnaireQuestionAnswer;
  readonly questionnaireID?: string;
  readonly Question?: QuestionnaireQuestionAnswer;
  readonly questionID?: string;
  readonly QuestionnaireQuestionAnswer?: QuestionnaireQuestionAnswer;
  readonly questionnairequestionanswerID?: string;
  constructor(init: ModelInit<Answer>);
  static copyOf(source: Answer, mutator: (draft: MutableModel<Answer>) => MutableModel<Answer> | void): Answer;
}

export declare class Question {
  readonly id: string;
  readonly question?: string;
  readonly questionName?: string;
  readonly Answers?: (Answer | null)[];
  readonly QuestionnaireQuestionAnswers?: (QuestionnaireQuestionAnswer | null)[];
  readonly questionnairequestionanswerID?: string;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

export declare class Questionnaire {
  readonly id: string;
  readonly questionaireCompleted?: boolean;
  readonly questionnaireQuestionanswerID?: string;
  readonly User?: User;
  readonly userId?: string;
  readonly Answers?: (Answer | null)[];
  readonly QuestionnaireQuestionAnswer?: QuestionnaireQuestionAnswer;
  constructor(init: ModelInit<Questionnaire>);
  static copyOf(source: Questionnaire, mutator: (draft: MutableModel<Questionnaire>) => MutableModel<Questionnaire> | void): Questionnaire;
}

export declare class User {
  readonly id: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly email?: string;
  readonly job_title?: string;
  readonly company?: string;
  readonly employees?: string;
  readonly industry?: string;
  readonly country?: string;
  readonly Questionnaire?: QuestionnaireQuestionAnswer;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class File {
  readonly id: string;
  readonly data?: string;
  constructor(init: ModelInit<File>);
  static copyOf(source: File, mutator: (draft: MutableModel<File>) => MutableModel<File> | void): File;
}