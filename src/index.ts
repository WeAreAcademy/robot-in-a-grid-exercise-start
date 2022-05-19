import {
  cellAt,
  getBottomRightPosition,
  getTopLeftPosition,
  Grid,
  Path,
  Position,
} from "./grid";

function areSamePosition(a: Position, b: Position): boolean {
  return a.x === b.x && a.y === b.y;
}

/**
Returns a path if possible from the top-left to bottom-right squares of the given grid, or null if no path is possible.
 */
export function solve(grid: Grid): Path | null {
  const targetPos = getBottomRightPosition(grid);
  const startPos = getTopLeftPosition(grid);

  //This stack will temporarily store positions and the path to get there, for cells we haven't fully processed yet.
  const stack: [Position, Path][] = [[startPos, []]];

  //We'll return directly out of the loop if we arrive at dest
  while (stack.length > 0) {
    const [pos, path] = stack.pop()!;
    if (areSamePosition(pos, targetPos)) {
      return path;
    } else {
      //stack investigations for down and to the right, if they're passable.
      const posDown = { x: pos.x, y: pos.y + 1 };
      if (cellAt(posDown, grid) === ".") {
        stack.push([posDown, [...path, ["down", posDown]]]);
      }
      const posRight = { x: pos.x + 1, y: pos.y };
      if (cellAt(posRight, grid) === ".") {
        stack.push([posRight, [...path, ["right", posRight]]]);
      }
    }
  }
  return null;
}
