import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Report {
  readonly id: string;
  readonly report_num?: string;
  readonly report_desc?: string;
  readonly AnswersReport?: (Answer | null)[];
  constructor(init: ModelInit<Report>);
  static copyOf(source: Report, mutator: (draft: MutableModel<Report>) => MutableModel<Report> | void): Report;
}

export declare class Answer {
  readonly id: string;
  readonly UserAnswer?: User;
  readonly username: string;
  readonly answers?: string;
  readonly documents?: string;
  readonly completed: boolean;
  readonly questionID?: string;
  readonly QAnswer?: Question;
  readonly reportID?: string;
  constructor(init: ModelInit<Answer>);
  static copyOf(source: Answer, mutator: (draft: MutableModel<Answer>) => MutableModel<Answer> | void): Answer;
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
  readonly recomendations?: (RecomendationUser | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class RecomendationUser {
  readonly id: string;
  readonly recomendation: Recomendation;
  readonly user: User;
  constructor(init: ModelInit<RecomendationUser>);
  static copyOf(source: RecomendationUser, mutator: (draft: MutableModel<RecomendationUser>) => MutableModel<RecomendationUser> | void): RecomendationUser;
}

export declare class Recomendation {
  readonly id: string;
  readonly rec_num?: string;
  readonly rec_date?: string;
  readonly assigned_to?: string;
  readonly accepted?: boolean;
  readonly estimated_completion_date?: string;
  readonly completed?: boolean;
  readonly UserRecomendations?: (RecomendationUser | null)[];
  constructor(init: ModelInit<Recomendation>);
  static copyOf(source: Recomendation, mutator: (draft: MutableModel<Recomendation>) => MutableModel<Recomendation> | void): Recomendation;
}

export declare class Question {
  readonly id: string;
  readonly question: string;
  readonly inputType?: string;
  readonly questSection?: string;
  readonly questType?: string;
  readonly questTitle?: string;
  readonly QAnswer?: (Answer | null)[];
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

export declare class Account {
  readonly id: string;
  readonly account_num?: string;
  readonly account_status?: string;
  readonly payment_method?: string;
  readonly UserAccount?: User;
  constructor(init: ModelInit<Account>);
  static copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}