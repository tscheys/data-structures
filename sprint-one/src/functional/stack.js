var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    "top": 0
  };

  // Implement the methods below
  someInstance.push = function(value){
    var size = someInstance.size();
    storage[size] = value;
    // storage
    storage.top++;
  };

  someInstance.pop = function(){
    if (storage.top > 0) {
      var popped = storage[someInstance.size() - 1]
      delete storage[someInstance.size() - 1];
      storage.top--;
      return popped;
    } else { 
      return null
    }
    
  };

  someInstance.size = function(){
    return storage.top;
  };

  return someInstance;
};




// storage.0 = "a"
// storage.top = 1
// popped = storage[storage.top] = storage["1"]