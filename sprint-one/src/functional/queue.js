var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    "head": 0,
    "size": 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[someInstance.size()] = value;
    storage.size++;
  };

  someInstance.dequeue = function(){
    if (someInstance.size() > 0) {
      var dequeued = storage[storage.head];
      debugger;
      delete storage[storage.head];
      storage.head++;
      storage.size--;
      return dequeued;
    } else {
      return null;
    }
    // update head
  };

  someInstance.size = function(){
    return storage.size;
  };

  return someInstance;
};
