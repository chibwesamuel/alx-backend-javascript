function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // Do nothing for failure case
      resolve();
    }
  });
}

module.exports = getPaymentTokenFromAPI;

