import { Stack } from './stack';

describe('Stack', () => {
    it('should push element to stack', () => {
        let stack = new Stack('test');
        stack.push('test');
        expect(stack.count).toBe(2);
        stack = new Stack<string>();
        expect(stack.count).toBe(0);
    });
    it('should pop element from stack', () => {
        const stack = new Stack('test');
        expect(stack.pop()).toBe('test');
        expect(stack.count).toBe(0);
        expect(stack.pop()).toBeUndefined();
    });
    it('should get last element from stack', () => {
        const stack = new Stack('test');
        expect(stack.peek()).toBe('test');
        stack.push('test2');
        expect(stack.peek()).toBe('test2');
        stack.pop();
        expect(stack.peek()).toBe('test');
    });
});
