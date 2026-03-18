import { createNode, createEdge } from "../factories/index";
import type { AllPathsFixtureBody } from "../types";

export const allPaths = {
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
            createEdge("e3", "n4", "n3", false, 0.3),
            createEdge("e4", "n2", "n4", false, 0.4),
        ],
        sourceId: "n1",
        targetId: "n3",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: [
            {path: ["n1", "n2", "n3"], distance: 2},
            {path: ["n1", "n2", "n4", "n3"], distance: 3},
        ]
    },
    singleNode: {
        nodes: [
            createNode("n1"),
        ],
        edges: [],
        sourceId: "n1",
        targetId: "n1",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: []
    },
    noEdges: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [],
        sourceId: "n1",
        targetId: "n2",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: []
    },
    selfLoop: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [
            createEdge("e1", "n1", "n1", true, 0.5),
            createEdge("e2", "n1", "n2", false, 0.5),
        ],
        sourceId: "n1",
        targetId: "n2",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: [
            {path: ["n1", "n2"], distance: 1},
        ]
    },
    sourceEqualsTarget: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n1", false, 0.7),
        ],
        sourceId: "n1",
        targetId: "n1",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: []
    },
    treePattern: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
            createNode("n5"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e2", "n2", "n5", false, 0.6),
            createEdge("e4", "n3", "n4", false, 0.7),
        ],
        sourceId: "n1",
        targetId: "n4",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: [
            {path: ["n1", "n2", "n3", "n4"], distance: 3},
        ]
    },
    multiplePaths: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
            createNode("n5"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 1.0),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n4", false, 0.2),
            createEdge("e4", "n4", "n1", false, 0.5),
            createEdge("e5", "n1", "n5", false, 0.6),
            createEdge("e5", "n2", "n5", false, 0.7),
            createEdge("e5", "n3", "n5", false, 0.8),
            createEdge("e5", "n4", "n5", false, 0.9),
        ],
        sourceId: "n1",
        targetId: "n5",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: [
            {path: ["n1", "n5"], distance: 1},
            {path: ["n1", "n2", "n5"], distance: 2},
            {path: ["n1", "n2", "n3", "n5"], distance: 3},
            {path: ["n1", "n2", "n3", "n4", "n5"], distance: 4},
        ]
    },
    noPath: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n1", false, 0.7),
            createEdge("e4", "n4", "n3", false, 0.8),
            createEdge("e5", "n4", "n2", false, 0.9),
        ],
        sourceId: "n1",
        targetId: "n4",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: []
    },
    disconnectedComponents: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n1", false, 0.7),
        ],
        sourceId: "n1",
        targetId: "n4",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: []
    },
    missingTarget: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n1", false, 0.7),
        ],
        sourceId: "n1",
        targetId: "n4",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: []
    },
    unknownSource: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n1", false, 0.7),
        ],
        sourceId: "n4",
        targetId: "n1",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: []
    },
    bidirectionalEdges: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
            createNode("n5"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 1.0),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n4", true, 0.2),
            createEdge("e4", "n4", "n1", true, 0.5),
            createEdge("e5", "n1", "n5", false, 0.6),
            createEdge("e5", "n2", "n5", false, 0.7),
            createEdge("e5", "n3", "n5", false, 0.8),
            createEdge("e5", "n4", "n5", false, 0.9),
        ],
        sourceId: "n1",
        targetId: "n5",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: [
            {path: ["n1", "n5"], distance: 1},
            {path: ["n1", "n2", "n5"], distance: 2},
            {path: ["n1", "n2", "n3", "n5"], distance: 3},
            {path: ["n1", "n2", "n3", "n4", "n5"], distance: 4},
            {path: ["n1", "n4", "n5"], distance: 2},
            {path: ["n1", "n4", "n3", "n5"], distance: 3},
        ]
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
        sourceId: "n1",
        targetId: "n4",
        maxPaths: 10,
        maxDepth: 20,
        expectedPaths: [
            {path: ["n1", "n3", "n4"], distance: 2},
            {path: ["n1", "n3", "n4"], distance: 2},
            {path: ["n1", "n2", "n3", "n4"], distance: 3},
        ]
    },
    largeDepth: {
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
            createEdge("e1", "n1", "n2", false, 1.0),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n4", false, 0.2),
            createEdge("e4", "n2", "n4", false, 0.5),
            createEdge("e5", "n6", "n5", false, 0.6),
            createEdge("e6", "n3", "n5", true, 0.7),
            createEdge("e7", "n1", "n6", false, 0.8),
            createEdge("e8", "n6", "n3", false, 0.9),
            createEdge("e9", "n5", "n7", false, 0.9),
        ],
        sourceId: "n1",
        targetId: "n4",
        maxPaths: 10,
        maxDepth: 3,
        expectedPaths: [
            {path: ["n1", "n2", "n4"], distance: 2},
            {path: ["n1", "n2", "n3", "n4"], distance: 3},
            {path: ["n1", "n6", "n3", "n4"], distance: 3},
        ]
    },
    highPathCount: {
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
            createEdge("e1", "n1", "n2", false, 1.0),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n4", false, 0.2),
            createEdge("e4", "n2", "n4", false, 0.5),
            createEdge("e5", "n6", "n5", false, 0.6),
            createEdge("e6", "n3", "n5", true, 0.7),
            createEdge("e7", "n1", "n6", false, 0.8),
            createEdge("e8", "n6", "n3", false, 0.9),
            createEdge("e9", "n5", "n7", false, 0.9),
            createEdge("e10", "n7", "n4", false, 1.0),
        ],
        sourceId: "n1",
        targetId: "n4",
        maxPaths: 4,
        maxDepth: 20,
        expectedPaths: [
            {path: ["n1", "n2", "n4"], distance: 2},
            {path: ["n1", "n2", "n3", "n4"], distance: 3},
            {path: ["n1", "n6", "n5", "n3", "n4"], distance: 4},
            {path: ["n1", "n2", "n3", "n5", "n7", "n4"], distance: 5},
        ]
    },
} satisfies Record<string, AllPathsFixtureBody>;