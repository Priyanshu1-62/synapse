import { createNode, createEdge } from "../factories/index";
import type { GraphShortestPathFixtureBody } from "../types";

export const dijkstra = {
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
        sourceId: "n1",
        targetId: "n3",
        shortestPaths: [
            {path: ["n1", "n2", "n3"], distance: 0.3}
        ]
    },
    singleNode: {
        nodes: [
            createNode("n1"),
        ],
        edges: [],
        sourceId: "n1",
        targetId: "n1",
        shortestPaths: [
            {path: ["n1"], distance: 0}
        ]
    },
    noEdges: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [],
        sourceId: "n1",
        targetId: "n2",
        shortestPaths: []
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
        shortestPaths: [
            {path: ["n1", "n2"], distance: 0.5}
        ]
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
        shortestPaths: [
            {path: ["n1", "n2", "n3", "n4"], distance: 1.8}
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
            createEdge("e4", "n1", "n5", false, 0.5),
            createEdge("e5", "n5", "n4", false, 0.9),
            createEdge("e6", "n5", "n2", false, 0.0),
        ],
        sourceId: "n1",
        targetId: "n4",
        shortestPaths: [
            {path: ["n1", "n5", "n2", "n3", "n4"], distance: 1.3}
        ]
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
            createEdge("e1", "n1", "n2", false, 1.0),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n4", false, 0.2),
            createEdge("e4", "n1", "n5", false, 0.5),
            createEdge("e5", "n5", "n4", false, 0.8),
            createEdge("e6", "n5", "n2", false, 0.0),
        ],
        sourceId: "n1",
        targetId: "n4",
        shortestPaths: [
            {path: ["n1", "n5", "n4"], distance: 1.3},
            {path: ["n1", "n5", "n2", "n3", "n4"], distance: 1.3}
        ]
    },
    cyclicGraph: {
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
            createEdge("e4", "n3", "n4", false, 0.8),
            createEdge("e5", "n4", "n2", false, 0.9),
        ],
        sourceId: "n1",
        targetId: "n4",
        shortestPaths: [
            {path: ["n1", "n2", "n3", "n4"], distance: 1.9}
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
        shortestPaths: []
    },
    disconnectedComponents: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
        ],
        sourceId: "n1",
        targetId: "n3",
        shortestPaths: []
    },
    missingTarget: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n1", "n3", false, 0.5),
        ],
        sourceId: "n1",
        targetId: "n4",
        shortestPaths: []
    },
    unknownSource: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n1", "n3", false, 0.5),
        ],
        sourceId: "n4",
        targetId: "n1",
        shortestPaths: []
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
        sourceId: "n1",
        targetId: "n4",
        shortestPaths: [
            {path: ["n1", "n3", "n4"], distance: 1.5}
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
        shortestPaths: [
            {path: ["n1", "n3", "n4"], distance: 1.5}
        ]
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
            createNode("n9"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", true, 0.5),
            createEdge("e2", "n1", "n3", true, 0.6),
            createEdge("e3", "n1", "n4", true, 0.7),
            createEdge("e4", "n1", "n5", true, 0.9),
            createEdge("e5", "n1", "n6", true, 0.8),
            createEdge("e6", "n1", "n7", true, 1.0),
            createEdge("e7", "n5", "n8", true, 0.1),
            createEdge("e8", "n5", "n9", true, 0.2),

        ],
        sourceId: "n1",
        targetId: "n9",
        shortestPaths: [
            {path: ["n1", "n5", "n9"], distance: 1.1}
        ]
    }
} satisfies Record<string, GraphShortestPathFixtureBody>;