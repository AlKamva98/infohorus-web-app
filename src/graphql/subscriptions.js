/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection {
    onCreateSection {
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
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection {
    onUpdateSection {
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
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection {
    onDeleteSection {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
      id
      answer
      questionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuestionAns {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
      id
      answer
      questionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuestionAns {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
      id
      answer
      questionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuestionAns {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateQuestionnaire = /* GraphQL */ `
  subscription OnCreateQuestionnaire {
    onCreateQuestionnaire {
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
export const onUpdateQuestionnaire = /* GraphQL */ `
  subscription OnUpdateQuestionnaire {
    onUpdateQuestionnaire {
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
export const onDeleteQuestionnaire = /* GraphQL */ `
  subscription OnDeleteQuestionnaire {
    onDeleteQuestionnaire {
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
    }
  }
`;
export const onCreateQuestionQuestionnaire = /* GraphQL */ `
  subscription OnCreateQuestionQuestionnaire {
    onCreateQuestionQuestionnaire {
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
export const onUpdateQuestionQuestionnaire = /* GraphQL */ `
  subscription OnUpdateQuestionQuestionnaire {
    onUpdateQuestionQuestionnaire {
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
export const onDeleteQuestionQuestionnaire = /* GraphQL */ `
  subscription OnDeleteQuestionQuestionnaire {
    onDeleteQuestionQuestionnaire {
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
