const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'snjhwv',

    "viewportWidth": 1600,
    "viewportHeight": 1200,
    "chromeWebSecurity": false,
    "numTestsKeptInMemory": 0,
  

e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here


    },
  },
});
