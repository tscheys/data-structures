var BinarySearchTree = function(value){
  var tree = Object.create(bstMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value; 
  return tree;
};

var bstMethods = {};

bstMethods.insert = function(value) {

  var helper = function(node) {
    if(value < node.value) {
      if(node.left === null) {
        node.left = BinarySearchTree(value);
      } else {
        helper(node.left)
      }
    } else {
      if(node.right === null) {
        node.right = BinarySearchTree(value);
      } else {
        helper(node.right);
      }
    }
  }
  helper(this);

};

bstMethods.contains = function(value) {
  if(this.value === value) {
    return true;
  }
  var helper = function(node) {

    if(value < node.value && node.left !== null) {
      if(node.left.value === value) {
        return true;
      } else if(node.left.value !== null) {
        return helper(node.left);
      }
      return false;

    } else if (node.right !== null) {
      if(node.right.value === value) {
        return true;
      } else if (node.right.value !== null) {
        return helper(node.right);
      }
      return false;
    }
    return false;

  };
  return helper(this);

};

bstMethods.depthFirstLog = function(func) {
  var helper = function (node) {
    func(node.value);
    if(node.left !== null) {
      helper(node.left);
    }
    if(node.right !== null) {
      helper(node.right);
    }
  }
  helper(this);

  // this is taking all of the values and putting them into a flat array
  // left takes priority over right.  add the stuff on the left

  // var array = [];
  // var func = function(value){ array.push(value); };



};


/*
 * Complexity: What is the time complexity of the above functions?
 */
