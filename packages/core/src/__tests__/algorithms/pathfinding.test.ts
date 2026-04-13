import { describe, expect, test } from 'vitest';
import { buildAdjacency, bfsShortestPath, dijkstraShortestPath, findAllPaths, reachableNodes, betweennessCentrality } from "../../algorithms/pathfinding.js";
import * as fixtures from "../testUtils/fixtures/index.js";

describe("pathfinding module", () => {

    describe("buildAdjacency function", () => {

        test("returns a valid adjacency map structure", () => {

            const result = buildAdjacency(fixtures.adjacency.general.nodes, fixtures.adjacency.general.edges);

            expect(result).toBeInstanceOf(Map);

            for(const [node, edges] of result) {

                expect(node).toEqual(expect.any(String));
                expect(Array.isArray(edges)).toBe(true);

                for(const edge of edges) {
                    
                    expect(typeof edge.nodeId).toBe("string");
                    expect(typeof edge.edgeId).toBe("string");
                    expect(typeof edge.weight).toBe("number");

                    expect(edge.weight).toBeGreaterThanOrEqual(0);
                    expect(edge.weight).toBeLessThanOrEqual(1);
                }
            }

            expect(result.size).toBe(fixtures.adjacency.general.nodes.length);
        });

        test.each([
            ["missing weight", fixtures.adjacency.missingWeight],
            ["zero edges scenario", fixtures.adjacency.noEdges],
            ["unconnected nodes", fixtures.adjacency.unConnectedNode],
            ["directional edges with explicit weight", fixtures.adjacency.directionalWithWeight],
            ["directional edges with default weight", fixtures.adjacency.directionalWithoutWeight],
            ["bidirectional edges with explicit weight", fixtures.adjacency.biDirectionalWithWeight],
            ["bidirectional edges with default weight", fixtures.adjacency.biDirectionalWithoutWeight],
            ["duplicate edges", fixtures.adjacency.duplicateEdges],
        ])("handles %s", (_, fixture) => {

            const result = buildAdjacency(fixture.nodes, fixture.edges);

            expect(result.size).toBe(fixture.adjacencyList.size);

            for(const [node, edges] of fixture.adjacencyList){
                expect(result.has(node)).toBe(true);

                expect(result.get(node)).toHaveLength(edges.length);
                expect(result.get(node)).toEqual(expect.arrayContaining(edges));
            }
        });
    });

    describe("bfsShortestPath function", () => {

        test("returns valid result structure", () => {

            const result = bfsShortestPath(
                fixtures.bfsShortestPath.general.nodes, 
                fixtures.bfsShortestPath.general.edges, 
                fixtures.bfsShortestPath.general.sourceId, 
                fixtures.bfsShortestPath.general.targetId
            );
    
            if(result != null){
                expect(result).toHaveProperty("path");
                expect(result).toHaveProperty("distance");

                expect(Array.isArray(result.path)).toBe(true);
                expect(Number.isInteger(result.distance)).toBe(true);

                for(const node of result.path) {
                    expect(node).toEqual(expect.any(String));
                }
            }
        });

        test.each([
            ["single node graph", fixtures.bfsShortestPath.singleNode],
            ["no edges", fixtures.bfsShortestPath.noEdges],
            ["self loop", fixtures.bfsShortestPath.selfLoop],
            ["simple tree pattern", fixtures.bfsShortestPath.treePattern],
            ["multiple paths", fixtures.bfsShortestPath.multiplePaths],
            ["multiple shortest paths", fixtures.bfsShortestPath.multipleShortestPaths],
            ["cyclic graph", fixtures.bfsShortestPath.cyclicGraph],
            ["no path exists", fixtures.bfsShortestPath.noPath],
            ["disconnected components", fixtures.bfsShortestPath.disconnectedComponents],
            ["missing target", fixtures.bfsShortestPath.missingTarget],
            ["unknown source", fixtures.bfsShortestPath.unknownSource],
            ["bidirectional edges", fixtures.bfsShortestPath.bidirectionalEdges],
            ["duplicate edges", fixtures.bfsShortestPath.duplicateEdges],
            ["wide branching graph", fixtures.bfsShortestPath.wideBranchingGraph],
        ])("handles %s", (_, fixture) => {

            const result = bfsShortestPath(fixture.nodes, fixture.edges, fixture.sourceId, fixture.targetId);

            if(result === null){
                expect(fixture.shortestPaths).toHaveLength(0);
            }
            else{
                expect(fixture.shortestPaths).toContainEqual(result);
            }
        });

    });

    describe("dijkstraShortestPath function", () => {

        test("returns valid result structure", () => {

            const result = dijkstraShortestPath(
                fixtures.dijkstra.general.nodes, 
                fixtures.dijkstra.general.edges, 
                fixtures.dijkstra.general.sourceId, 
                fixtures.dijkstra.general.targetId
            );
    
            if(result != null){
                expect(result).toHaveProperty("path");
                expect(result).toHaveProperty("distance");

                expect(Array.isArray(result.path)).toBe(true);
                expect(result.distance).toEqual(expect.any(Number));

                for(const node of result.path) {
                    expect(node).toEqual(expect.any(String));
                }
            }
        });

        test.each([
            ["single node graph", fixtures.dijkstra.singleNode],
            ["no edges", fixtures.dijkstra.noEdges],
            ["self loop", fixtures.dijkstra.selfLoop],
            ["simple tree pattern", fixtures.dijkstra.treePattern],
            ["multiple paths", fixtures.dijkstra.multiplePaths],
            ["multiple shortest paths", fixtures.dijkstra.multipleShortestPaths],
            ["cyclic graph", fixtures.dijkstra.cyclicGraph],
            ["no path exists", fixtures.dijkstra.noPath],
            ["disconnected components", fixtures.dijkstra.disconnectedComponents],
            ["missing target", fixtures.dijkstra.missingTarget],
            ["unknown source", fixtures.dijkstra.unknownSource],
            ["bidirectional edges", fixtures.dijkstra.bidirectionalEdges],
            ["duplicate edges", fixtures.dijkstra.duplicateEdges],
            ["wide branching graph", fixtures.dijkstra.wideBranchingGraph],
        ])("handles %s", (_, fixture) => {

            const result = dijkstraShortestPath(fixture.nodes, fixture.edges, fixture.sourceId, fixture.targetId);
            
            if(result === null){
                expect(fixture.shortestPaths).toHaveLength(0);
            }
            else{
                const matchingPathResult = fixture.shortestPaths.find(p => JSON.stringify(p.path) === JSON.stringify(result.path));

                expect(matchingPathResult).toBeDefined();
                expect(matchingPathResult?.distance).toBeCloseTo(result.distance, 6);
            }
        });
    });

    describe("findAllPaths function", () => {

        test("returns valid result structure", () => {
            const result = findAllPaths(
                fixtures.allPaths.general.nodes,
                fixtures.allPaths.general.edges,
                fixtures.allPaths.general.sourceId,
                fixtures.allPaths.general.targetId,
                fixtures.allPaths.general.maxPaths,
                fixtures.allPaths.general.maxDepth,
            );
            expect(Array.isArray(result)).toBe(true);

            for(const element of result){
                expect(element).toHaveProperty("path");
                expect(element).toHaveProperty("distance");

                expect(Array.isArray(element.path)).toBe(true);
                expect(Number.isInteger(element.distance)).toBe(true);
                expect(element.distance).toBe(element.path.length - 1);

                for(const node of element.path){
                    expect(node).toEqual(expect.any(String));
                }
            }
        });

        test.each([
            ["single node graph", fixtures.allPaths.singleNode],
            ["no edges", fixtures.allPaths.noEdges],
            ["self loop", fixtures.allPaths.selfLoop],
            ["source equals target", fixtures.allPaths.sourceEqualsTarget],
            ["tree pattern", fixtures.allPaths.treePattern],
            ["multiple paths", fixtures.allPaths.multiplePaths],
            ["no path", fixtures.allPaths.noPath],
            ["disconnected components", fixtures.allPaths.disconnectedComponents],
            ["missing target", fixtures.allPaths.missingTarget],
            ["unknown source", fixtures.allPaths.unknownSource],
            ["bidirectional edges", fixtures.allPaths.bidirectionalEdges],
            ["duplicate edges", fixtures.allPaths.duplicateEdges],
            ["large depths exceeding max depth limit", fixtures.allPaths.largeDepth],
            ["availabe path count exceeding max path limit", fixtures.allPaths.highPathCount],
        ])("handles %s", (_, fixture) => {

            const result = findAllPaths(fixture.nodes, fixture.edges, fixture.sourceId, fixture.targetId, fixture.maxPaths, fixture.maxDepth);
            
            expect(Array.isArray(result)).toBe(true);
            expect(result).toHaveLength(fixture.expectedPaths.length);
            expect(result).toEqual(expect.arrayContaining(fixture.expectedPaths));
        });
    });

    describe("reachableNodes function", () => {

        test("returns valid result structure", () => {
            const result = reachableNodes(
                fixtures.reachableNodes.general.nodes,
                fixtures.reachableNodes.general.edges,
                fixtures.reachableNodes.general.sourceId,
            );

            expect(Array.isArray(result)).toBe(true);
            for(const node of result){
                expect(node).toEqual(expect.any(String));
            }
        });

        test.each([
            ["single node", fixtures.reachableNodes.singleNode],
            ["no edges", fixtures.reachableNodes.noEdges],
            ["self loop", fixtures.reachableNodes.selfLoop],
            ["tree pattern", fixtures.reachableNodes.treePattern],
            ["disconnected components", fixtures.reachableNodes.disconnectedComponents],
            ["unknown source", fixtures.reachableNodes.unknownSource],
            ["bidirectional edges", fixtures.reachableNodes.bidirectionalEdges],
            ["source is absent from nodes but present in edges", fixtures.reachableNodes.absentSourceFromNodes],
            ["duplicate edges", fixtures.reachableNodes.duplicateEdges],
            ["cyclic graph", fixtures.reachableNodes.cyclicGraph],
        ])("handles %s", (_, fixture) => {

            const result = reachableNodes(fixture.nodes, fixture.edges, fixture.sourceId);

            expect(result).not.toContain(fixture.sourceId);
            expect(result).toHaveLength(fixture.expectedNodes.length);
            expect(result).toEqual(expect.arrayContaining(fixture.expectedNodes));
        });
    });
    
    describe("betweennessCentrality function", () => {

        test("returns valid result structure", () => {
            const result = betweennessCentrality(
                fixtures.centrality.general.nodes,
                fixtures.centrality.general.edges,
            );

            expect(result).toBeInstanceOf(Map);

            for(const [node, normalizedScore] of result){
                expect(node).toEqual(expect.any(String));
                expect(normalizedScore).toEqual(expect.any(Number));
            }
        });

        test.each([
            ["single node", fixtures.centrality.singleNode],
            ["no edges", fixtures.centrality.noEdges],
            ["no intermediate nodes", fixtures.centrality.noIntermediateNodes],
            ["self loop", fixtures.centrality.selfLoop],
            ["tree pattern", fixtures.centrality.treePattern],
            ["multiple shortest paths", fixtures.centrality.multipleShortestPaths],
            ["disconnected components", fixtures.centrality.disconnectedComponents],
            ["bidirectional edges", fixtures.centrality.bidirectionalEdges],
            ["duplicate edges", fixtures.centrality.duplicateEdges],
            ["wide branching graph", fixtures.centrality.wideBranchingGraph],
        ])("handles %s", (_, fixture) => {

            const result = betweennessCentrality(fixture.nodes, fixture.edges);

            expect(result.size).toBe(fixture.expectedResult.size);

            for(const [node, normalizedScore] of fixture.expectedResult){
                expect(result.has(node)).toBe(true);
                expect(result.get(node)).toBeCloseTo(normalizedScore, 6);
            }
        });
    });
});