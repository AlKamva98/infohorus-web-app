import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class QuestionSection {
  readonly id: string;
  readonly Sections?: (Section | null)[];
  readonly Questions?: (Question | null)[];
  readonly questionId?: string;
  readonly sectionId?: string;
  constructor(init: ModelInit<QuestionSection>);
  static copyOf(source: QuestionSection, mutator: (draft: MutableModel<QuestionSection>) => MutableModel<QuestionSection> | void): QuestionSection;
}

export declare class Section {
  readonly id: string;
  readonly sectionName?: string;
  readonly sectionAnswered?: boolean;
  readonly QuestionSection?: QuestionSection;
  readonly questionsectionID?: string;
  constructor(init: ModelInit<Section>);
  static copyOf(source: Section, mutator: (draft: MutableModel<Section>) => MutableModel<Section> | void): Section;
}

export declare class Question {
  readonly id: string;
  readonly question?: string;
  readonly questionName?: string;
  readonly QuestionnaireQuestion?: QuestionnaireQuestion;
  readonly questionnairequestionID?: string;
  readonly AnswerQuestions?: (AnswerQuestion | null)[];
  readonly questionsectionID?: string;
  readonly QuestionSection?: QuestionSection;
  readonly Answers?: (Answer | null)[];
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

export declare class QuestionnaireQuestion {
  readonly id: string;
  readonly Questions?: (Question | null)[];
  readonly questionnaireId?: string;
  readonly questionId?: string;
  constructor(init: ModelInit<QuestionnaireQuestion>);
  static copyOf(source: QuestionnaireQuestion, mutator: (draft: MutableModel<QuestionnaireQuestion>) => MutableModel<QuestionnaireQuestion> | void): QuestionnaireQuestion;
}

export declare class AnswerQuestion {
  readonly id: string;
  readonly Answers?: (Answer | null)[];
  readonly Question?: Question;
  readonly questionID?: string;
  readonly answerId?: string;
  constructor(init: ModelInit<AnswerQuestion>);
  static copyOf(source: AnswerQuestion, mutator: (draft: MutableModel<AnswerQuestion>) => MutableModel<AnswerQuestion> | void): AnswerQuestion;
}

export declare class Answer {
  readonly id: string;
  readonly answer?: string;
  readonly AnswerQuestion?: AnswerQuestion;
  readonly answerquestionID?: string;
  readonly Questionnaire?: Questionnaire;
  readonly questionnaireID?: string;
  readonly Question?: Question;
  readonly questionID?: string;
  constructor(init: ModelInit<Answer>);
  static copyOf(source: Answer, mutator: (draft: MutableModel<Answer>) => MutableModel<Answer> | void): Answer;
}

export declare class Questionnaire {
  readonly id: string;
  readonly questionaireCompleted?: boolean;
  readonly QuestionnaireQuestion?: QuestionnaireQuestion;
  readonly questionnaireQuestionId?: string;
  readonly User?: User;
  readonly userId?: string;
  readonly Answers?: (Answer | null)[];
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
  readonly Questionnaire?: Questionnaire;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}