/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
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
        questionName
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
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
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
        questionName
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
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
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
        questionName
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
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      answer
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
      questionID
      _version
      _deleted
      _lastChangedAt
      updatedAt
     
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
      questionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
     
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
          questionName
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      question
      questionName
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
          questionName
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      question
      questionName
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
          questionName
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
export const createQuestionnaire = /* GraphQL */ `
  mutation CreateQuestionnaire(
    $input: CreateQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    createQuestionnaire(input: $input, condition: $condition) {
      id
      questionaireCompleted
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
      _version
      _deleted
      _lastChangedAt
      updatedAt
      
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
    }
  }
`;
export const createQuestionQuestionnaire = /* GraphQL */ `
  mutation CreateQuestionQuestionnaire(
    $input: CreateQuestionQuestionnaireInput!
    $condition: ModelQuestionQuestionnaireConditionInput
  ) {
    createQuestionQuestionnaire(input: $input, condition: $condition) {
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
        questionName
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
      questionnaire {
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
    }
  }
`;
export const updateQuestionQuestionnaire = /* GraphQL */ `
  mutation UpdateQuestionQuestionnaire(
    $input: UpdateQuestionQuestionnaireInput!
    $condition: ModelQuestionQuestionnaireConditionInput
  ) {
    updateQuestionQuestionnaire(input: $input, condition: $condition) {
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
        questionName
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
      questionnaire {
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
    }
  }
`;
export const deleteQuestionQuestionnaire = /* GraphQL */ `
  mutation DeleteQuestionQuestionnaire(
    $input: DeleteQuestionQuestionnaireInput!
    $condition: ModelQuestionQuestionnaireConditionInput
  ) {
    deleteQuestionQuestionnaire(input: $input, condition: $condition) {
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
        questionName
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
      questionnaire {
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
    }
  }
`;
