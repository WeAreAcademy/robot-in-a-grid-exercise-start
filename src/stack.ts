export interface Stack<T> {
    push: (item: T) => void;
    pop: () => T | undefined;
    peek: () => T | undefined;
    isEmpty: () => boolean;
}

/** Creates an empty stack, capable of storing elements of type T. */
export function createStack<T>(): Stack<T> {
    //This data (innerArray) is encapsulated - users of the returned stack
    // will not be able to see or manipulate it:
    const innerArray: T[] = [];

    /** 
     * Pushes the given item onto the top of the stack, (mutating the stack). 
     */
    function push(item: T): void {
        innerArray.push(item);
    }

    /** 
     * Returns the top element of the stack, removing it from the stack (mutating the stack). 
     * Returns undefined if the stack is empty.
     */
    function pop(): T | undefined {
        return innerArray.pop();
    }

    /** 
     * Returns the top element of the stack without removing it. 
     * Returns undefined if the stack is empty.
     * 
     * */
    function peek(): T | undefined {
        return innerArray[innerArray.length - 1];
    }

    function isEmpty() {
        return innerArray.length === 0;
    }
    //make an object that has these functions as properties.
    //These functions, in turn, will have live access to the `innerArray` variable
    //via the property of closure, but it will not be otherwise accessible.
    const stack = { push, pop, peek, isEmpty };
    return stack;
}