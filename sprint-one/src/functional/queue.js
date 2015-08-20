var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    "front": 0,
    "back": 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[storage.back] = value;
    storage.back++;
  };

  someInstance.dequeue = function(){
    if (someInstance.size() > 0) {
      var dequeued = storage[storage.front];
      delete storage[storage.front];
      storage.front++;
      return dequeued;
    } else {
      return null;
    }
    // update front
  };

  someInstance.size = function(){
    return storage.back - storage.front;
  };

  someInstance.print = function() {
    return storage;
  }
  return someInstance;
};
