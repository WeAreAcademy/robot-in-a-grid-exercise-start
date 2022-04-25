Task:

In index.ts write or complete the function solve(map: string[]): Path | null.

Given an x, y grid of passable and impassable squares,
plan and return a path for a robot that starts at the top left position of that grid
to get to the bottom right.

The robot can only move down or right.

return a Path or return null if there is no possible path.

A Path is a type described in grid.ts as an array of steps represented as
`[Direction, Position]` tuples.

```
type Path = [Direction, Position][];
```

Each of these step tuples represents the direction to step in and the resulting position.

Note that the starting position will never be represented in a Path. The first entry in the Path (if any) will be a step away from that starting position.

The robot should have a slight preference always to move right rather than down
assuming either move can lead to successful routes.

This will make it much easier to state, in tests, the expected route.

## Supporting code

### Modelling a grid, paths, directions, etc.

See `grid.ts` for types representing these things, and some useful helper functions.

### Parsing input:

The function parseGridMap() should be used to get a Grid from the string[] input.

Then you can use the function cellAt(pos, grid) to find what is at a given position in the grid.

### tests

`index.test.ts` already has a couple of tests written that expect paths to be found.

You should at least add a test for an impassable map.
