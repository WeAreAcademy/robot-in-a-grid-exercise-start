export interface Stack<T> {
    push: (item: T) => void;
    pop: () => T | undefined;
    isEmpty: () => boolean;
}

export function createStack<T>(): Stack<T> {
    //This data (innerArray) is encapsulated - users of the returned stack
    // will not be able to see or manipulate it:
    const innerArray: T[] = [];

    function push(item: T): void {
        innerArray.push(item);
    }

    function pop(): T | undefined {
        return innerArray.pop();
    }

    function isEmpty() {
        return innerArray.length === 0;
    }

    const stack = { push, pop, isEmpty };
    return stack;
}