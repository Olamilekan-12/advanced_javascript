// STACKS AND QUEUES

class Stack {
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
       const removedItem =  this.items.pop();
       return removedItem;
    }

    peek(){
      const lastItem = this.items[this.items.length - 1]
      return lastItem;
    }
}

class Queue {
    constructor(){
        this.items = []
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
     const removedItem = this.items.shift()
     return removedItem;
    }

    peek(){
        const firstItem = this.items[0];
        return firstItem;
    }
}