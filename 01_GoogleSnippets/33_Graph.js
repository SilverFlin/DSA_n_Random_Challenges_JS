class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2, n) {
    let tempV1 = [];

    for (let i = 0; i < this.adjacencyList[v1].length; i++) {
      if (this.adjacencyList[v1][i] !== v2) {
        tempV1.push(this.adjacencyList[v1][i]);
      }
    }

    this.adjacencyList[v1] = tempV1;
    if (n === 1) return;
    this.removeEdge(v2, v1, 1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length > 0) {
      let vertexConnected = this.adjacencyList[vertex][0];
      this.removeEdge(vertex, vertexConnected);
    }
    delete this.adjacencyList[vertex];
  }

  // Depth-First Traversal
  dfSearch(vertex) {
    let result = [];
    let visitedVertices = {};

    function traversal(v) {
      if (!v) return;
      visitedVertices[v] = true;
      result.push(v);
      console.log(v);
      for (let i = 0; i < this.adjacencyList[v].length; i++) {
        let tempVertex = this.adjacencyList[v][i];
        if (!visitedVertices[tempVertex]) {
          traversal(tempVertex);
        }
      }
    }
    traversal(vertex);
    return result;
  }
}

let graph = new Graph();

// graph.addVertex('Tokyo')
// graph.addVertex('Dallas')
// graph.addVertex('Aspen')
// graph.addVertex('Los Angeles')
// graph.addVertex('Hong Kong')

// graph.addEdge("Tokyo", "Dallas");
// graph.addEdge("Aspen", "Dallas");
// graph.addEdge("Los Angeles", "Dallas");
// graph.addEdge("Hong Kong", "Dallas");

// graph.addEdge("Tokyo", "Hong Kong");
// graph.addEdge("Los Angeles", "Hong Kong");

// graph.removeVertex("Hong Kong")

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.dfSearch("A"));

console.dir(graph);
