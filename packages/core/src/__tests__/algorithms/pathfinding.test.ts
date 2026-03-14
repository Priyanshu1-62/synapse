import { describe, expect, test } from 'vitest';
import { buildAdjacency, bfsShortestPath, dijkstraShortestPath } from "../../algorithms/pathfinding.js";
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
                    expect(edge).toEqual(
                        expect.objectContaining({
                            nodeId: expect.any(String),
                            edgeId: expect.any(String),
                            weight: expect.any(Number)
                        })
                    );
                    expect(edge.weight).toBeGreaterThanOrEqual(0);
                    expect(edge.weight).toBeLessThanOrEqual(1);
                }
            }

            expect(result.size).toBe(fixtures.adjacency.general.nodes.length);
        });

        test.each([
            ["directional edges", fixtures.adjacency.directional],
            ["bidirectional edges", fixtures.adjacency.biDirectional],
            ["missing weight", fixtures.adjacency.weight],
            ["zero edges scenario", fixtures.adjacency.noEdges],
            ["unconnected nodes", fixtures.adjacency.unConnectedNode],
            ["unknown source nodes", fixtures.adjacency.unknownSource],
            ["unknown target nodes", fixtures.adjacency.unknownTarget],
            ["duplicate edges", fixtures.adjacency.duplicateEdge],
        ])("handles %s", (_, fixture) => {

            const result = buildAdjacency(fixture.nodes, fixture.edges);
            expect(result).toEqual(fixture.adjacencyList);
        });
    });

    describe("bfsShortestPath function", () => {

        test("returns valid result structure", () => {

            const result = bfsShortestPath(
                fixtures.graphShortestPath.general.nodes, 
                fixtures.graphShortestPath.general.edges, 
                fixtures.graphShortestPath.general.sourceId, 
                fixtures.graphShortestPath.general.targetId
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
            ["single node graph", fixtures.graphShortestPath.singleNode],
        ])("handles %s", (_, fixture) => {

            const result = bfsShortestPath(fixture.nodes, fixture.edges, fixture.sourceId, fixture.targetId);
            expect(result).toEqual(fixture.expectedPath);
        });

    });

    describe("dijkstraShortestPath function", () => {

        test("returns valid result structure", () => {

            const result = bfsShortestPath(
                fixtures.graphShortestPath.general.nodes, 
                fixtures.graphShortestPath.general.edges, 
                fixtures.graphShortestPath.general.sourceId, 
                fixtures.graphShortestPath.general.targetId
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
            ["single node graph", fixtures.graphShortestPath.singleNode],
        ])("handles %s", (_, fixture) => {

            const result = dijkstraShortestPath(fixture.nodes, fixture.edges, fixture.sourceId, fixture.targetId);
            expect(result).toEqual(fixture.expectedPath);
        });
    });

    // describe("findAllPaths function", () => {

    // });

    // describe("reachableNodes function", () => {

    // });
    
    // describe("betweennessCentrality function", () => {

    // });

});