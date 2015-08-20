var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail !== null) {
      list.tail.next = Node(value);  
    }
    list.tail = Node(value);
    if (list.head === null) {
      list.head = list.tail;
    }
    
    // list.tail.next = null;
  };

  list.removeHead = function(){
    // if (list.head.next !== null) {
      var temp = list.head.next;
      var currentHead = list.head;
      list.head = null;
      list.head = temp;
    // } else {
      list.tail = null;
      return currentHead.value;
    // }
  };

  list.contains = function(target){
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
 */
