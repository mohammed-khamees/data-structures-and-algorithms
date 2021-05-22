## Graphs

A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.

## Challenge

Implement your own Graph. The graph should be represented as an adjacency list

## Approach & Efficiency

used a list to hold the visited nodes instead of a queue
Big O of time --> O(n^2) Big O of space --> O(n)

## API

`AddNode()`: Adds a new node to the graph, Takes in the value of that node and Returns the added node

`AddEdge()`: Adds a new edge between two nodes in the graph Include the ability to have a “weight” Takes in the two nodes to be connected by the edge Both nodes should already be in the Graph

`GetNodes()`: Returns all of the nodes in the graph as a collection (set, list, or similar)

`GetNeighbors()`: Returns a collection of edges connected to the given node Takes in a given node Include the weight of the connection in the returned collection

`Size()`: Returns the total number of nodes in the graph
