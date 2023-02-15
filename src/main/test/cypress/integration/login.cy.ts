import * as FormHelper from '../utils/form-helpers'
import * as Helpers from '../utils/helpers'
import * as Http from '../utils/http-mocks'
import faker from 'faker'

const path = 'api/signin'
export const mockInvalidCredendialsError = (): void => { Http.mockUnauthorizedError(path) }
export const mockUnexpectedError = (): void => { Http.mockServerError(path, 'POST') }
export const mockSuccess = (): void => {
  Http.mockOk('api/surveys', 'GET', 'survey-list')
  Http.mockOk(path, 'POST', 'account', 'loginRequest')
}

const populateFields = (): void => {
  cy.getByTestId('email').type(faker.internet.email())
  cy.getByTestId('password').type(faker.datatype.string(6))
}

const simulateValidSubmit = (): void => {
  populateFields()
  cy.getByTestId('submit').click()
}

describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('Should load with correct initial state', () => {
    FormHelper.testInputStatus('email', 'Campo Obrigatório')
    FormHelper.testInputStatus('password', 'Campo Obrigatório')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should reset state on page load', () => {
    cy.getByTestId('email').type(faker.internet.email())
    FormHelper.testInputStatus('email')
    cy.getByTestId('signup-link').click()
    cy.getByTestId('login-link').click()
    FormHelper.testInputStatus('email', 'Campo Obrigatório')
  })

  it('Should present erro if form is invalid', () => {
    cy.getByTestId('email').focus().type(faker.random.word())
    FormHelper.testInputStatus('email', 'Valor inválido')
    cy.getByTestId('password').focus().type(faker.datatype.string(4))
    FormHelper.testInputStatus('password', 'Valor inválido')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('email').type(faker.internet.email())
    FormHelper.testInputStatus('email')
    cy.getByTestId('password').type(faker.datatype.string(6))
    FormHelper.testInputStatus('password')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present InvalidCredentialsError on 401', () => {
    mockInvalidCredendialsError()
    simulateValidSubmit()
    FormHelper.testMainError('Credenciais inválidas')
    Helpers.testUrl('/login')
  })

  it('Should present UnexpectedError on default error cases', () => {
    mockUnexpectedError()
    simulateValidSubmit()
    cy.getByTestId('error-wrap')
    FormHelper.testMainError('Algo de errado aconteceu, Tente novamente em breve.')
    Helpers.testUrl('/login')
  })

  it('Should present store accessToken is valid credentials are provided', () => {
    mockSuccess()
    cy.getByTestId('email').type(faker.internet.email())
    cy.getByTestId('password').type(faker.internet.password()).type('{enter}')
    Helpers.testUrl('/')
    Helpers.testLocalStorageItem('account')
  })

  it('Should present multiples submits', () => {
    mockSuccess()
    populateFields()
    cy.getByTestId('submit').dblclick()
    cy.wait('@loginRequest')
    cy.get('@loginRequest.all').should('have.length', 1)
  })

  it('Should not call submit if form is invalid', () => {
    mockSuccess()
    cy.getByTestId('email').type(faker.internet.email()).type('{enter}')
    cy.get('@loginRequest.all').should('have.length', 0)
  })
})
