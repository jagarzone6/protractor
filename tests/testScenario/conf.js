exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'firefox'
    },
    specs: ['spec.js'],
    framework: 'jasmine2' ,
    onPrepare: function() {
        var jasmineReporters = require('../../node_modules/jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(
            {
                consolidateAll: true,
                savePath: 'tests/testScenario',
                filePrefix: 'test-report'
            }
        )
        );
    }
};