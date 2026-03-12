import { GraphEdge, GraphNode } from "../../../types/index";
import { createNode, createEdge } from "../factories/index";

type AdjacencyMap = Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>;

export const nodeSet0: GraphNode[] = [
    createNode("1")
];

export const nodeSet1: GraphNode[] = [
    createNode("n1"),
    createNode("n2"),
    createNode("n3"),
];

export const edgeSet1: GraphEdge[] = [
    createEdge("e1", "n1", "n2", 0.5, true),
    createEdge("e2", "n2", "n3", 0.5, false),
    createEdge("e3", "n1", "n3", 0.7, false),
];

export const adjList1: AdjacencyMap = new Map();
adjList1.set("n1", [
    {nodeId: "n2", edgeId: "e1", weight: 0.5},
    {nodeId: "n3", edgeId: "e3", weight: 0.7},
]);
adjList1.set("n2", [
    {nodeId: "n1", edgeId: "e1", weight: 0.5},
    {nodeId: "n3", edgeId: "e2", weight: 0.5},
]);
adjList1.set("n3", []);
