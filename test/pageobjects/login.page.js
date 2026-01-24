const { $ } = require('@wdio/globals')
const Page = require('./page')

class LoginPage extends Page {

  get title() {
    return $('~login-title')
  }

  get email() {
    return $('~login-email')
  }

  get password() {
    return $('~login-password')
  }

  get submit() {
    return $('~login-submit')
  }

  async login(email, password) {
    await this.email.waitForDisplayed({ timeout: 20000 })
    await this.email.setValue(email)
    await this.password.setValue(password)
    await this.submit.click()
  }
}

module.exports = new LoginPage()
