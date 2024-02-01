const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Create a spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log the correct message when total amount is 100 and total shipping is 20', () => {
    sendPaymentRequestToApi(100, 20);
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
  });

  it('should log the correct message when total amount is 10 and total shipping is 10', () => {
    sendPaymentRequestToApi(10, 10);
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
  });
});
