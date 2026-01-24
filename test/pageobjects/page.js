const { browser } = require('@wdio/globals')

class Page {
  async pause(ms = 1000) {
    await browser.pause(ms)
  }
}

module.exports = Page
