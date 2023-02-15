import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: 'src/main/test/cypress/fixtures',
  viewportHeight: 860,
	video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./src/main/test/cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:8080',
    specPattern: 'src/main/test/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/main/test/cypress/support/index.js',
  },
})
