import { parseGridMap, Path } from "./grid";
import { solve } from "./index";
import { showPathOnMap } from "./pathPrinter";

test("solve a 1x1 map - no steps", async function () {
  const map: string[] = [
    "_",
  ];

  const expectedPathOutput: Path = [];
  expect(solve(map)).toStrictEqual(expectedPathOutput);
});

test("solve a non-trivial 5x5 map", async function () {
  const map1: string[] = [
    "___x_",
    "__xxx",
    "x_x__",
    "_____",
    "xxx__"
  ];

  const expectedPathOutput: Path = [
    ['right', { x: 1, y: 0 }],
    ['down', { x: 1, y: 1 }],
    ['down', { x: 1, y: 2 }],
    ['down', { x: 1, y: 3 }],
    ['right', { x: 2, y: 3 }],
    ['right', { x: 3, y: 3 }],
    ['right', { x: 4, y: 3 }],
    ['down', { x: 4, y: 4 }]
  ];
  expect(solve(map1)).toStrictEqual(expectedPathOutput);

  //todo: don't print stuff out to console log for visual inspection, 
  // rather inspect it programmatically
  const solution = solve(map1);
  if (solution) {
    console.log(showPathOnMap(solution, parseGridMap(map1)));
  }
});

test("solve a completely empty 4x4 map", async function () {
  const map: string[] = [
    "____",
    "____",
    "____",
    "____",
  ];

  const expectedPathOutput: Path = [
    ['right', { x: 1, y: 0 }],
    ['right', { x: 2, y: 0 }],
    ['right', { x: 3, y: 0 }],
    ['down', { x: 3, y: 1 }],
    ['down', { x: 3, y: 2 }],
    ['down', { x: 3, y: 3 }]
  ];
  expect(solve(map)).toStrictEqual(expectedPathOutput);
});



test("shows collisions in a bad path", () => {
  const map1: string[] = [
    "__x__",
    "____x",
    "x_xxx",
    "_____",
    "xxx__"
  ];


  const badPath: Path = [
    ['right', { x: 1, y: 0 }],
    ['right', { x: 2, y: 0 }],
    ['right', { x: 3, y: 0 }],
    ['down', { x: 3, y: 1 }],
    ['right', { x: 3, y: 2 }],
    ['right', { x: 3, y: 3 }],
    ['right', { x: 4, y: 3 }],
    ['down', { x: 4, y: 4 }]
  ];


  //todo: don't print stuff out to console log for visual inspection, 
  // rather inspect it programmatically
  console.log(showPathOnMap(badPath, parseGridMap(map1)))

})