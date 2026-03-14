import { GraphEdge, GraphNode, PathResult } from "../../../types/index";

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
    expectedPath: PathResult;
}