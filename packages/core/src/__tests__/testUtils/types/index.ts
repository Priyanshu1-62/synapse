import type { GraphEdge, GraphNode, PathResult } from "../../../types/index";

export type AdjacencyMap = Map<string, Array<{ nodeId: string; edgeId: string; weight: number }>>;

export interface AdjacencyFixtureBody {
    nodes: GraphNode[];
    edges: GraphEdge[];
    adjacencyList: AdjacencyMap;
}

export interface GraphShortestPathFixtureBody {
    nodes: GraphNode[];
    edges: GraphEdge[];
    sourceId: string;
    targetId: string;
    shortestPaths: PathResult[];
}

export interface AllPathsFixtureBody {
    nodes: GraphNode[];
    edges: GraphEdge[];
    sourceId: string;
    targetId: string;
    maxPaths: number;
    maxDepth: number;
    expectedPaths: PathResult[];
}

export interface ReachableNodesFixtureBody {
    nodes: GraphNode[];
    edges:GraphEdge[];
    sourceId: string;
    expectedNodes: string[];
}

export interface CentralityFixtureBody {
    nodes: GraphNode[];
    edges: GraphEdge[];
    expectedResult: Map<string, number>;
}