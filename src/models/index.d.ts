import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Chat {
  readonly id: string;
  readonly sessionStart?: string | null;
  readonly sessionEnd?: string | null;
  readonly isClosed?: boolean | null;
  readonly Messages?: (Message | null)[] | null;
  readonly User?: User | null;
  readonly userID?: string | null;
  constructor(init: ModelInit<Chat>);
  static copyOf(source: Chat, mutator: (draft: MutableModel<Chat>) => MutableModel<Chat> | void): Chat;
}

export declare class Message {
  readonly id: string;
  readonly chatID?: string | null;
  readonly Chat?: Chat | null;
  readonly content?: string | null;
  readonly seen?: boolean | null;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

export declare class User {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email?: string | null;
  readonly job_title?: string | null;
  readonly company?: string | null;
  readonly employees?: string | null;
  readonly industry?: string | null;
  readonly country?: string | null;
  readonly Questionnaire?: QuestionnaireQuestionAnswer | null;
  readonly Recommendations?: (Recommendations | null)[] | null;
  readonly userType?: string | null;
  readonly phone?: string | null;
  readonly teamID?: string | null;
  readonly chatID?: string | null;
  readonly Teams?: (Team | null)[] | null;
  readonly Chats?: (Chat | null)[] | null;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class QuestionnaireQuestionAnswer {
  readonly id: string;
  readonly questionID?: string | null;
  readonly answerID?: string | null;
  readonly questionnaireID?: string | null;
  readonly Answers?: (Answer | null)[] | null;
  readonly Questions?: (Question | null)[] | null;
  readonly Questionnaire?: Questionnaire | null;
  readonly assessorreportID?: string | null;
  constructor(init: ModelInit<QuestionnaireQuestionAnswer>);
  static copyOf(source: QuestionnaireQuestionAnswer, mutator: (draft: MutableModel<QuestionnaireQuestionAnswer>) => MutableModel<QuestionnaireQuestionAnswer> | void): QuestionnaireQuestionAnswer;
}

export declare class Answer {
  readonly id: string;
  readonly answer?: string | null;
  readonly Questionnaire?: QuestionnaireQuestionAnswer | null;
  readonly questionnaireID?: string | null;
  readonly Question?: QuestionnaireQuestionAnswer | null;
  readonly questionID?: string | null;
  readonly QuestionnaireQuestionAnswer?: QuestionnaireQuestionAnswer | null;
  readonly questionnairequestionanswerID?: string | null;
  constructor(init: ModelInit<Answer>);
  static copyOf(source: Answer, mutator: (draft: MutableModel<Answer>) => MutableModel<Answer> | void): Answer;
}

export declare class Question {
  readonly id: string;
  readonly question?: string | null;
  readonly questionName?: string | null;
  readonly Answers?: (Answer | null)[] | null;
  readonly QuestionnaireQuestionAnswers?: (QuestionnaireQuestionAnswer | null)[] | null;
  readonly questionnairequestionanswerID?: string | null;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

export declare class Questionnaire {
  readonly id: string;
  readonly questionaireCompleted?: boolean | null;
  readonly questionnaireQuestionanswerID?: string | null;
  readonly User?: User | null;
  readonly userId?: string | null;
  readonly currentPage?: number | null;
  readonly AssessorReport?: AssessorReport | null;
  readonly Answers?: (Answer | null)[] | null;
  readonly QuestionnaireQuestionAnswer?: QuestionnaireQuestionAnswer | null;
  constructor(init: ModelInit<Questionnaire>);
  static copyOf(source: Questionnaire, mutator: (draft: MutableModel<Questionnaire>) => MutableModel<Questionnaire> | void): Questionnaire;
}

export declare class AssessorReport {
  readonly id: string;
  readonly assessScore?: string | null;
  readonly criticalRisks?: string | null;
  readonly Questionnaire?: Questionnaire | null;
  readonly questionnaireID?: string | null;
  readonly userId?: string | null;
  constructor(init: ModelInit<AssessorReport>);
  static copyOf(source: AssessorReport, mutator: (draft: MutableModel<AssessorReport>) => MutableModel<AssessorReport> | void): AssessorReport;
}

export declare class Recommendations {
  readonly id: string;
  readonly recName?: string | null;
  readonly recDesc?: string | null;
  readonly recDuration?: string | null;
  readonly recNum?: string | null;
  readonly isApproved?: boolean | null;
  readonly RecommendationTasks?: (Tasks | null)[] | null;
  readonly userID?: string | null;
  readonly User?: User | null;
  constructor(init: ModelInit<Recommendations>);
  static copyOf(source: Recommendations, mutator: (draft: MutableModel<Recommendations>) => MutableModel<Recommendations> | void): Recommendations;
}

export declare class Tasks {
  readonly id: string;
  readonly taskName?: string | null;
  readonly taskDesc?: string | null;
  readonly taskStart?: string | null;
  readonly taskEnd?: string | null;
  readonly recommendationsID: string;
  readonly RecommendationTask?: Recommendations | null;
  readonly assignedTo?: string | null;
  readonly color?: string | null;
  constructor(init: ModelInit<Tasks>);
  static copyOf(source: Tasks, mutator: (draft: MutableModel<Tasks>) => MutableModel<Tasks> | void): Tasks;
}

export declare class Team {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email?: string | null;
  readonly job_title?: string | null;
  readonly user_type?: string | null;
  readonly Teams?: (User | null)[] | null;
  readonly userID?: string | null;
  readonly company?: string | null;
  constructor(init: ModelInit<Team>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

export declare class Cred {
  readonly id: string;
  readonly acc?: string | null;
  readonly sec?: string | null;
  constructor(init: ModelInit<Cred>);
  static copyOf(source: Cred, mutator: (draft: MutableModel<Cred>) => MutableModel<Cred> | void): Cred;
}

export declare class File {
  readonly id: string;
  readonly data?: string | null;
  constructor(init: ModelInit<File>);
  static copyOf(source: File, mutator: (draft: MutableModel<File>) => MutableModel<File> | void): File;
}