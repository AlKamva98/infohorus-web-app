import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Questionnaire {
  readonly id: string;
  readonly Answers?: (Answer | null)[];
  readonly questionnaireCompleted?: string;
  readonly userID?: string;
  readonly User?: User;
  constructor(init: ModelInit<Questionnaire>);
  static copyOf(source: Questionnaire, mutator: (draft: MutableModel<Questionnaire>) => MutableModel<Questionnaire> | void): Questionnaire;
}

export declare class Answer {
  readonly id: string;
  readonly answer?: string;
  readonly Questionnaire?: Question;
  readonly questionnaireID?: string;
  readonly Question?: Question;
  readonly questionID?: number;
  constructor(init: ModelInit<Answer>);
  static copyOf(source: Answer, mutator: (draft: MutableModel<Answer>) => MutableModel<Answer> | void): Answer;
}

export declare class Question {
  readonly id: string;
  readonly Answer?: Answer;
  readonly question?: string;
  readonly questionCategory?: string;
  readonly questionName?: string;
  readonly questionNu?: string;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly job_title?: string;
  readonly company?: string;
  readonly employees?: string;
  readonly country?: string;
  readonly industry?: string;
  readonly Questionnaire?: Questionnaire;
  readonly questionnaireID?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}