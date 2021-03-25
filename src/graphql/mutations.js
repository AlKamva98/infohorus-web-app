/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnswers = /* GraphQL */ `
  mutation CreateAnswers(
    $input: CreateAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    createAnswers(input: $input, condition: $condition) {
      id
      username
      answers
      documents
      completed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserAnswers {
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
      }
    }
  }
`;
export const updateAnswers = /* GraphQL */ `
  mutation UpdateAnswers(
    $input: UpdateAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    updateAnswers(input: $input, condition: $condition) {
      id
      username
      answers
      documents
      completed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserAnswers {
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
      }
    }
  }
`;
export const deleteAnswers = /* GraphQL */ `
  mutation DeleteAnswers(
    $input: DeleteAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    deleteAnswers(input: $input, condition: $condition) {
      id
      username
      answers
      documents
      completed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserAnswers {
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
    }
  }
`;
