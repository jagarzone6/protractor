exports.config = {
    framework: 'jasmine',
    onPrepare: function() {
        var jasmineReporters = require('../node_modules/jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
        );
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    capabilities: {
        browserName: 'firefox'
    }
};