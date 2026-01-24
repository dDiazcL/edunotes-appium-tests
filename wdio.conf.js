exports.config = {
    runner: 'local',

    hostname: '127.0.0.1',   // 🔑 MISMO HOST
    port: 4723,              // 🔑 MISMO PUERTO
    path: '/',               // 🔑

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '13',
        'appium:automationName': 'UiAutomator2',
        'appium:app': './apk/app-release.apk',
        'appium:autoGrantPermissions': true
    }],

    services: [],   // ❌ NO appium-service

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        timeout: 60000
    }
}
