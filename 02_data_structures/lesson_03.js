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