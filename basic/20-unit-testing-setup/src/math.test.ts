import { add, subtract, multiply, divide, factorial } from './math';

/**
 * Test suite for math utility functions.
 * Tests cover basic functionality, edge cases, and error handling.
 */

describe('Math Utility Functions', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });

    it('should add two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it('should add decimals', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should subtract resulting in negative', () => {
      expect(subtract(3, 5)).toBe(-2);
    });

    it('should subtract decimals', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    it('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it('should multiply decimals', () => {
      expect(multiply(1.5, 2)).toBe(3);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });

    it('should divide resulting in decimal', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });

    it('should divide negative numbers', () => {
      expect(divide(-6, 3)).toBe(-2);
    });
  });

  describe('factorial', () => {
    it('should return 1 for factorial of 0', () => {
      expect(factorial(0)).toBe(1);
    });

    it('should return 1 for factorial of 1', () => {
      expect(factorial(1)).toBe(1);
    });

    it('should calculate factorial of positive integers', () => {
      expect(factorial(5)).toBe(120);
      expect(factorial(3)).toBe(6);
    });

    it('should throw error for negative numbers', () => {
      expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
    });
  });
});
