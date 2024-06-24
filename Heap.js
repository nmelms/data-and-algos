class Heap {
  constructor(heap = [], head = null) {
    this.head = head;
    this.heap = heap;
    this.last = heap.length;
  }
  swap = (cur, parent) => {
    let tempVal = this.heap[parent]; //9
    this.heap[parent] = this.heap[cur];
    this.heap[cur] = tempVal;
  };

  insert(val) {
    if (!this.head) {
      this.head = val;
      this.heap.push(this.head);
      this.last = this.heap.length;
    } else {
      // push val and increment last
      this.heap.push(val);
      this.last = this.heap.length;

      let currentIdx = this.last - 1;
      let parentIdx = Math.floor((this.last - 1) / 2);

      while (this.heap[currentIdx] > this.heap[parentIdx]) {
        this.swap(currentIdx, parentIdx);
        // update current and parent
        currentIdx = parentIdx;
        parentIdx = Math.floor((currentIdx - 1) / 2);
      }
    }
  }

  delete() {
    //delete top node
    let deletedNode = this.heap[0];
    let lastNode = this.heap.pop();

    //last node to root node
    this.heap[0] = lastNode;
    let currentIdx = 0;
    //compare children and swap with larger
    let rightIdx = currentIdx * 2 + 2;
    let leftIdx = currentIdx * 2 + 1;

    while (
      this.heap[currentIdx] < this.heap[rightIdx] ||
      this.heap[currentIdx] < this.heap[leftIdx]
    ) {
      if (this.heap[leftIdx] > this.heap[rightIdx]) {
        this.swap(currentIdx, leftIdx);
        currentIdx = leftIdx;
        leftIdx = currentIdx * 2 + 1;
        rightIdx = currentIdx * 2 + 2;
      } else {
        this.swap(currentIdx, rightIdx);
        currentIdx = rightIdx;
        leftIdx = currentIdx * 2 + 1;
        rightIdx = currentIdx * 2 + 2;
      }
    }

    console.log(deletedNode, " was popped");
  }

  print() {
    for (let i = 0; i < this.heap.length; i++) {
      console.log(this.heap[i]);
    }
  }
}

let heap = new Heap();
heap.insert(9);
heap.insert(22);
heap.insert(55);
heap.insert(10);
heap.insert(11);
heap.insert(99);
heap.insert(500);

heap.delete();
heap.delete();
heap.delete();
heap.delete();
heap.delete();
heap.delete();
heap.delete();
