var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){ // O(1)
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    this._storage.set(i, []);
  }
  var bucket = this._storage.get(i); // returns an array;
  var wasFound = false;
  for (var j = 0; j < bucket.length; j += 2 ) {
    if (k === bucket[j]) {
      wasFound = true;
      bucket[j + 1] = v; 
    }
  }
  if (!wasFound) {
    bucket.push(k, v);
  }
  
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){ // O(1)
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j += 2) {
    if (k === bucket[j]) {
      return bucket[j + 1];
    } 
  }
  return "null";
};

HashTable.prototype.remove = function(k){ // O(1)
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j += 2) {
    if (k === bucket[j]) {
      bucket[j + 1] = null;
    }
  };
};

/*
 * Complexity: What is the time complexity of the above functions?
 */