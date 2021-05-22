"use strict";

const Graph = require("./graph.js");

describe("Graph", () => {
  let graph;
  beforeAll(() => {
    graph = new Graph();
    graph.AddNode(6);
    graph.AddNode(7);
  });

  it("AddNode", () => {
    expect(graph.Size()).toBe(2);
  });

  it("AddEdge", () => {
    graph.AddEdge(6, 7, 1);
    expect(graph.GetNeighbors(6)[0].weight).toBe(1);
  });

  it("GetNodes", () => {
    expect(graph.GetNodes()).toBeDefined();
  });

  it("GetNeighbors", () => {
    graph.AddEdge(6, 7, 1);
    expect(graph.GetNeighbors(6)[0].vertex).toBe(7);
    expect(graph.GetNeighbors(6)[0].weight).toBe(1);
  });

  it("Size of the graph", () => {
    graph.AddEdge(6, 7);
    expect(graph.Size()).toEqual(2);
  });
});
