/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
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
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
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
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createCred = /* GraphQL */ `
  mutation CreateCred(
    $input: CreateCredInput!
    $condition: ModelCredConditionInput
  ) {
    createCred(input: $input, condition: $condition) {
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
export const updateCred = /* GraphQL */ `
  mutation UpdateCred(
    $input: UpdateCredInput!
    $condition: ModelCredConditionInput
  ) {
    updateCred(input: $input, condition: $condition) {
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
export const deleteCred = /* GraphQL */ `
  mutation DeleteCred(
    $input: DeleteCredInput!
    $condition: ModelCredConditionInput
  ) {
    deleteCred(input: $input, condition: $condition) {
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
export const createTasks = /* GraphQL */ `
  mutation CreateTasks(
    $input: CreateTasksInput!
    $condition: ModelTasksConditionInput
  ) {
    createTasks(input: $input, condition: $condition) {
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
export const updateTasks = /* GraphQL */ `
  mutation UpdateTasks(
    $input: UpdateTasksInput!
    $condition: ModelTasksConditionInput
  ) {
    updateTasks(input: $input, condition: $condition) {
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
export const deleteTasks = /* GraphQL */ `
  mutation DeleteTasks(
    $input: DeleteTasksInput!
    $condition: ModelTasksConditionInput
  ) {
    deleteTasks(input: $input, condition: $condition) {
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
export const createRecommendations = /* GraphQL */ `
  mutation CreateRecommendations(
    $input: CreateRecommendationsInput!
    $condition: ModelRecommendationsConditionInput
  ) {
    createRecommendations(input: $input, condition: $condition) {
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
      RecommendationTasks {
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
export const updateRecommendations = /* GraphQL */ `
  mutation UpdateRecommendations(
    $input: UpdateRecommendationsInput!
    $condition: ModelRecommendationsConditionInput
  ) {
    updateRecommendations(input: $input, condition: $condition) {
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
      RecommendationTasks {
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
export const deleteRecommendations = /* GraphQL */ `
  mutation DeleteRecommendations(
    $input: DeleteRecommendationsInput!
    $condition: ModelRecommendationsConditionInput
  ) {
    deleteRecommendations(input: $input, condition: $condition) {
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
      RecommendationTasks {
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
export const createAssessorReport = /* GraphQL */ `
  mutation CreateAssessorReport(
    $input: CreateAssessorReportInput!
    $condition: ModelAssessorReportConditionInput
  ) {
    createAssessorReport(input: $input, condition: $condition) {
      id
      assrssorComment
      assessmentResult
      ID
      isCompleted
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuestionnaireQuestionAnswers {
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
export const updateAssessorReport = /* GraphQL */ `
  mutation UpdateAssessorReport(
    $input: UpdateAssessorReportInput!
    $condition: ModelAssessorReportConditionInput
  ) {
    updateAssessorReport(input: $input, condition: $condition) {
      id
      assrssorComment
      assessmentResult
      ID
      isCompleted
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuestionnaireQuestionAnswers {
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
export const deleteAssessorReport = /* GraphQL */ `
  mutation DeleteAssessorReport(
    $input: DeleteAssessorReportInput!
    $condition: ModelAssessorReportConditionInput
  ) {
    deleteAssessorReport(input: $input, condition: $condition) {
      id
      assrssorComment
      assessmentResult
      ID
      isCompleted
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuestionnaireQuestionAnswers {
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
export const createQuestionnaireQuestionAnswer = /* GraphQL */ `
  mutation CreateQuestionnaireQuestionAnswer(
    $input: CreateQuestionnaireQuestionAnswerInput!
    $condition: ModelQuestionnaireQuestionAnswerConditionInput
  ) {
    createQuestionnaireQuestionAnswer(input: $input, condition: $condition) {
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
export const updateQuestionnaireQuestionAnswer = /* GraphQL */ `
  mutation UpdateQuestionnaireQuestionAnswer(
    $input: UpdateQuestionnaireQuestionAnswerInput!
    $condition: ModelQuestionnaireQuestionAnswerConditionInput
  ) {
    updateQuestionnaireQuestionAnswer(input: $input, condition: $condition) {
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
export const deleteQuestionnaireQuestionAnswer = /* GraphQL */ `
  mutation DeleteQuestionnaireQuestionAnswer(
    $input: DeleteQuestionnaireQuestionAnswerInput!
    $condition: ModelQuestionnaireQuestionAnswerConditionInput
  ) {
    deleteQuestionnaireQuestionAnswer(input: $input, condition: $condition) {
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
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
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
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
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
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createQuestionnaire = /* GraphQL */ `
  mutation CreateQuestionnaire(
    $input: CreateQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    createQuestionnaire(input: $input, condition: $condition) {
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
export const updateQuestionnaire = /* GraphQL */ `
  mutation UpdateQuestionnaire(
    $input: UpdateQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    updateQuestionnaire(input: $input, condition: $condition) {
      id
      questionaireCompleted
      questionnaireQuestionanswerID
      currentPage
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
export const deleteQuestionnaire = /* GraphQL */ `
  mutation DeleteQuestionnaire(
    $input: DeleteQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    deleteQuestionnaire(input: $input, condition: $condition) {
      id
      questionaireCompleted
      questionnaireQuestionanswerID
      currentPage
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      Recommendations {
        nextToken
        startedAt
      }
      AssessorReports {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      Recommendations {
        nextToken
        startedAt
      }
      AssessorReports {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      Recommendations {
        nextToken
        startedAt
      }
      AssessorReports {
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
export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
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
export const updateFile = /* GraphQL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
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
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
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
