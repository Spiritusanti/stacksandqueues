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