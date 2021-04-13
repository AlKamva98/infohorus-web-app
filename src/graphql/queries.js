/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
      report_num
      report_desc
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AnswersReport {
        items {
          id
          username
          answers
          documents
          completed
          questionID
          reportID
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
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        report_num
        report_desc
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AnswersReport {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReports = /* GraphQL */ `
  query SyncReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        report_num
        report_desc
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AnswersReport {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listRecomendations = /* GraphQL */ `
  query ListRecomendations(
    $filter: ModelRecomendationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecomendations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rec_num
        rec_date
        assigned_to
        accepted
        estimated_completion_date
        completed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        UserRecomendations {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getRecomendation = /* GraphQL */ `
  query GetRecomendation($id: ID!) {
    getRecomendation(id: $id) {
      id
      rec_num
      rec_date
      assigned_to
      accepted
      estimated_completion_date
      completed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserRecomendations {
        items {
          id
          recomendationID
          userID
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
export const syncRecomendations = /* GraphQL */ `
  query SyncRecomendations(
    $filter: ModelRecomendationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRecomendations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        rec_num
        rec_date
        assigned_to
        accepted
        estimated_completion_date
        completed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        UserRecomendations {
          nextToken
          startedAt
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
        inputType
        questSection
        questType
        questTitle
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QAnswer {
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
      inputType
      questSection
      questType
      questTitle
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QAnswer {
        items {
          id
          username
          answers
          documents
          completed
          questionID
          reportID
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
        inputType
        questSection
        questType
        questTitle
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QAnswer {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      account_num
      account_status
      payment_method
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserAccount {
        id
        username
        fname
        lname
        jobtitle
        company
        employees
        industry
        country
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        recomendations {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        account_num
        account_status
        payment_method
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        UserAccount {
          id
          username
          fname
          lname
          jobtitle
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
export const syncAccounts = /* GraphQL */ `
  query SyncAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        account_num
        account_status
        payment_method
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        UserAccount {
          id
          username
          fname
          lname
          jobtitle
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
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
      id
      username
      answers
      documents
      completed
      questionID
      reportID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QAnswer {
        id
        question
        inputType
        questSection
        questType
        questTitle
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QAnswer {
          nextToken
          startedAt
        }
      }
      UserAnswer {
        id
        username
        fname
        lname
        jobtitle
        company
        employees
        industry
        country
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        recomendations {
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
        username
        answers
        documents
        completed
        questionID
        reportID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QAnswer {
          id
          question
          inputType
          questSection
          questType
          questTitle
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        UserAnswer {
          id
          username
          fname
          lname
          jobtitle
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
        username
        answers
        documents
        completed
        questionID
        reportID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        QAnswer {
          id
          question
          inputType
          questSection
          questType
          questTitle
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        UserAnswer {
          id
          username
          fname
          lname
          jobtitle
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
        username
        fname
        lname
        jobtitle
        company
        employees
        industry
        country
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        recomendations {
          nextToken
          startedAt
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
      username
      fname
      lname
      jobtitle
      company
      employees
      industry
      country
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      recomendations {
        items {
          id
          recomendationID
          userID
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
        username
        fname
        lname
        jobtitle
        company
        employees
        industry
        country
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        recomendations {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRecomendationUsers = /* GraphQL */ `
  query SyncRecomendationUsers(
    $filter: ModelRecomendationUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRecomendationUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        recomendationID
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        recomendation {
          id
          rec_num
          rec_date
          assigned_to
          accepted
          estimated_completion_date
          completed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        user {
          id
          username
          fname
          lname
          jobtitle
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
