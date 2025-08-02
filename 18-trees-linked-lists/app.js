class LinkedListNode {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    }
}

class LinkedList {
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

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next;
        }
    }
}

let myLinkedList = new LinkedList();
myLinkedList.append('Tony');
myLinkedList.append('Steve');
myLinkedList.append('Natasha');
myLinkedList.print();
