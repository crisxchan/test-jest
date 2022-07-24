import { capitalize } from "../script";

test('capitalize', () => {
    expect(capitalize('hello')).toBe('HELLO');
});

test('capitalize', () => {
    expect(capitalize('HEllo')).toBe('HELLO');
});
