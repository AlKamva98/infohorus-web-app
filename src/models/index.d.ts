import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Section {
  readonly id: string;
  readonly sectionName?: string;
  readonly sectionAnswered?: boolean;
  readonly Question?: Question;
  constructor(init: ModelInit<Section>);
  static copyOf(source: Section, mutator: (draft: MutableModel<Section>) => MutableModel<Section> | void): Section;
}

export declare class Question {
  readonly id: string;
  readonly question?: string;
  readonly questionType?: string;
  readonly questionNum?: string;
  readonly questionCategory?: string;
  readonly QuestionsQuestionnaire?: (QuestionQuestionnaire | null)[];
  readonly Answers?: (Answer | null)[];
  readonly Section?: Section;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

export declare class QuestionQuestionnaire {
  readonly id: string;
  readonly question: Question;
  readonly questionnaire: Questionnaire;
  constructor(init: ModelInit<QuestionQuestionnaire>);
  static copyOf(source: QuestionQuestionnaire, mutator: (draft: MutableModel<QuestionQuestionnaire>) => MutableModel<QuestionQuestionnaire> | void): QuestionQuestionnaire;
}

export declare class Questionnaire {
  readonly id: string;
  readonly questionaireCompleted?: boolean;
  readonly UserQuestionnaire: User;
  readonly questions?: (QuestionQuestionnaire | null)[];
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

export declare class Answer {
  readonly id: string;
  readonly answer?: string;
  readonly questionID?: string;
  readonly QuestionAns?: Question;
  constructor(init: ModelInit<Answer>);
  static copyOf(source: Answer, mutator: (draft: MutableModel<Answer>) => MutableModel<Answer> | void): Answer;
}