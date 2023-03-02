const Calculator = require('./Calculator')

  let exec =new Calculator(2,3)
  describe('testing my Calculator', () => {
    test('adding of Numbers', () => {
      expect(exec.add()).toBe(5);
    });
  
    test('subtracting two numbers', () => {
        expect(exec.subtract()).toBe(-1);
    });

    test('multiply two numbers', () => {
        expect(exec.multiply()).toBe(6);
    });

    test('multiply two numbers', () => {
        expect(exec.divide()).toBe(2/3);
    });
  });