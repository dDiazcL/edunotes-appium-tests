class LoginPage {

  get title() {
    return $('~login-title');
  }

  get emailInput() {
    return $('~login-email');
  }

  get passwordInput() {
    return $('~login-password');
  }

  get submitButton() {
    return $('~login-submit');
  }

  async login(email, password) {
    await this.emailInput.waitForDisplayed({ timeout: 15000 });
    await this.emailInput.setValue(email);

    await this.passwordInput.setValue(password);
    await this.submitButton.click();
  }
}

module.exports = new LoginPage();
