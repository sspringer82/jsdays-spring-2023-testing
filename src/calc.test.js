const Calculator = require('./calc')

describe('Calculator', () => {
  let calc = null;

  beforeEach(() => {
    console.log('before each Calc');
    calc = new Calculator();
  })

  describe('add', () => {
    it('should add 1 and 1 and return 2', () => {
      // act
      const result = calc.add(1, 1);
      // assert
      expect(result).toBe(2);
    });

    it('should add 2 and 1 and return 3', () => {
      // act
      const result = calc.add(2, 1);
      // assert
      expect(result).toBe(3);
    });

    const testCases = [
      { operands: [1, 2], expectedResult: 3 },
      { operands: [2, 2], expectedResult: 4 }
    ];
    it.each(testCases)('should add $input and expect $output', ({ operands, expectedResult }) => {
      const result = calc.add(operands[0], operands[1]);

      expect(result).toBe(expectedResult);
    })

    // it('should work', () => expect((new Calculator()).add(1, 1)).toBe(2));
  });

  describe('sub', () => {
    it('should subtract 2 from 4 and return 2', () => {
      // act
      const result = calc.sub(4, 2);
      // assert
      expect(result).toBe(2);
    });
  })
})