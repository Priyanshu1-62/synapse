import { createNode, createEdge } from "../factories/index";
import type { AdjacencyFixtureBody } from "../types";

export const adjacency = {
    general: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", true, 0.5),
            createEdge("e2", "n2", "n3", false, 0.5),
            createEdge("e3", "n1", "n3", false),
            createEdge("e4", "n4", "n3", true),
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
                {nodeId: "n4", edgeId: "e4", weight: 1},
            ]],
            ["n4", [
                {nodeId: "n3", edgeId: "e4", weight: 1},
            ]]
        ])
    },
    missingWeight: {
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
            createNode("n2"),
            createNode("n3"),
        ],
        edges: [],
        adjacencyList: new Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>([
            ["n1", []],
            ["n2", []],
            ["n3", []],
        ])
    },
    directionalWithWeight: {
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
    
            ]]
        ])
    },
    directionalWithoutWeight: {
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
    
            ]]
        ])
    },
    biDirectionalWithWeight: {
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
    biDirectionalWithoutWeight: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", true),
        ],
        adjacencyList: new Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>([
            ["n1", [
                {nodeId: "n2", edgeId: "e1", weight: 1},
            ]],
            ["n2", [
                {nodeId: "n1", edgeId: "e1", weight: 1},
            ]],
        ])
    },
    duplicateEdges: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false),
            createEdge("e1", "n1", "n2", false),
            createEdge("e3", "n3", "n2", false, 0.5),
            createEdge("e4", "n3", "n4", true, 0.5),
            createEdge("e5", "n4", "n1", true),
            createEdge("e5", "n4", "n1", true),
        ],
        adjacencyList: new Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>([
            ["n1", [
                {nodeId: "n2", edgeId: "e1", weight: 1},
                {nodeId: "n2", edgeId: "e1", weight: 1},
                {nodeId: "n4", edgeId: "e5", weight: 1},
                {nodeId: "n4", edgeId: "e5", weight: 1},
            ]],
            ["n2", [
    
            ]],
            ["n3", [
                {nodeId: "n2", edgeId: "e3", weight: 0.5},
                {nodeId: "n4", edgeId: "e4", weight: 0.5},
            ]],
            ["n4", [
                {nodeId: "n1", edgeId: "e5", weight: 1},
                {nodeId: "n1", edgeId: "e5", weight: 1},
                {nodeId: "n3", edgeId: "e4", weight: 0.5},
            ]],
        ])
    }
} satisfies Record<string, AdjacencyFixtureBody>;;