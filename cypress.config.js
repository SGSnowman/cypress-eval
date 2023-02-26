module.exports = {
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalSkipDomainInjection : [
      '*.criteo.com',
      '*.googlesyndication.com/*'
    ],
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    //End points
    baseUrl: "https://demoqa.com",
    env : {
      //endpoints
      bookStore:"/books/"
    }
  },
};
