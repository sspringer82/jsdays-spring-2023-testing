import { doSomethingAsync } from "./async2"
import { jest } from '@jest/globals';

describe('Async2', () => {
  it.skip('should resolve with Hallo Welt', (done) => {
    const p = doSomethingAsync();
    p.then(value => {
      expect(value).toBe('Hallo Welt');
      done();
    })
  });

  it('should resolve with Hallo Welt', async () => {
    const value = await doSomethingAsync();
    expect(value).toBe('Hallo Welt');
  });

  describe('timer', () => {
    beforeEach(() => jest.useFakeTimers());
    afterEach(() => jest.useRealTimers());

    it('should run fast', () => {
      const p = doSomethingAsync();
      // jest.runAllTimers();
      jest.advanceTimersByTime(1000);
      p.then(value => {
        expect(value).toBe('Hallo Welt');
      })
    })

    it('should run fast', async () => {
      const p = doSomethingAsync();
      // jest.runAllTimers();
      jest.advanceTimersByTime(1000);
      const value = await p;
      expect(value).toBe('Hallo Welt');
    })
  });
})