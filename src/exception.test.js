import { add } from "./exception";

describe('Exception', () => {
  it('should throw an exception (ugly version)', () => {
    try {
      const result = add('1', 2);
    } catch (e) {
      expect(e.message).toBe('unable to add things');
    }
  });

  it('should throw an exception (ugly version)', () => {
    const exceptionFunction = () => add('1', 2);
    expect(exceptionFunction).toThrow();
    expect(exceptionFunction).toThrowError('unable to add things')
  });
})