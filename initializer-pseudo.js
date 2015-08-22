var arr = [];

function callit () {
  for(var i = 0; i < 1000000; i++) {
    arr.push(new Queue());
  }
}
callit();

function enqueueAll() {
  for (var i = 0; i < arr.length; i++) {
    arr[i].enqueue(2);
  }
}
enqueueAll();