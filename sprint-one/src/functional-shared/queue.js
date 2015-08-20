var Queue = function(){
  var storage = {
    "front": 0,
    "back":0
  }
  _.extend(storage, queueMethods);

  return storage;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue: function(value) {
    this[this.back] = value;
    this.back++;
  },
  dequeue: function() {
    if(this.size() > 0) {
      var dequeued = this[this.front];
      delete this[this.front];
      this.front++;
      return dequeued;
    } else {
      return null;
    }

  },
  size: function() {
    return this.back - this.front;
  },
  print: function() {
    return this;
  }
};


