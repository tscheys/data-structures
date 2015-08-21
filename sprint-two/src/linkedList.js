var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    // if list.head and list.tail are null
    if (list.head === null && list.tail === null) {
      list.head = Node(value);
      list.tail = list.head;
      // adding a value should give list.head and list.tail that value.
      // list.head.next should still be null.
    } else if (list.head.next === null && list.head.value) { 
      list.head.next = Node(value);
      list.tail = Node(value);
    } else {
      var newTail = Node(value);
      list.tail.next = newTail; 
      list.tail = newTail;
    }

  };

  list.removeHead = function(){
    // if (list.head.next !== null) {
      // var temp = list.head.next; //
      var currentHead = list.head;
      // list.head = null;
      list.head = list.head.next;

    // } else {
      // list.tail = null;
      return currentHead.value;
    // }
  };

  list.contains = function(target){
    // go through list.item.value and find the target. 

    function valueFinder(node) {
      if (node.value === target) {
        return true;
      } else if (node.next !== null) {
        return valueFinder(node.next);
      } 
      return false;
    }
    return valueFinder(list.head);

    // return a boolean
  };

  list.print = function() {
    return console.log(list);
  }

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * O(n)? 
 */
