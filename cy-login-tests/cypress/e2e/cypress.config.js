const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8q567x',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: '8q567x', // need project ID to setup cypress cloud recording
});
