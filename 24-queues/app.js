class LinkedListNode {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val) {
        const newNode = new LinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        } 
        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    pop() {
        let originalHead = this.head;
        if (this.head) {
            this.head = this.head.next;
        }
        return originalHead ? originalHead.value : null;

    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next;
        }
    }
}

let myQueue = new Queue();
myQueue.append('Tony');
myQueue.append('Steve');
myQueue.append('Natasha');
myQueue.print();
console.log('Popped: ', myQueue.pop())