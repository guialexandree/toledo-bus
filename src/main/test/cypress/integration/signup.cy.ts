import faker from 'faker'
import * as FormHelper from '../utils/form-helpers'
import * as Helpers from '../utils/helpers'
import * as Http from '../utils/http-mocks'

const path = 'api/signup'
export const mockEmailInUseError = (): void => { Http.mockForbiddenError(path, 'POST') }
export const mockUnexpectedError = (): void => { Http.mockServerError(path, 'POST') }
export const mockInvalidCredendialsError = (): void => { Http.mockUnauthorizedError(path) }

export const mockSuccess = (): void => {
  Http.mockOk('api/surveys', 'GET', 'survey-list')
  Http.mockOk(path, 'POST', 'account', 'signUpRequest')
}

const populateFields = (): void => {
  cy.getByTestId('name').type(faker.name.findName())
  cy.getByTestId('email').type(faker.internet.email())
  const password = faker.datatype.string(6)
  cy.getByTestId('password').type(password)
  cy.getByTestId('passwordConfirmation').type(password)
}

const simulateValidSubmit = (): void => {
  populateFields()
  cy.getByTestId('submit').click()
}

describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('signup')
  })

  it('Should load with correct initial state', () => {
    FormHelper.testInputStatus('name', 'Campo Obrigatório')
    FormHelper.testInputStatus('email', 'Campo Obrigatório')
    FormHelper.testInputStatus('password', 'Campo Obrigatório')
    FormHelper.testInputStatus('passwordConfirmation', 'Campo Obrigatório')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should reset state on page load', () => {
    cy.getByTestId('email').type(faker.internet.email())
    FormHelper.testInputStatus('email')
    cy.getByTestId('login-link').click()
    cy.getByTestId('signup-link').click()
    FormHelper.testInputStatus('email', 'Campo Obrigatório')
  })

  it('Should present erro if form is invalid', () => {
    cy.getByTestId('name').focus().type(faker.datatype.string(4))
    cy.getByTestId('email').focus().type(faker.random.word())
    FormHelper.testInputStatus('email', 'Valor inválido')
    cy.getByTestId('password').focus().type(faker.datatype.string(4))
    cy.getByTestId('passwordConfirmation').focus().type(faker.datatype.string(5))
    FormHelper.testInputStatus('password', 'Valor inválido')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('name').type(faker.name.findName())
    FormHelper.testInputStatus('name')
    cy.getByTestId('email').type(faker.internet.email())
    FormHelper.testInputStatus('email')
    const password = faker.datatype.string(6)
    cy.getByTestId('password').type(password)
    FormHelper.testInputStatus('password')
    cy.getByTestId('passwordConfirmation').type(password)
    FormHelper.testInputStatus('passwordConfirmation')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present EmailInUseError on 403', () => {
    mockEmailInUseError()
    simulateValidSubmit()
    FormHelper.testMainError('O e-mail informado já está em uso')
    Helpers.testUrl('/signup')
  })

  it('Should present UnexpectedError on default erro cases', () => {
    mockUnexpectedError()
    simulateValidSubmit()
    cy.getByTestId('error-wrap')
    Helpers.testUrl('/signup')
  })

  it('Should present save accessToken is valid credentials are provided', () => {
    mockSuccess()
    simulateValidSubmit()
    Helpers.testUrl('/')
    Helpers.testLocalStorageItem('account')
  })

  it('Should present multiples submits', () => {
    mockSuccess()
    populateFields()
    cy.getByTestId('submit').dblclick()
    cy.wait('@signUpRequest')
    cy.get('@signUpRequest.all').should('have.length', 1)
  })

  it('Should not call submit if form is invalid', () => {
    mockSuccess()
    cy.getByTestId('email').type(faker.internet.email()).type('{enter}')
    cy.get('@signUpRequest.all').should('have.length', 0)
  })
})
