import faker from 'faker'

export const mockUnauthorizedError = (url: string): void => {
  cy.intercept({
    method: 'POST',
    url
  }, {
    statusCode: 401
  }).as('request')
}

export const mockForbiddenError = (url: string, method: string): void => {
  cy.intercept({
    method,
    url
  }, {
    statusCode: 403
  }).as('request')
}

export const mockServerError = (url: string, method: string): void => {
  cy.intercept({
    method,
    url
  },{
    statusCode: faker.helpers.randomize([400, 404, 500])
  }).as('request')
}

export const mockOk = (url: string, method: string, fixture: string, alias: string = 'request'): void => {
  cy.intercept({
    method,
    url
  }, {
    statusCode: 200,
    fixture
  }).as(alias)
}
