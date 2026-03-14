import type { GraphNode, GraphEdge } from "../../../types/index.ts";

export function createNode(nodeId: string): GraphNode {
    const node: GraphNode = {
        id: nodeId,
        type: "resource",
        label: nodeId,
        position: {x: 0, y: 0},
        createdAt: 0,
        updatedAt: 0
    };
    return node;
}

export function createEdge(edgeId: string, source: string, target: string, bidirectional: boolean, weight: number = 1): GraphEdge {
    const edge: GraphEdge = {
        id: edgeId,
        type: "custom", 
        source,
        target,
        weight,
        bidirectional
    };
    return edge;
}
