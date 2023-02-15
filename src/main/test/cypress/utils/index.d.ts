declare namespace Cypress {
  interface Chainable {
    getByTestId: (value: string) => Chainable<any>
  }
}
