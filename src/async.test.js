import { jest } from '@jest/globals';
import { withCallback, createRandomNumber } from "./async.js";

describe('async', () => {
  describe('withCallback', () => {
    it('should call the callback with Hello World (ugly version)', () => {
      withCallback(function (value) {
        expect(value).toBe('Hello World');
      });
    });

    it('should call the callback with Hello World (pretty version)', () => {
      const cb = jest.fn();
      withCallback(cb);

      expect(cb).toHaveBeenCalled();
      expect(cb).toHaveBeenCalledWith('Hello World');
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('random', () => {
    it('should return a random number', () => {
      const result = createRandomNumber(() => 0.7832, 100);
      expect(result).toBe(78);
      expect(typeof result).toBe('number');
    });
  })
})