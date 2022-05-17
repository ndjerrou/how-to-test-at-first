const lib = require('../lib');

describe('Lib', () => {
  describe('Absolute fn', () => {
    it('should return a positive number if the input is a positive one', () => {
      const result = lib.absolute(1);

      expect(result).toBe(1);
    });

    it('should return a positive number if the input is a negative one', () => {
      const result = lib.absolute(-1);

      expect(result).toBe(1);
    });
    it('should return 0 if the input is 0', () => {
      const result = lib.absolute(0);

      expect(result).toBe(0);
    });
  });

  describe('Greet fn', () => {
    it('Should return a greeting message including the name', () => {
      const message = lib.greet('Oussama');

      //   expect(message).toBe('Welcome Oussama');
      expect(message).toMatch(/Oussama/);
      expect(message).toContain('Oussama');
    });
  });

  describe('GetCurrencies fn', () => {
    it('Should return a bunch of currencies inside an array', () => {
      const currencies = lib.getCurrencies();

      // too general
      //   expect(currencies).toBeDefined();
      //   expect(currencies).not.toBeNull();

      // too specific
      //   expect(currencies[0]).toBe('USD');

      //   expect(currencies).toContain('USD');

      expect(currencies).toEqual(expect.arrayContaining(['AUD', 'EUR', 'USD']));
    });
  });

  describe('GetProduct fn', () => {
    it('should return a product given a particular id', () => {
      const product = lib.getProduct(1);

      //   expect(product).toBe({ id: 1, price: 10 });

      expect(product).toHaveProperty('id', 1);
    });
  });
});
