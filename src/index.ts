import {
  cellAt,
  getBottomRightPosition,
  getTopLeftPosition,
  Grid,
  Path,
  Position
} from "./grid";

function findRoute(pos: Position, target: Position, grid: Grid): Path | null {

  //Are we already there?  No steps necessary, if so!
  //This is the "base case" or "terminating case" of our recursion.
  if (pos.x === target.x && pos.y === target.y) {
    return [];
  }


  //Could we find a path if we were one right from here?
  const posRight = { x: pos.x + 1, y: pos.y };
  if (cellAt(posRight, grid) === ".") {
    const pathRight = findRoute(posRight, target, grid);
    if (pathRight) {
      return [["right", posRight], ...pathRight];
    }
  }

  //Trying from the right didn't yield a solution.
  //Could we find a path if we were one *down* from here?
  const posDown = { x: pos.x, y: pos.y + 1 };
  if (cellAt(posDown, grid) === ".") {
    const pathDown = findRoute(posDown, target, grid);
    if (pathDown) {
      return [["down", posDown], ...pathDown];
    }
  }

  //Nothing we tried from this current position has yielded a path.
  //Return null to indicate this.
  return null;
}

/**
Returns a path if possible from the top-left to bottom-right squares of the grid represented by gridStrings, or null if no path is possible.
 */
export function solve(grid: Grid): Path | null {
  const targetPos = getBottomRightPosition(grid);
  const startPos = getTopLeftPosition(grid);
  const answer = findRoute(startPos, targetPos, grid);
  return answer;
}
