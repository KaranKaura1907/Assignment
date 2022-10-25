const Queue= require("./Queue");

class StackUsingQueue{
    constructor() {
        this.q1 = new Queue()
        this.q2 = new Queue()
    }

    push(value) {
        this.q1.enqueue(value)
    }

    pop(){
       
        while(this.q1.getLength() > 1) this.q2.enqueue(this.q1.dequeue())
        let result = this.q1.dequeue();
        while(!this.q2.isEmpty()) this.q1.enqueue(this.q2.dequeue())
        return result
    }

    isEmpty() {
        return this.q1.isEmpty()
    }

    top() {
        if(this.isEmpty()) return null;
        while(this.q1.getLength() > 1) this.q2.enqueue(this.q1.dequeue())
        let result = this.q1.dequeue();
        while(!this.q2.isEmpty()) this.q1.enqueue(this.q2.dequeue())
        this.q1.enqueue(result)
        return result
    }

    print() {
        console.log(this.q1.getData())
    }
}

const stk = new StackUsingQueue()
stk.push(1)
stk.push(3)
stk.push(7)
stk.push(18)
stk.print()
console.log("The Top Element is:",stk.top())
stk.pop()
stk.print()


