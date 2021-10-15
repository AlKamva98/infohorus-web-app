import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Cred {
  readonly id: string;
  readonly acc?: string;
  readonly sec?: string;
  constructor(init: ModelInit<Cred>);
  static copyOf(source: Cred, mutator: (draft: MutableModel<Cred>) => MutableModel<Cred> | void): Cred;
}

export declare class Tasks {
  readonly id: string;
  readonly taskName?: string;
  readonly taskDesc?: string;
  readonly taskStart?: string;
  readonly RecommendationTask?: Recommendations;
  readonly taskEnd?: string;
  readonly recommendationsID?: string;
  readonly assignedTo?: string;
  readonly color?: string;
  constructor(init: ModelInit<Tasks>);
  static copyOf(source: Tasks, mutator: (draft: MutableModel<Tasks>) => MutableModel<Tasks> | void): Tasks;
}

export declare class Recommendations {
  readonly id: string;
  readonly recName?: string;
  readonly recDesc?: string;
  readonly RecommendationTasks?: (Tasks | null)[];
  readonly recDuration?: string;
  readonly recNum?: string;
  readonly isApproved?: boolean;
  readonly userID?: string;
  readonly User?: User;
  constructor(init: ModelInit<Recommendations>);
  static copyOf(source: Recommendations, mutator: (draft: MutableModel<Recommendations>) => MutableModel<Recommendations> | void): Recommendations;
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
  readonly Recommendations?: (Recommendations | null)[];
  readonly userType?: string;
  readonly phone?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class QuestionnaireQuestionAnswer {
  readonly id: string;
  readonly questionID?: string;
  readonly answerID?: string;
  readonly questionnaireID?: string;
  readonly Answers?: (Answer | null)[];
  readonly Questions?: (Question | null)[];
  readonly Questionnaire?: Questionnaire;
  readonly assessorreportID?: string;
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

export declare class AssessorReport {
  readonly id: string;
  readonly assrssorComment?: string;
  readonly assessmentResult?: string;
  readonly QuestionnaireQuestionAnswers?: (QuestionnaireQuestionAnswer | null)[];
  constructor(init: ModelInit<AssessorReport>);
  static copyOf(source: AssessorReport, mutator: (draft: MutableModel<AssessorReport>) => MutableModel<AssessorReport> | void): AssessorReport;
}

export declare class File {
  readonly id: string;
  readonly data?: string;
  constructor(init: ModelInit<File>);
  static copyOf(source: File, mutator: (draft: MutableModel<File>) => MutableModel<File> | void): File;
}