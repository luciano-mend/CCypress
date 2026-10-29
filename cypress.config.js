const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jjfviu',
  allowCypressEnv: false,
  video: false,

  //altero o tempo de timeout do metodo get, que é o tempo que ele vai ficar
  //  tentando encontrar o elemento.
  //defaultCommandTimeout: 1000,

  e2e: {
    baseUrl: 'https://barrigarest.wcaquino.me',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
