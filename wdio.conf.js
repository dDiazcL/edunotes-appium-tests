exports.config = {
  runner: 'local',
  framework: 'mocha',

  specs: ['./tests/**/*.js'],

  mochaOpts: {
    timeout: 60000
  },

  services: ['appium'],
  port: 4723,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:platformVersion': '13',
    'appium:automationName': 'UiAutomator2',
    'appium:app': './apk/edunotes.apk',
    'appium:autoGrantPermissions': true
  }]
};
