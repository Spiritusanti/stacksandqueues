// Stacks and queues:

// Stacks:
// O(1)
//can be thought of as a stack of plates.
  // --> starts with the base element and gets data stacked on top of it. (LIFO - last in first out)
  // --> use cases - browser history, writing text, ect.
  // not native to JavaScript - can be built with Arrays and linked lists
  // why would we want to build with and Array and vice versa?

    // An array implmentation would allow us to use the pop and push methods to build a stack using O(1) operations.

    // A Linked List implentation would be more complex especially since JavaScript doesn't have it natively. inserting a new node between head and tail would require traversal leading to O(n) to add and remove from the stack. 

      // both can work pretty well - memory allocation becomes the defining feature with arrays have specific memory allocated VS linked list which is more scattered and requires holding the pointers


  // stack with linked list exercise:

  // setup a Node class
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

// build out Stack object
class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    // all we have to do is grab the top of the stack. E.g, this.top
    return this.top;
  }
  push(value) {
    // for adding new values to the stack
    // we need to instantiate a new node
    const newNode = new Node(value);
    // check if anything is in our stack:
    if (this.length === 0) {
      // if it is empty --> top and bottom are equal to the newNode
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // if our stack isn't empty we then need to move our pointer to the top node
      const holdingPointer = this.top;
      // then set top to the newNode
      this.top = newNode;
      // then set the next to our holdingPointer = null
      this.top.next = holdingPointer;
    }
    // increment length
    this.length++
    return this;
  }
  pop() {
    // for removing the top element from the stack
    // check if stack is empty
   if (!this.top){
     return null;
   }
  //  check if the stack has only one element
   if (this.top === this.bottom) {
    //  if it does set that element to null
     this.bottom = null;
   }
  //  if our stack.length is > 1 --> grab our pointer
   const holdingPointer = this.top;
  //  set top to the node underneath
   this.top = this.top.next;
  //  reduce this.length by 1
   this.length--;
   return this;
  }
}

const myStack = new Stack;
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();



  // Queues:
  // O(1)
  //  like the lines at a ride.
    // --> follows First-In-First-out (FIFO)
    // --> first element that enters the queue is the first to be processed.
    // --> useful in waitlist apps, restaraunt apps, Uber, Lyft, ect.
    //  new terminology - enqueue (add new element to queue) and dequeue (remove 1st element from queue).
     // not native to JavaScript - can be built with Arrays and linked lists
     // why would we want to build with and Array and vice versa?

        // Array implmentation would allow us to add elements with pop and push but following the FIFO order would require a shift of all elements resulting in an O(n) operations

        // Linked Lists in this case would allow us to add new elements and remove the first element with an O(1) operation since we don't have to traverse the list or shift the index. 