const { $ } = require('@wdio/globals')
const page = require('./page')

class RegisterPage {

  get emailInput() {
    return $('~register-email');
  }

  get passwordInput() {
    return $('~register-password');
  }

  get submitButton() {
    return $('~register-submit');
  }

  get loginLink() {
    return $('~register-login-link');
  }

  async register(email, password) {
    await this.emailInput.waitForDisplayed({ timeout: 15000 });
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.submitButton.click();
  }
}

module.exports = new RegisterPage();

