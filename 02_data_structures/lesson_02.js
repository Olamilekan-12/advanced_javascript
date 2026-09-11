// Linked Lists — Built From Scratch
// const node1 = {
//     value : 10,
//     next : null
// }

// const node2 =  {
//     value : 20,
//     next  : null
// }

// const node3 = {
//     value : 30,
//     next : null
// }

// node1.next = node2
// node2.next = node3

// let current = node1

// while(current !== null){
//     console.log(current.value);
//     current = current.next
// }

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null;
//     }

// append(value) {
//     const newNode = new Node(value);

//     if (this.head === null) {
//         this.head = newNode;
//         return;
//     }

//     let current = this.head;
//     while (current.next !== null) {
//         current = current.next;
//     }
//     current.next = newNode;
// }
// }

// const node1 = {
//     value : 10,
//     next : null
// }

// const node2 = {
//     value : 20,
//     next : null
// }

// const node3 = {
//     value : 30,
//     next : null
// }

// node1.next = node2
// node2.next = node3


// {
//     value : 10,
//     next : {
//         value : 20,
//         next : {
//             value : 30,
//             next : null
//         }
//     }
// }


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value){
        const newNode = new Node(value)

        if(this.head === null){
            this.head = newNode
        }
    }
}


