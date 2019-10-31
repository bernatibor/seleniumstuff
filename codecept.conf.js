exports.config = {
  tests: './tests/*/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://wunderlist.com',
      browser: 'firefox',
      smartWait: 5000
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login.js',
    homePage: './pages/home.js'
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'secondProj'
}