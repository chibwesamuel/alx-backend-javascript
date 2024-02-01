const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with correct arguments', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const totalAmount = 100;
    const totalShipping = 20;
    sendPaymentRequestToApi(totalAmount, totalShipping);
    sinon.assert.calledOnce(calculateNumberSpy);
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', totalAmount, totalShipping);
    calculateNumberSpy.restore();
  });

  it('should log the correct message to the console', function() {
    const consoleLogSpy = sinon.spy(console, 'log');
    const totalAmount = 100;
    const totalShipping = 20;
    sendPaymentRequestToApi(totalAmount, totalShipping);
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, `The total is: ${totalAmount + totalShipping}`);
    consoleLogSpy.restore();
  });
});
