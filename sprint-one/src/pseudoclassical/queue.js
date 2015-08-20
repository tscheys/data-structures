var Queue = function() {
  this.front = 0;
  this.back = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value) {
  this[this.back] = value;
  this.back++;
};
Queue.prototype.dequeue = function() {
  if(this.size() > 0) {
    var dequeued = this[this.front];
    delete this[this.front];
    this.front++;
    return dequeued;
  } else {
    return null;
  }

};
Queue.prototype.size = function() {
  return this.back - this.front;
};



