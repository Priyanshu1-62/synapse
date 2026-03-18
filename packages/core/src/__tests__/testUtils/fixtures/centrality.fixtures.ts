import { createNode, createEdge } from "../factories/index";
import type { CentralityFixtureBody } from "../types";

export const centrality = {
    general: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.1),
            createEdge("e2", "n2", "n3", true, 0.2),
            createEdge("e3", "n3", "n1", false, 0.3),
            createEdge("e4", "n3", "n4", false, 0.4),
        ],
        expectedResult: new Map<string, number>([
            ["n1", 0],
            ["n2", 0.667],
            ["n3", 0.667],
            ["n4", 0],
        ])
    },
    singleNode: {
        nodes: [
            createNode("n1"),
        ],
        edges: [],
        expectedResult: new Map<string, number>([
            ["n1", 0]
        ])
    },
    noEdges: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [],
        expectedResult: new Map<string, number>([
            ["n1", 0],
            ["n2", 0],
        ])
    },
    noIntermediateNodes: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [
            createEdge("e2", "n1", "n2", false, 0.5),
        ],
        expectedResult: new Map<string, number>([
            ["n1", 0],
            ["n2", 0],
        ])
    },
    selfLoop: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [
            createEdge("e1", "n1", "n1", false, 0.5),
            createEdge("e2", "n1", "n2", false, 0.5),
        ],
        expectedResult: new Map<string, number>([
            ["n1", 0],
            ["n2", 0],
        ])
    },
    treePattern: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
            createNode("n5"),
            createNode("n6"),
            createNode("n7"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e2", "n2", "n5", false, 0.6),
            createEdge("e4", "n3", "n4", false, 0.7),
            createEdge("e5", "n5", "n6", false, 0.7),
            createEdge("e6", "n6", "n7", false, 0.7),
        ],
        expectedResult: new Map<string, number>([
            ["n1", 0],
            ["n2", 1/3],
            ["n3", 2/15],
            ["n4", 0],
            ["n5", 4/15],
            ["n6", 1/5],
            ["n7", 0],
        ])
    },
    multipleShortestPaths: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
            createNode("n5"),
        ],
        edges: [
            createEdge("e1", "n2", "n1", false, 1.0),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n4", false, 0.2),
            createEdge("e4", "n1", "n5", false, 0.5),
            createEdge("e5", "n5", "n4", false, 0.8),
            createEdge("e6", "n5", "n2", false, 0.0),
            createEdge("e7", "n1", "n3", false, 0.0),
        ],
        expectedResult: new Map<string, number>([
            ["n1", 1/6],
            ["n2", 0],
            ["n3", 1/6],
            ["n4", 0],
            ["n5", 1/3],
        ])
    },
    disconnectedComponents: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
            createNode("n5"),
            createNode("n6"),
            createNode("n7"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n2", "n3", false, 0.5),
            createEdge("e3", "n3", "n1", false, 0.5),
            createEdge("e4", "n4", "n3", false, 0.5),
            createEdge("e5", "n5", "n6", false, 0.5),
            createEdge("e6", "n6", "n7", false, 0.5),
        ],
        expectedResult: new Map<string, number>([
            ["n1", 0],
            ["n2", 1/15],
            ["n3", 0],
            ["n4", 0],
            ["n5", 0],
            ["n6", 1/15],
            ["n7", 0],
        ])
    },
    bidirectionalEdges: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n1", true, 0.7),
            createEdge("e4", "n3", "n4", false, 0.8),
        ],
        expectedResult: new Map<string, number>([
            ["n1", 0],
            ["n2", 0],
            ["n3", 2/3],
            ["n4", 0],
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
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n1", true, 0.7),
            createEdge("e3", "n3", "n1", true, 0.7),
            createEdge("e4", "n3", "n4", false, 0.8),
        ],
        expectedResult: new Map<string, number>([
            ["n1", 0],
            ["n2", 0],
            ["n3", 2/3],
            ["n4", 0],
        ])
    },
    wideBranchingGraph: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
            createNode("n5"),
            createNode("n6"),
            createNode("n7"),
            createNode("n8"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", true, 0.5),
            createEdge("e2", "n1", "n3", true, 0.6),
            createEdge("e3", "n1", "n4", true, 0.7),
            createEdge("e4", "n1", "n5", true, 0.8),
            createEdge("e5", "n1", "n6", true, 0.8),
            createEdge("e6", "n1", "n7", true, 0.8),
            createEdge("e7", "n2", "n8", true, 0.8),
            createEdge("e8", "n3", "n8", true, 0.8),
            createEdge("e9", "n4", "n8", true, 0.8),
            createEdge("e10", "n5", "n8", true, 0.8),
            createEdge("e11", "n6", "n8", true, 0.8),
            createEdge("e12", "n7", "n8", true, 0.8),

        ],
        expectedResult: new Map<string, number>([
            ["n1", 15/21],
            ["n2", 1/21],
            ["n3", 0],
            ["n4", 0],
            ["n5", 0],
            ["n6", 0],
            ["n7", 0],
            ["n8", 0],
        ])
    }
} satisfies Record<string, CentralityFixtureBody>;