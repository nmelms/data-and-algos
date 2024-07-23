class Graph {
  constructor() {
    this.AdjList = new Map();
  }

  //add verticie

  addVert(v) {
    this.AdjList.set(v, []);
  }

  //add edge

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  //print

  print() {
    let keys = this.AdjList.keys();
    for (let i of keys) {
      console.log(i + "->" + this.AdjList.get(i));
    }
    console.log(keys);
  }
}

let graph = new Graph();
graph.addVert("A");
graph.addVert("B");
graph.addVert("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.print();
