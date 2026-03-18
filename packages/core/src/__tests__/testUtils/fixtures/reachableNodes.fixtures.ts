import { createNode, createEdge } from "../factories/index";
import { ReachableNodesFixtureBody } from "../types";

export const reachableNodes = {
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
        ],
        sourceId: "n1",
        expectedNodes: ["n2", "n3"]
    },
    singleNode: {
        nodes: [
            createNode("n1"),
        ],
        edges: [],
        sourceId: "n1",
        expectedNodes: []
    },
    noEdges: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
        ],
        edges: [],
        sourceId: "n1",
        expectedNodes: []
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
        expectedNodes: ["n2"]
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
            createEdge("e6", "n5", "n7", false, 0.7),
        ],
        sourceId: "n1",
        expectedNodes: ["n2", "n3", "n4", "n5", "n6", "n7"]
    },
    disconnectedComponents: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
            createNode("n4"),
            createNode("n5"),
            createNode("n6"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n1", false, 0.7),
            createEdge("e4", "n4", "n3", false, 0.8),
            createEdge("e5", "n5", "n6", false, 0.9),
        ],
        sourceId: "n1",
        expectedNodes: ["n2", "n3"]
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
        expectedNodes: []
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
            createEdge("e4", "n4", "n3", true, 0.5),
            createEdge("e5", "n5", "n4", true, 0.9),
        ],
        sourceId: "n1",
        expectedNodes: ["n2", "n3", "n4", "n5"]
    },
    absentSourceFromNodes: {
        nodes: [
            createNode("n1"),
            createNode("n2"),
            createNode("n3"),
        ],
        edges: [
            createEdge("e1", "n1", "n2", false, 0.5),
            createEdge("e2", "n2", "n3", false, 0.6),
            createEdge("e3", "n3", "n1", false, 0.7),
            createEdge("e4", "n3", "n4", true, 0.7),
        ],
        sourceId: "n4",
        expectedNodes: []
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
        expectedNodes: ["n2", "n3", "n4"]
    },
    cyclicGraph: {
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
            createEdge("e1", "n1", "n2", true, 1.0),
            createEdge("e2", "n3", "n2", true, 0.6),
            createEdge("e3", "n3", "n4", true, 0.2),
            createEdge("e4", "n2", "n4", false, 0.5),
            createEdge("e5", "n6", "n5", false, 0.6),
            createEdge("e6", "n3", "n5", true, 0.7),
            createEdge("e7", "n1", "n6", false, 0.8),
            createEdge("e8", "n6", "n3", false, 0.9),
            createEdge("e9", "n5", "n7", false, 0.9),
            createEdge("e10", "n7", "n4", false, 1.0),
        ],
        sourceId: "n1",
        expectedNodes: ["n2", "n3", "n4", "n5", "n6", "n7"]
    },
} satisfies Record<string, ReachableNodesFixtureBody>;