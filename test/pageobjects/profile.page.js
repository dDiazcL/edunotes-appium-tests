const { $ } = require('@wdio/globals')
const Page = require('./page')

class ProfilePage extends Page {

  get logoutButton() {
    return $('~profile-logout')
  }

  async logout() {
    await this.logoutButton.waitForDisplayed({ timeout: 20000 })
    await this.logoutButton.click()
  }
}

module.exports = new ProfilePage()
