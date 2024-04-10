const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://xup-landlord-fronted.herokuapp.com/auth/login',
    watchForFileChanges: false
  },
});
