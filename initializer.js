var arr = [];

function callit () {
  for(var i = 0; i < 100; i++) {
    arr.push(Queue());
  }
}
callit();

function enqueueAll() {
  for (var i = 0; i < arr.length; i++) {
    arr[i].enqueue(2);
  }
}
enqueueAll();