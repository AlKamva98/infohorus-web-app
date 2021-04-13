/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport {
    onCreateReport {
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
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport {
    onUpdateReport {
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
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport {
    onDeleteReport {
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
export const onCreateRecomendation = /* GraphQL */ `
  subscription OnCreateRecomendation {
    onCreateRecomendation {
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
export const onUpdateRecomendation = /* GraphQL */ `
  subscription OnUpdateRecomendation {
    onUpdateRecomendation {
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
export const onDeleteRecomendation = /* GraphQL */ `
  subscription OnDeleteRecomendation {
    onDeleteRecomendation {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateRecomendationUser = /* GraphQL */ `
  subscription OnCreateRecomendationUser {
    onCreateRecomendationUser {
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
export const onUpdateRecomendationUser = /* GraphQL */ `
  subscription OnUpdateRecomendationUser {
    onUpdateRecomendationUser {
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
export const onDeleteRecomendationUser = /* GraphQL */ `
  subscription OnDeleteRecomendationUser {
    onDeleteRecomendationUser {
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
