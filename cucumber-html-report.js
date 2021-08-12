const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/cucumber-html-report.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '92'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress project'},
            {label: 'Execution Start Time', value: 'Agu 11th 2021, 02:31 PM'},
            {label: 'Execution End Time', value: 'Agu 11th 2021, 02:33 PM'}
        ]
    }
});
