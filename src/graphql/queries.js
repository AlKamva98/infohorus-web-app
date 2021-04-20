/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Question {
          id
          question
          questionType
          questionNum
          questionCategory
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
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
      id
      sectionName
      sectionAnswered
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Question {
        id
        question
        questionType
        questionNum
        questionCategory
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Section {
          id
          sectionName
          sectionAnswered
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Answers {
          nextToken
          startedAt
        }
        QuestionsQuestionnaire {
          nextToken
          startedAt
        }
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Question {
          id
          question
          questionType
          questionNum
          questionCategory
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
      questionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuestionAns {
        id
        question
        questionType
        questionNum
        questionCategory
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Section {
          id
          sectionName
          sectionAnswered
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Answers {
          nextToken
          startedAt
        }
        QuestionsQuestionnaire {
          nextToken
          startedAt
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
        questionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionAns {
          id
          question
          questionType
          questionNum
          questionCategory
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
        questionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionAns {
          id
          question
          questionType
          questionNum
          questionCategory
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
        questionType
        questionNum
        questionCategory
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Section {
          id
          sectionName
          sectionAnswered
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Answers {
          nextToken
          startedAt
        }
        QuestionsQuestionnaire {
          nextToken
          startedAt
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
      questionType
      questionNum
      questionCategory
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Section {
        id
        sectionName
        sectionAnswered
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Question {
          id
          question
          questionType
          questionNum
          questionCategory
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      Answers {
        items {
          id
          answer
          questionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      QuestionsQuestionnaire {
        items {
          id
          questionID
          questionnaireID
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
        questionType
        questionNum
        questionCategory
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Section {
          id
          sectionName
          sectionAnswered
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Answers {
          nextToken
          startedAt
        }
        QuestionsQuestionnaire {
          nextToken
          startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        UserQuestionnaire {
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
        questions {
          nextToken
          startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserQuestionnaire {
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
      questions {
        items {
          id
          questionID
          questionnaireID
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        UserQuestionnaire {
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
        questions {
          nextToken
          startedAt
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestionQuestionnaires = /* GraphQL */ `
  query SyncQuestionQuestionnaires(
    $filter: ModelQuestionQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestionQuestionnaires(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        questionID
        questionnaireID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        question {
          id
          question
          questionType
          questionNum
          questionCategory
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        questionnaire {
          id
          questionaireCompleted
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
