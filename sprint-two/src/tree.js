var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  // newTree.children = []; 
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};


  // your code here
  // newTree.children = null;  // fix me


var treeMethods = {};

treeMethods.addChild = function(value){
  // when we call addChild on tree1, it should push the new tree into to tree1.children
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){

  var searchNodes = function(node) {
    if(node.value === target) {
      return true;
    }
    var found = false;
    _.each(node.children, function(childNode) {
      found = found || searchNodes(childNode);
    });
    return found;
  };
  return searchNodes(this);

};

treeMethods.getValue = function() {
  return this.value;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
