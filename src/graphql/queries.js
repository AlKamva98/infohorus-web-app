/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestionnaireQuestionAnswer = /* GraphQL */ `
  query GetQuestionnaireQuestionAnswer($id: ID!) {
    getQuestionnaireQuestionAnswer(id: $id) {
      id
      questionID
      answerID
      questionnaireID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Answers {
        items {
          id
          answer
          questionnaireID
          questionID
          questionnairequestionanswerID
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
          questionnairequestionanswerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Questionnaire {
        id
        questionaireCompleted
        questionnaireQuestionanswerID
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionnaireQuestionAnswer {
          id
          questionID
          answerID
          questionnaireID
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
export const listQuestionnaireQuestionAnswers = /* GraphQL */ `
  query ListQuestionnaireQuestionAnswers(
    $filter: ModelQuestionnaireQuestionAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionnaireQuestionAnswers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        questionID
        answerID
        questionnaireID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Answers {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
        Questionnaire {
          id
          questionaireCompleted
          questionnaireQuestionanswerID
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
export const syncQuestionnaireQuestionAnswers = /* GraphQL */ `
  query SyncQuestionnaireQuestionAnswers(
    $filter: ModelQuestionnaireQuestionAnswerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestionnaireQuestionAnswers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        questionID
        answerID
        questionnaireID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Answers {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
        Questionnaire {
          id
          questionaireCompleted
          questionnaireQuestionanswerID
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
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
      id
      answer
      questionnaireID
      questionID
      questionnairequestionanswerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Questionnaire {
        id
        questionID
        answerID
        questionnaireID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Answers {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
        Questionnaire {
          id
          questionaireCompleted
          questionnaireQuestionanswerID
          userId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      Question {
        id
        questionID
        answerID
        questionnaireID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Answers {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
        Questionnaire {
          id
          questionaireCompleted
          questionnaireQuestionanswerID
          userId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      QuestionnaireQuestionAnswer {
        id
        questionID
        answerID
        questionnaireID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Answers {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
        Questionnaire {
          id
          questionaireCompleted
          questionnaireQuestionanswerID
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
        questionnaireID
        questionID
        questionnairequestionanswerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Questionnaire {
          id
          questionID
          answerID
          questionnaireID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Question {
          id
          questionID
          answerID
          questionnaireID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        QuestionnaireQuestionAnswer {
          id
          questionID
          answerID
          questionnaireID
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
        questionnaireID
        questionID
        questionnairequestionanswerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Questionnaire {
          id
          questionID
          answerID
          questionnaireID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Question {
          id
          questionID
          answerID
          questionnaireID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        QuestionnaireQuestionAnswer {
          id
          questionID
          answerID
          questionnaireID
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
      questionnairequestionanswerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuestionnaireQuestionAnswers {
        items {
          id
          questionID
          answerID
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
      Answers {
        items {
          id
          answer
          questionnaireID
          questionID
          questionnairequestionanswerID
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
        questionnairequestionanswerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionnaireQuestionAnswers {
          nextToken
          startedAt
        }
        Answers {
          nextToken
          startedAt
        }
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
        questionnairequestionanswerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionnaireQuestionAnswers {
          nextToken
          startedAt
        }
        Answers {
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
      questionnaireQuestionanswerID
      userId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuestionnaireQuestionAnswer {
        id
        questionID
        answerID
        questionnaireID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Answers {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
        Questionnaire {
          id
          questionaireCompleted
          questionnaireQuestionanswerID
          userId
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
          questionnaireID
          questionID
          questionnairequestionanswerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
          questionID
          answerID
          questionnaireID
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
        questionnaireQuestionanswerID
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionnaireQuestionAnswer {
          id
          questionID
          answerID
          questionnaireID
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
        questionnaireQuestionanswerID
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QuestionnaireQuestionAnswer {
          id
          questionID
          answerID
          questionnaireID
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
        questionID
        answerID
        questionnaireID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Answers {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
        Questionnaire {
          id
          questionaireCompleted
          questionnaireQuestionanswerID
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
        Questionnaire {
          id
          questionID
          answerID
          questionnaireID
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
          questionID
          answerID
          questionnaireID
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
