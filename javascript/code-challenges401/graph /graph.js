"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  AddNode(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  AddEdge(startVertex, endVertex, weight) {
    if (
      !this._adjacencyList.has(startVertex) ||
      !this._adjacencyList.has(endVertex)
    ) {
      return;
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  GetNodes() {
    return this._adjacencyList.entries();
  }

  GetNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      throw new Error(vertex);
    }
    return this._adjacencyList.get(vertex);
  }

  Size() {
    return this._adjacencyList.size;
  }
}

module.exports = Graph;
