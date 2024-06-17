class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  insert(data) {
    let current;
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  insertAt(idx, data) {
    if (idx > this.size) {
      console.log("index does not exist");
      return;
    }

    let curIdx = 0;
    let currentNode = this.head;
    let node = new Node(data, null);
    if (idx === 0) {
      this.head = new Node(data, this.head);
      return;
    } else {
      while (curIdx < idx - 1) {
        curIdx++;
        currentNode = currentNode.next;
      }
      let temp = currentNode.next;
      currentNode.next = node;
      node.next = temp;
    }
    this.size++;
  }

  printAt(idx) {
    let curIdx = 0;
    let curNode = this.head;
    while (curIdx < idx) {
      curIdx++;
      curNode = curNode.next;
    }
    console.log(curNode.data, ": at index ", idx);
  }

  removeAt(idx) {
    let curIdx = 0;
    let cur = this.head;
    let prev = this.head;
    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    while (curIdx < idx) {
      prev = cur;
      cur = cur.next;
      curIdx++;
    }
    prev.next = cur.next;
    size--;
  }
}

let list = new LinkedList();
list.insert(100);
list.insert(200);
list.insert(300);
list.insert(400);
list.insertAt(4, 500);
list.removeAt(1);
list.printData();
