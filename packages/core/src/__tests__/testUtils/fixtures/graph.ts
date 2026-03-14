import { createNode, createEdge } from "../factories/index";
import type { AdjacencyFixtureBody, GraphShortestPathFixtureBody } from "../types";

export const adjacency: Record<string, AdjacencyFixtureBody> = {
    general: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", true, 0.5),
            createEdge("e2", "n2", "n3", false, 0.5),
            createEdge("e3", "n1", "n3", false, 0.5),
        ],
        adjacencyList: new Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>([
            ["n1", [
                {nodeId: "n2", edgeId: "e1", weight: 0.5},
                {nodeId: "n3", edgeId: "e3", weight: 1},
            ]],
            ["n2", [
                {nodeId: "n1", edgeId: "e1", weight: 0.5},
                {nodeId: "n3", edgeId: "e2", weight: 0.5},
            ]],
            ["n3", [
    
            ]]
        ])
    },
    directional: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
        ],
        adjacencyList: new Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>([
            ["n1", [
                {nodeId: "n2", edgeId: "e1", weight: 0.5},
            ]],
            ["n2", [
    
            ]],
        ])
    },
    biDirectional: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", true, 0.5),
        ],
        adjacencyList: new Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>([
            ["n1", [
                {nodeId: "n2", edgeId: "e1", weight: 0.5},
            ]],
            ["n2", [
                {nodeId: "n1", edgeId: "e1", weight: 0.5},
            ]],
        ])
    },
    weight: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false),
        ],
        adjacencyList: new Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>([
            ["n1", [
                {nodeId: "n2", edgeId: "e1", weight: 1},
            ]],
            ["n2", [
    
            ]],
        ])
    },
    noEdges: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [],
        adjacencyList: new Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>([
            ["n1", []],
            ["n2", []],
        ])
    },
    unConnectedNode: {
        nodes: [
            createNode("n1"),
        ],
        edges: [],
        adjacencyList: new Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>([
            ["n1", []]
        ])
    },
    unknownTarget: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [
            createEdge("e1", "n1", "n3", false, 0.5),
        ],
        adjacencyList: new Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>([
            ["n1", [
                {nodeId: "n3", edgeId: "e1", weight: 0.5},
            ]],
            ["n2", []],
        ])
    },
    unknownSource: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [
            createEdge("e1", "n3", "n1", false, 0.5),
        ],
        adjacencyList: new Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>([
            ["n1", []],
            ["n2", []],
        ])
    },
    duplicateEdge: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false),
            createEdge("e1", "n1", "n2", false),
        ],
        adjacencyList: new Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>([
            ["n1", [
                {nodeId: "n2", edgeId: "e1", weight: 1},
                {nodeId: "n2", edgeId: "e1", weight: 1},
            ]],
            ["n2", [
    
            ]],
        ])
    }
};

export const graphShortestPath: Record<string, GraphShortestPathFixtureBody> = {
    general: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false),
            createEdge("e2", "n2", "n3", false),
            createEdge("e3", "n3", "n1", false),
            createEdge("e4", "n3", "n4", false),
        ],
        sourceId: "n1",
        targetId: "n3",
        expectedPath: {
            path: ["n1", "n2", "n3"],
            distance: 2
        }
    },
    singleNode: {
        nodes: [
            createNode("n1"),
        ],
        edges: [],
        sourceId: "n1",
        targetId: "n1",
        expectedPath: {
            path: ["n1"],
            distance: 0
        }
    },
};