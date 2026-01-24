const { $ } = require('@wdio/globals')
const Page = require('./page')

class NotesPage extends Page {

  get addButton() {
    return $('~notes-add')
  }

  async addNote() {
    await this.addButton.waitForDisplayed({ timeout: 20000 })
    await this.addButton.click()
  }
}

module.exports = new NotesPage()
