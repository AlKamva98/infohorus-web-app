/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCred = /* GraphQL */ `
  query GetCred($id: ID!) {
    getCred(id: $id) {
      id
      acc
      sec
      
          }
  }
`;
export const listCreds = /* GraphQL */ `
  query ListCreds(
    $filter: ModelCredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        acc
        sec
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCreds = /* GraphQL */ `
  query SyncCreds(
    $filter: ModelCredFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCreds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        acc
        sec
    }
      nextToken
      startedAt
    }
  }
`;
export const getTasks = /* GraphQL */ `
  query GetTasks($id: ID!) {
    getTasks(id: $id) {
      id
      taskName
      taskDesc
      taskStart
      taskEnd
      recommendationsID
      assignedTo
      color
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      RecommendationTask {
        id
        recName
        recDesc
        recDuration
        recNum
        isApproved
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listTaskss = /* GraphQL */ `
  query ListTaskss(
    $filter: ModelTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
          id
        taskName
        taskDesc
        taskStart
        taskEnd
        recommendationsID
        assignedTo
        color
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
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTasksFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
          id
        taskName
        taskDesc
        taskStart
        taskEnd
        recommendationsID
        assignedTo
        color
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
export const getRecommendations = /* GraphQL */ `
  query GetRecommendations($id: ID!) {
    getRecommendations(id: $id) {
      id
      recName
      recDesc
      recDuration
      isApproved
      userID
      _version
      RecommendationTasks {
        nextToken
        startedAt
      }
    }
  }
`;
export const listRecommendationsbyUser = /* GraphQL */ `
  query byUser(
    $userID: String
  ) {
    byUser(userID: $userID) {
      items {
        id
        recName
        recDesc
        recDuration
        isApproved
        userID
        _version
      }
      nextToken
    }
  }
`;
export const listRecommendationss = /* GraphQL */ `
  query ListRecommendationss(
    $filter: ModelRecommendationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecommendationss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recName
        recDesc
        recDuration
        isApproved
        userID
        _version
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRecommendations = /* GraphQL */ `
  query SyncRecommendations(
    $filter: ModelRecommendationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRecommendations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        recName
        recDesc
        recDuration
        recNum
        isApproved
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
export const getAssessorReport = /* GraphQL */ `
  query GetAssessorReport($id: ID!) {
    getAssessorReport(id: $id) {
      id
      assrssorComment
      assessmentResult
      assessorID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Assessor {
        id
        first_name
        last_name
        email
        numAssessed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      QuestionnaireQuestionAnswers {
        nextToken
        startedAt
      }
    }
  }
`;
export const assRep = /* GraphQL */ `
  query ListAssessorReports(
    $filter: ModelAssessorReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssessorReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assrssorComment
        assessmentResult
        assessorID
        _version
      }
      nextToken
      startedAt
    }
  }
`;
export const listAssessorReports = /* GraphQL */ `
  query ListAssessorReports(
    $filter: ModelAssessorReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssessorReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assrssorComment
        assessmentResult
        assessorID
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
export const syncAssessorReports = /* GraphQL */ `
  query SyncAssessorReports(
    $filter: ModelAssessorReportFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssessorReports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        assrssorComment
        assessmentResult
        assessorID
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
export const getAssessor = /* GraphQL */ `
  query GetAssessor($id: ID!) {
    getAssessor(id: $id) {
      id
      first_name
      last_name
      email
      numAssessed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AssessorReports {
        nextToken
        startedAt
      }
    }
  }
`;
export const listAssessors = /* GraphQL */ `
  query ListAssessors(
    $filter: ModelAssessorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssessors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        email
        numAssessed
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
export const syncAssessors = /* GraphQL */ `
  query SyncAssessors(
    $filter: ModelAssessorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssessors(
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
        numAssessed
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
export const getQuestionnaireQuestionAnswer = /* GraphQL */ `
  query GetQuestionnaireQuestionAnswer($id: ID!) {
    getQuestionnaireQuestionAnswer(id: $id) {
      id
      questionID
      answerID
      questionnaireID
      assessorreportID
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
        assessorreportID
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
        assessorreportID
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
        assessorreportID
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
        assessorreportID
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
        assessorreportID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
        nextToken
        startedAt
      }
      Answers {
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
        assessorreportID
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
      userType
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
        assessorreportID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;

export const listUsersEmail = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        userType
        _version
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
        userType
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
export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
      id
      data
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        data
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
export const syncFiles = /* GraphQL */ `
  query SyncFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        data
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
