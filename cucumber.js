const common = [
    '--compiler js:babel-core/register',
    '--require ./acceptance/step_definitions',
    '--require ./acceptance/support',
    '-f json:reports/acceptance/cucumber_report.json',
    './acceptance/features'
].join(' ');

module.exports = {
    'default': common
};