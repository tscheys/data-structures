var Stack = function() {
  this.top = 0;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function (value) {
  this[this.size()] = value;
  this.top++
};

Stack.prototype.pop = function() {
  if(this.size() > 0) {
    var popped = this[this.size() - 1];
    delete this[this.size() - 1];
    this.top--;
    return popped;
  } else {
    return null;
  }

}
Stack.prototype.size = function() {
  return this.top;
}



