const { defineConfig } = require("cypress");

module.exports = defineConfig({

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
