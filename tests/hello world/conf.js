exports.config = {
    framework: 'jasmine',
    onPrepare: function() {
        var jasmineReporters = require('../../node_modules/jasmine-reporters/index');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(
            {
                consolidateAll: true,
                savePath: 'tests/hello world',
                filePrefix: 'test-report'
            }
        )
        );
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    capabilities: {
        browserName: 'firefox'
    }
};