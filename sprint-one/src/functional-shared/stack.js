var Stack = function() {
  var storage = {
    'top': 0
  }
  _.extend(storage, stackMethods);
  return storage;

  //RETURN SOMETHING

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  push: function(value) {
    this[this.size()] = value;
    this.top++;
  },
  pop : function() {
    if(this.size() > 0) {
      var popped = this[this.size() - 1];
      delete this[this.size() - 1];
      this.top--;
      return popped;
    }

  },
  size: function() {
    return this.top;
  }
};


