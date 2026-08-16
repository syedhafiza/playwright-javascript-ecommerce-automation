const testData = {
     urls: {
    baseUrl: 'https://www.saucedemo.com/',
  },
  validLogin: {
    username: 'standard_user',
    password: 'secret_sauce',
  },

  invalidLogin: {
    username: 'invalid_user',
    password: 'wrong_password',
  },

  lockedOutUser: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },

  checkoutInfo: {
    firstName: 'John',
    lastName: 'Doe',
    postalCode: '12345',
  },

  products: {
    backpack: 'Sauce Labs Backpack',
    bikeLight: 'Sauce Labs Bike Light',
    boltTShirt: 'Sauce Labs Bolt T-Shirt',
    fleeceJacket: 'Sauce Labs Fleece Jacket',
    onesie: 'Sauce Labs Onesie',
    tshirtRed: 'Test.allTheThings() T-Shirt (Red)',
  },
};

module.exports = { testData }; 
