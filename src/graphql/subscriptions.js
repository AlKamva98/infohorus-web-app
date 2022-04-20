/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat {
    onCreateChat {
      id
      sessionStart
      sessionEnd
      isClosed
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Messages {
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
        userType
        phone
        teamID
        chatID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat {
    onUpdateChat {
      id
      sessionStart
      sessionEnd
      isClosed
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Messages {
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
        userType
        phone
        teamID
        chatID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat {
    onDeleteChat {
      id
      sessionStart
      sessionEnd
      isClosed
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Messages {
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
        userType
        phone
        teamID
        chatID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      chatID
      content
      seen
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Chat {
        id
        sessionStart
        sessionEnd
        isClosed
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      chatID
      content
      seen
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Chat {
        id
        sessionStart
        sessionEnd
        isClosed
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      chatID
      content
      seen
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Chat {
        id
        sessionStart
        sessionEnd
        isClosed
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      first_name
      last_name
      email
      job_title
      user_type
      userID
      company
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Teams {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      first_name
      last_name
      email
      job_title
      user_type
      userID
      company
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Teams {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      first_name
      last_name
      email
      job_title
      user_type
      userID
      company
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Teams {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateCred = /* GraphQL */ `
  subscription OnCreateCred {
    onCreateCred {
      id
      acc
      sec
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCred = /* GraphQL */ `
  subscription OnUpdateCred {
    onUpdateCred {
      id
      acc
      sec
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCred = /* GraphQL */ `
  subscription OnDeleteCred {
    onDeleteCred {
      id
      acc
      sec
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTasks = /* GraphQL */ `
  subscription OnCreateTasks {
    onCreateTasks {
      id
      taskName
      taskDesc
      taskStart
      userID
      assignedTo
      color
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserTask {
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
        phone
        teamID
        chatID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateTasks = /* GraphQL */ `
  subscription OnUpdateTasks {
    onUpdateTasks {
      id
      taskName
      taskDesc
      taskStart
      userID
      assignedTo
      color
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserTask {
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
        phone
        teamID
        chatID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteTasks = /* GraphQL */ `
  subscription OnDeleteTasks {
    onDeleteTasks {
      id
      taskName
      taskDesc
      taskStart
      userID
      assignedTo
      color
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserTask {
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
        phone
        teamID
        chatID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateRecommendations = /* GraphQL */ `
  subscription OnCreateRecommendations {
    onCreateRecommendations {
      id
      recName
      recDesc
      recDuration
      recNum
      isApproved
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        userType
        phone
        teamID
        chatID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateRecommendations = /* GraphQL */ `
  subscription OnUpdateRecommendations {
    onUpdateRecommendations {
      id
      recName
      recDesc
      recDuration
      recNum
      isApproved
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        userType
        phone
        teamID
        chatID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteRecommendations = /* GraphQL */ `
  subscription OnDeleteRecommendations {
    onDeleteRecommendations {
      id
      recName
      recDesc
      recDuration
      recNum
      isApproved
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        userType
        phone
        teamID
        chatID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateAssessorReport = /* GraphQL */ `
  subscription OnCreateAssessorReport {
    onCreateAssessorReport {
      id
      assessScore
      criticalRisks
      questionnaireID
      isCompleted
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Questionnaire {
        id
        questionaireCompleted
        questionnaireQuestionanswerID
        userId
        currentPage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateAssessorReport = /* GraphQL */ `
  subscription OnUpdateAssessorReport {
    onUpdateAssessorReport {
      id
      assessScore
      criticalRisks
      questionnaireID
      isCompleted
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Questionnaire {
        id
        questionaireCompleted
        questionnaireQuestionanswerID
        userId
        currentPage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteAssessorReport = /* GraphQL */ `
  subscription OnDeleteAssessorReport {
    onDeleteAssessorReport {
      id
      assessScore
      criticalRisks
      questionnaireID
      isCompleted
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Questionnaire {
        id
        questionaireCompleted
        questionnaireQuestionanswerID
        userId
        currentPage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateQuestionnaireQuestionAnswer = /* GraphQL */ `
  subscription OnCreateQuestionnaireQuestionAnswer {
    onCreateQuestionnaireQuestionAnswer {
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
        currentPage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateQuestionnaireQuestionAnswer = /* GraphQL */ `
  subscription OnUpdateQuestionnaireQuestionAnswer {
    onUpdateQuestionnaireQuestionAnswer {
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
        currentPage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteQuestionnaireQuestionAnswer = /* GraphQL */ `
  subscription OnDeleteQuestionnaireQuestionAnswer {
    onDeleteQuestionnaireQuestionAnswer {
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
        currentPage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateQuestionnaire = /* GraphQL */ `
  subscription OnCreateQuestionnaire {
    onCreateQuestionnaire {
      id
      questionaireCompleted
      questionnaireQuestionanswerID
      userId
      currentPage
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AssessorReport {
        id
        assessScore
        criticalRisks
        questionnaireID
        isCompleted
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
        userType
        phone
        teamID
        chatID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateQuestionnaire = /* GraphQL */ `
  subscription OnUpdateQuestionnaire {
    onUpdateQuestionnaire {
      id
      questionaireCompleted
      questionnaireQuestionanswerID
      userId
      currentPage
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AssessorReport {
        id
        assessScore
        criticalRisks
        questionnaireID
        isCompleted
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
        userType
        phone
        teamID
        chatID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteQuestionnaire = /* GraphQL */ `
  subscription OnDeleteQuestionnaire {
    onDeleteQuestionnaire {
      id
      questionaireCompleted
      questionnaireQuestionanswerID
      userId
      currentPage
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AssessorReport {
        id
        assessScore
        criticalRisks
        questionnaireID
        isCompleted
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
        userType
        phone
        teamID
        chatID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      phone
      teamID
      chatID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Chats {
        nextToken
        startedAt
      }
      Teams {
        nextToken
        startedAt
      }
      Tasks {
        nextToken
        startedAt
      }
      Recommendations {
        nextToken
        startedAt
      }
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      phone
      teamID
      chatID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Chats {
        nextToken
        startedAt
      }
      Teams {
        nextToken
        startedAt
      }
      Tasks {
        nextToken
        startedAt
      }
      Recommendations {
        nextToken
        startedAt
      }
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      phone
      teamID
      chatID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Chats {
        nextToken
        startedAt
      }
      Teams {
        nextToken
        startedAt
      }
      Tasks {
        nextToken
        startedAt
      }
      Recommendations {
        nextToken
        startedAt
      }
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
export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile {
    onCreateFile {
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
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile {
    onUpdateFile {
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
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile {
    onDeleteFile {
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
