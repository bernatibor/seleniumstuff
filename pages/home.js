const { I } = inject();

module.exports = {

  locators: {
    loginButton : ".wunderlist-login-button",
  },
  // url

  getHomeDomain() {
    const subdomain = '/home';
    return subdomain
  }

}
