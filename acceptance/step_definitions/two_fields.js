
const getOutputFinal = require("../../src/gameoflife").getOutputFinal;

const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('a input that contains two fields', function (input) {
    this.input = input;
});


When('I request the result', function () {
    this.output = getOutputFinal(this.input);
});


Then('I expect to see following output', function (output) {
    expect(this.output).to.eql(output)
});