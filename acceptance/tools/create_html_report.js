const reporter_config = {
    "theme" : "bootstrap",
    "jsonFile" : "reports/acceptance/cucumber_report.json",
    "output" : "reports/acceptance/cucumber_report.html",
    "reportSuiteAsScenarios" : true,
    "launchReport" : false
};
const reporter = require('cucumber-html-reporter');

reporter.generate(reporter_config);