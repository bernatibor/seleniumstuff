const { I } = inject();

module.exports = {
  
  // locators
  fields: {
    email: {name: 'email'},
    password: {name: 'password'}
  },
  msFields: {
    email: {css: 'input[type=email]'},
    password: {css: 'input[type=password]'},
    submitButton: {css: 'input[type=submit]'}
  },
  submitButton: {css: 'input[type=submit]'},
  msAccountSelector: {css: '.microsoft-selector a.button'},
  msExternalButton: {css: "span.external-auth.microsoft a"},
  // error visual
  // facebook button
  // ms account button

  sendForm(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
  },

  signInWithMS() {
    I.click(this.msAccountSelector)
    I.waitForElement(this.msExternalButton);
    I.click(this.msExternalButton);

    I.waitInUrl("login.live.com");

    I.fillField(this.msFields.email, "seleniumtestdebrecen@gmail.com");
    I.click(this.msFields.submitButton);
    I.fillField(this.msFields.password, "Seleniumtest1");
    I.click(this.msFields.submitButton);
  },

  // unused
  getDomain () {
    const domain = "/login";
    return domain;
  },

  validate() {
    I.seeInCurrentUrl("login");
    I.seeElement(this.fields.email);
  }
}
