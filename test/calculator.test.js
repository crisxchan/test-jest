import { calculator } from "../script";

test('calculator addition', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('calculator subtraction', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
})

test('calculator division', () => {
    expect(calculator.divide(1, 2)).toBe(.5);
})

test('calculator multiplication', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
})