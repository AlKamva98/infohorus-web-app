/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuestionnaireQuestionAnswer = /* GraphQL */ `
  subscription OnCreateQuestionnaireQuestionAnswer {
    onCreateQuestionnaireQuestionAnswer {
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
export const onUpdateQuestionnaireQuestionAnswer = /* GraphQL */ `
  subscription OnUpdateQuestionnaireQuestionAnswer {
    onUpdateQuestionnaireQuestionAnswer {
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
export const onDeleteQuestionnaireQuestionAnswer = /* GraphQL */ `
  subscription OnDeleteQuestionnaireQuestionAnswer {
    onDeleteQuestionnaireQuestionAnswer {
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
export const onCreateQuestionnaire = /* GraphQL */ `
  subscription OnCreateQuestionnaire {
    onCreateQuestionnaire {
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
export const onUpdateQuestionnaire = /* GraphQL */ `
  subscription OnUpdateQuestionnaire {
    onUpdateQuestionnaire {
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
export const onDeleteQuestionnaire = /* GraphQL */ `
  subscription OnDeleteQuestionnaire {
    onDeleteQuestionnaire {
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
