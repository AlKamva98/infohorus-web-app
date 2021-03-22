import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Answers {
  readonly id: string;
  readonly UserAnswers?: User;
  readonly username: string;
  readonly answers?: string[];
  readonly documents?: string[];
  readonly completed: boolean;
  constructor(init: ModelInit<Answers>);
  static copyOf(source: Answers, mutator: (draft: MutableModel<Answers>) => MutableModel<Answers> | void): Answers;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly fname?: string;
  readonly lname?: string;
  readonly jobtitle?: string;
  readonly company?: string;
  readonly employees?: string;
  readonly industry?: string;
  readonly country?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}