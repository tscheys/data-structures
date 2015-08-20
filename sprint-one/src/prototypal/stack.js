var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);

  newStack.top = 0;

  return newStack;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.size()] = value;
  this.top++;
};

stackMethods.pop = function() {
  if (this.size() > 0) {
    var popped = this[this.size() - 1];
    delete this[this.size() - 1];
    this.top--;
    return popped; 

  } else {
    return null;
  }

};

stackMethods.size = function() {
  return this.top;
}
