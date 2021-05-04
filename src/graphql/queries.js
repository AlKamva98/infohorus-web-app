/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listQuestionSections = /* GraphQL */ `
  query ListQuestionSections(
    $filter: ModelQuestionSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        questionId
        sectionId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Sections {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestionSection = /* GraphQL */ `
  query GetQuestionSection($id: ID!) {
    getQuestionSection(id: $id) {
      id
      questionId
      sectionId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Sections {
        items {
          id
          sectionName
          sectionAnswered
          questionsectionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Questions {
        items {
          id
          question
          questionName
          questionnairequestionID
          questionsectionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncQuestionSections = /* GraphQL */ `
  query SyncQuestionSections(
    $filter: ModelQuestionSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestionSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        questionId
        sectionId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Sections {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getAnswerQuestion = /* GraphQL */ `
  query GetAnswerQuestion($id: ID!) {
    getAnswerQuestion(id: $id) {
      id
      questionID
      answerId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Answers {
        items {
          id
          answer
          answerquestionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Question {
        id
        question
        questionName
        questionnairequestionID
        questionsectionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionSection {
          id
          questionId
          sectionId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        AnswerQuestions {
          nextToken
          startedAt
        }
        QuestionnaireQuestion {
          id
          questionnaireId
          questionId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const listAnswerQuestions = /* GraphQL */ `
  query ListAnswerQuestions(
    $filter: ModelAnswerQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswerQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        questionID
        answerId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Answers {
          nextToken
          startedAt
        }
        Question {
          id
          question
          questionName
          questionnairequestionID
          questionsectionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAnswerQuestions = /* GraphQL */ `
  query SyncAnswerQuestions(
    $filter: ModelAnswerQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnswerQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        questionID
        answerId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Answers {
          nextToken
          startedAt
        }
        Question {
          id
          question
          questionName
          questionnairequestionID
          questionsectionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listQuestionnaireQuestions = /* GraphQL */ `
  query ListQuestionnaireQuestions(
    $filter: ModelQuestionnaireQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionnaireQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        questionnaireId
        questionId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Questions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestionnaireQuestion = /* GraphQL */ `
  query GetQuestionnaireQuestion($id: ID!) {
    getQuestionnaireQuestion(id: $id) {
      id
      questionnaireId
      questionId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Questions {
        items {
          id
          question
          questionName
          questionnairequestionID
          questionsectionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncQuestionnaireQuestions = /* GraphQL */ `
  query SyncQuestionnaireQuestions(
    $filter: ModelQuestionnaireQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestionnaireQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        questionnaireId
        questionId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Questions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
      id
      sectionName
      sectionAnswered
      questionsectionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuestionSection {
        id
        questionId
        sectionId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Sections {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sectionName
        sectionAnswered
        questionsectionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionSection {
          id
          questionId
          sectionId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSections = /* GraphQL */ `
  query SyncSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sectionName
        sectionAnswered
        questionsectionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionSection {
          id
          questionId
          sectionId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
      id
      answer
      answerquestionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AnswerQuestion {
        id
        questionID
        answerId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Answers {
          nextToken
          startedAt
        }
        Question {
          id
          question
          questionName
          questionnairequestionID
          questionsectionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        answer
        answerquestionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AnswerQuestion {
          id
          questionID
          answerId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAnswers = /* GraphQL */ `
  query SyncAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnswers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        answer
        answerquestionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AnswerQuestion {
          id
          questionID
          answerId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      question
      questionName
      questionnairequestionID
      questionsectionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        questionName
       
      
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        question
        questionName
        questionnairequestionID
        questionsectionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionSection {
          id
          questionId
          sectionId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        AnswerQuestions {
          nextToken
          startedAt
        }
        QuestionnaireQuestion {
          id
          questionnaireId
          questionId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listQuestionnaires = /* GraphQL */ `
  query ListQuestionnaires(
    $filter: ModelQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionnaires(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        questionaireCompleted
        questionnaireQuestionId
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionnaireQuestion {
          id
          questionnaireId
          questionId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        User {
          id
          first_name
          last_name
          email
          job_title
          company
          employees
          industry
          country
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestionnaire = /* GraphQL */ `
  query GetQuestionnaire($id: ID!) {
    getQuestionnaire(id: $id) {
      id
      questionaireCompleted
      questionnaireQuestionId
      userId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuestionnaireQuestion {
        id
        questionnaireId
        questionId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Questions {
          nextToken
          startedAt
        }
      }
      User {
        id
        first_name
        last_name
        email
        job_title
        company
        employees
        industry
        country
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Questionnaire {
          id
          questionaireCompleted
          questionnaireQuestionId
          userId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const syncQuestionnaires = /* GraphQL */ `
  query SyncQuestionnaires(
    $filter: ModelQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestionnaires(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        questionaireCompleted
        questionnaireQuestionId
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionnaireQuestion {
          id
          questionnaireId
          questionId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        User {
          id
          first_name
          last_name
          email
          job_title
          company
          employees
          industry
          country
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        email
        job_title
        company
        employees
        industry
        country
        
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      first_name
      last_name
      email
      job_title
      company
      employees
      industry
      country
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Questionnaire {
        id
        questionaireCompleted
        questionnaireQuestionId
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionnaireQuestion {
          id
          questionnaireId
          questionId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        User {
          id
          first_name
          last_name
          email
          job_title
          company
          employees
          industry
          country
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        first_name
        last_name
        email
        job_title
        company
        employees
        industry
        country
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Questionnaire {
          id
          questionaireCompleted
          questionnaireQuestionId
          userId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
