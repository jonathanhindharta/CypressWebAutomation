const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  reporter: "mochawesome",

  env: {
    url_e2e_automation: "https://www.techinasia.com",
    mandatoryMenu: ["NEWS", "JOBS", "DATABASE", "EVENTS", "ABOUT", "ADVERTISE"],
    url_api_upcoming_events: "https://www.techinasia.com/wp-json/techinasia/3.0/meta/navigational/sidebar/upcoming-events",
    url_api_post_10: "https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1&per_page=10",
    url_api_post_30: "https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1&per_page=30",
    element_load_time_out: 3000,
    tia_email: "your_active_tia_email@gmail.com",
    tia_password: "your_active_tia_password"
  },

  retries: {
    runMode: 1,
  },

  projectId: "tiaAsgJonathanHindharta001",

  e2e: {
    /*setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },*/
    specPattern: 'cypress/integration/*.js'
  },
});