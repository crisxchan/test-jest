import { reverse } from "../script";

test('reverse', () => {
    expect(reverse('hello')).toBe('olleh');
});

test('reverse', () => {
    expect(reverse('Hello')).toBe('olleH');
});