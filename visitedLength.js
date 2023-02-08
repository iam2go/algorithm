/**
 *
 * @param {string[]} dirs
 * @returns {number}
 */
function solution(dirs) {
  const DIRECTION = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };

  let now = [0, 0];
  const routes = new Set();

  const checkValidPosition = ([x, y]) => x >= -5 && y >= -5 && x <= 5 && y <= 5;

  for (let dir of dirs) {
    const [mx, my] = DIRECTION[dir];
    const next = [now[0] + mx, now[1] + my];

    if (checkValidPosition(next)) {
      routes.add(`${now[0]}${now[1]}${next[0]}${next[1]}`);
      routes.add(`${next[0]}${next[1]}${now[0]}${now[1]}`);
      now = next;
    }
  }

  return routes.size / 2;
}
