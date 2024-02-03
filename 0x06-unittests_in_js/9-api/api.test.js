const { describe, it } = require('mocha');
const request = require('request');
const { expect } = require('chai');

describe('Cart page', () => {
  it('Test for GET / exists', (done) => {
    request('http://localhost:7865/', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Test for GET / returns “Welcome to the payment system” exists', (done) => {
    request('http://localhost:7865/', (error, response) => {
      expect(response.body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Test for GET /cart/:id returns “Payment methods for cart :id”', (done) => {
    request('http://localhost:7865/cart/123', (error, response) => {
      expect(response.body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('Correct status code when :id is a number', (done) => {
    request('http://localhost:7865/cart/123', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)', (done) => {
    request('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
