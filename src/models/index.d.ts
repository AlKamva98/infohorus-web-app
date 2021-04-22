import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Section {
  readonly id: string;
  readonly sectionName?: string;
  readonly sectionAnswered?: boolean;
  constructor(init: ModelInit<Section>);
  static copyOf(source: Section, mutator: (draft: MutableModel<Section>) => MutableModel<Section> | void): Section;
}

export declare class Answer {
  readonly id: string;
  readonly answer?: string;
  constructor(init: ModelInit<Answer>);
  static copyOf(source: Answer, mutator: (draft: MutableModel<Answer>) => MutableModel<Answer> | void): Answer;
}

export declare class Question {
  readonly id: string;
  readonly question?: string;
  readonly questionName?: string;
  readonly questionNum?: string;
  readonly questionCategory?: string;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

export declare class Questionnaire {
  readonly id: string;
  readonly questionaireCompleted?: boolean;
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
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}