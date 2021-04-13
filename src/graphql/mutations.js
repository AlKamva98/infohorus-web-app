/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
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
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
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
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
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
export const createRecomendation = /* GraphQL */ `
  mutation CreateRecomendation(
    $input: CreateRecomendationInput!
    $condition: ModelRecomendationConditionInput
  ) {
    createRecomendation(input: $input, condition: $condition) {
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
export const updateRecomendation = /* GraphQL */ `
  mutation UpdateRecomendation(
    $input: UpdateRecomendationInput!
    $condition: ModelRecomendationConditionInput
  ) {
    updateRecomendation(input: $input, condition: $condition) {
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
export const deleteRecomendation = /* GraphQL */ `
  mutation DeleteRecomendation(
    $input: DeleteRecomendationInput!
    $condition: ModelRecomendationConditionInput
  ) {
    deleteRecomendation(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
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
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
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
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createRecomendationUser = /* GraphQL */ `
  mutation CreateRecomendationUser(
    $input: CreateRecomendationUserInput!
    $condition: ModelRecomendationUserConditionInput
  ) {
    createRecomendationUser(input: $input, condition: $condition) {
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
        UserRecomendations {
          nextToken
          startedAt
        }
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
        recomendations {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateRecomendationUser = /* GraphQL */ `
  mutation UpdateRecomendationUser(
    $input: UpdateRecomendationUserInput!
    $condition: ModelRecomendationUserConditionInput
  ) {
    updateRecomendationUser(input: $input, condition: $condition) {
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
        UserRecomendations {
          nextToken
          startedAt
        }
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
        recomendations {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteRecomendationUser = /* GraphQL */ `
  mutation DeleteRecomendationUser(
    $input: DeleteRecomendationUserInput!
    $condition: ModelRecomendationUserConditionInput
  ) {
    deleteRecomendationUser(input: $input, condition: $condition) {
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
        UserRecomendations {
          nextToken
          startedAt
        }
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
        recomendations {
          nextToken
          startedAt
        }
      }
    }
  }
`;
