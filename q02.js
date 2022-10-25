const Stack= require("./Stacks");
class QueueUsingStack{
    constructor() {
        this.stk1 = new Stack()
        this.stk2 = new Stack()
    }

    enqueue(value) {
        this.stk1.push(value)
    }

    dequeue() {
        if(this.isEmpty()) return null
        if(this.stk2.isEmpty()) {
            while(!this.stk1.isEmpty()) this.stk2.push(this.stk1.pop())
        }
        return this.stk2.pop()
    }

    getFront() {
        if(this.isEmpty()) return null
        if(this.stk2.isEmpty()) {
            while(!this.stk1.isEmpty()) this.stk2.push(this.stk1.pop())
        }
        return this.stk2.peek()
    }

    isEmpty() {
        return this.stk1.isEmpty() && this.stk2.isEmpty()
    }
}

const q = new QueueUsingStack()
for(let i = 10; i < 17; i++) {
    q.enqueue(i)
}
console.log(q.getFront())
q.dequeue();

