/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuestionSection = /* GraphQL */ `
  subscription OnCreateQuestionSection {
    onCreateQuestionSection {
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
export const onUpdateQuestionSection = /* GraphQL */ `
  subscription OnUpdateQuestionSection {
    onUpdateQuestionSection {
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
export const onDeleteQuestionSection = /* GraphQL */ `
  subscription OnDeleteQuestionSection {
    onDeleteQuestionSection {
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
export const onCreateAnswerQuestion = /* GraphQL */ `
  subscription OnCreateAnswerQuestion {
    onCreateAnswerQuestion {
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
export const onUpdateAnswerQuestion = /* GraphQL */ `
  subscription OnUpdateAnswerQuestion {
    onUpdateAnswerQuestion {
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
export const onDeleteAnswerQuestion = /* GraphQL */ `
  subscription OnDeleteAnswerQuestion {
    onDeleteAnswerQuestion {
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
export const onCreateQuestionnaireQuestion = /* GraphQL */ `
  subscription OnCreateQuestionnaireQuestion {
    onCreateQuestionnaireQuestion {
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
export const onUpdateQuestionnaireQuestion = /* GraphQL */ `
  subscription OnUpdateQuestionnaireQuestion {
    onUpdateQuestionnaireQuestion {
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
export const onDeleteQuestionnaireQuestion = /* GraphQL */ `
  subscription OnDeleteQuestionnaireQuestion {
    onDeleteQuestionnaireQuestion {
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
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection {
    onCreateSection {
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
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection {
    onUpdateSection {
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
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection {
    onDeleteSection {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateQuestionnaire = /* GraphQL */ `
  subscription OnCreateQuestionnaire {
    onCreateQuestionnaire {
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
export const onUpdateQuestionnaire = /* GraphQL */ `
  subscription OnUpdateQuestionnaire {
    onUpdateQuestionnaire {
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
export const onDeleteQuestionnaire = /* GraphQL */ `
  subscription OnDeleteQuestionnaire {
    onDeleteQuestionnaire {
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
