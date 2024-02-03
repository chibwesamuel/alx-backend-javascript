const { describe, it } = require('mocha');
const request = require('request');
const { expect } = require('chai');

describe('Login endpoint', () => {
  it('should return welcome message with username', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' }
    };

    request(options, (error, response) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available Payments endpoint', () => {
  it('should return available payment methods', (done) => {
    request('http://localhost:7865/available_payments', (error, response) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
});

describe('Cart endpoint', () => {
  it('Test for GET / exists', (done) => {
    request('http://localhost:7865/cart', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Test for GET / returns “Welcome to the payment system” exists', (done) => {
    request('http://localhost:7865/cart', (error, response) => {
      expect(response.body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Test for GET /cart/:id exists', (done) => {
    request('http://localhost:7865/cart/123', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Test for GET /cart/:id returns “Payment methods for cart :id”', (done) => {
    request('http://localhost:7865/cart/123', (error, response) => {
      expect(response.body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('Test for GET /cart/:id can’t accept :id not a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
