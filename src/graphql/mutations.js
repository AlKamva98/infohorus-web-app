/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createQuestionnaire = /* GraphQL */ `
  mutation CreateQuestionnaire(
    $input: CreateQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    createQuestionnaire(input: $input, condition: $condition) {
      id
      questionaireCompleted
      userId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
   
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
export const deleteQuestionnaire = /* GraphQL */ `
  mutation DeleteQuestionnaire(
    $input: DeleteQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    deleteQuestionnaire(input: $input, condition: $condition) {
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
      questionnaireID
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
