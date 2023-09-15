const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      webdemoshop_url: 'https://demowebshop.tricentis.com/'
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
