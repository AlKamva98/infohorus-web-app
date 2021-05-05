/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestionSection = /* GraphQL */ `
  mutation CreateQuestionSection(
    $input: CreateQuestionSectionInput!
    $condition: ModelQuestionSectionConditionInput
  ) {
    createQuestionSection(input: $input, condition: $condition) {
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
export const updateQuestionSection = /* GraphQL */ `
  mutation UpdateQuestionSection(
    $input: UpdateQuestionSectionInput!
    $condition: ModelQuestionSectionConditionInput
  ) {
    updateQuestionSection(input: $input, condition: $condition) {
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
export const deleteQuestionSection = /* GraphQL */ `
  mutation DeleteQuestionSection(
    $input: DeleteQuestionSectionInput!
    $condition: ModelQuestionSectionConditionInput
  ) {
    deleteQuestionSection(input: $input, condition: $condition) {
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
export const createAnswerQuestion = /* GraphQL */ `
  mutation CreateAnswerQuestion(
    $input: CreateAnswerQuestionInput!
    $condition: ModelAnswerQuestionConditionInput
  ) {
    createAnswerQuestion(input: $input, condition: $condition) {
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
export const updateAnswerQuestion = /* GraphQL */ `
  mutation UpdateAnswerQuestion(
    $input: UpdateAnswerQuestionInput!
    $condition: ModelAnswerQuestionConditionInput
  ) {
    updateAnswerQuestion(input: $input, condition: $condition) {
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
export const deleteAnswerQuestion = /* GraphQL */ `
  mutation DeleteAnswerQuestion(
    $input: DeleteAnswerQuestionInput!
    $condition: ModelAnswerQuestionConditionInput
  ) {
    deleteAnswerQuestion(input: $input, condition: $condition) {
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
export const createQuestionnaireQuestion = /* GraphQL */ `
  mutation CreateQuestionnaireQuestion(
    $input: CreateQuestionnaireQuestionInput!
    $condition: ModelQuestionnaireQuestionConditionInput
  ) {
    createQuestionnaireQuestion(input: $input, condition: $condition) {
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
`;
export const updateQuestionnaireQuestion = /* GraphQL */ `
  mutation UpdateQuestionnaireQuestion(
    $input: UpdateQuestionnaireQuestionInput!
    $condition: ModelQuestionnaireQuestionConditionInput
  ) {
    updateQuestionnaireQuestion(input: $input, condition: $condition) {
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
export const deleteQuestionnaireQuestion = /* GraphQL */ `
  mutation DeleteQuestionnaireQuestion(
    $input: DeleteQuestionnaireQuestionInput!
    $condition: ModelQuestionnaireQuestionConditionInput
  ) {
    deleteQuestionnaireQuestion(input: $input, condition: $condition) {
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
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
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
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
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
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
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
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      answer
      answerquestionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
        Sections {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
      }
      AnswerQuestions {
        items {
          id
          questionID
          answerId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
        Questions {
          nextToken
          startedAt
        }
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
        Sections {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
      }
      AnswerQuestions {
        items {
          id
          questionID
          answerId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
        Questions {
          nextToken
          startedAt
        }
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
        Sections {
          nextToken
          startedAt
        }
        Questions {
          nextToken
          startedAt
        }
      }
      AnswerQuestions {
        items {
          id
          questionID
          answerId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
        Questions {
          nextToken
          startedAt
        }
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
      questionnaireQuestionId
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
export const deleteQuestionnaire = /* GraphQL */ `
  mutation DeleteQuestionnaire(
    $input: DeleteQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    deleteQuestionnaire(input: $input, condition: $condition) {
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
