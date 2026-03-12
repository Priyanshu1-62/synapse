import { describe, expect, test } from 'vitest';
import type { GraphNode, GraphEdge, PathResult } from "../../types/index.ts";
import { buildAdjacency } from "../../algorithms/pathfinding.js";
import * as fixtures from "../testUtils/fixtures/index.js";

describe("pathfinding", () => {

    describe("buildAdjacency function", () => {

        test("Builds Adjacency list for simple graph", () => {

            const result = buildAdjacency(fixtures.nodeSet1, fixtures.edgeSet1);

            expect(result).toEqual(fixtures.adjList1);
        });

    });

    // describe("bfsShortestPath function", () => {

    // });

    // describe("dijkstraShortestPath function", () => {

    // });

    // describe("findAllPaths function", () => {

    // });

    // describe("reachableNodes function", () => {

    // });
    
    // describe("betweennessCentrality function", () => {

    // });

});