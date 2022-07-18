export class Stack<T> {
    private _stack: Array<T> = [];

    constructor(startValue?: T) {
        if (startValue) {
            this.push(startValue);
        }
    }

    get count(): number {
        return this._stack.length;
    }
    public peek(): T {
        return this._stack[this._stack.length - 1];
    }
    public pop(): T {
        const result = this.peek();
        this._stack.pop();
        return result;
    }
    public push(element: T) {
        this._stack.push(element);
    }
}
