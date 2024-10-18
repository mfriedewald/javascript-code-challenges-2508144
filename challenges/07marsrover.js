function rover(way) {
  // Write your code here

  let direction = 0; // 0 up, 1 right, 2 down, 3 left
  let position = { x: 0, y: 0 };

  for (let i = 0; i < way.length; i++) {
    if (way[i] === 'r') {
      direction = (direction + 1) % 4
    }
    if (way[i] === 'l') {
      direction = (direction + 3) % 4
    }

    if (way[i] === 'f') {
      if (direction == 0) {
        position.y++;
      }
      if (direction == 1) {
        position.x++;
      }
      if (direction == 2) {
        position.y--;
      }
      if (direction == 3) {
        position.x--;
      }
    }
  }
  return position;
}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.deepEqual(rover('rffffr'), { x: 4, y: 0 });
    assert.deepEqual(rover('rfrfrfrfr'), { x: 0, y: 0 });
    assert.deepEqual(rover('ffrfrflflfrf'), { x: 3, y: 2 });
    assert.deepEqual(rover('rfffrfffrf'), { x: 2, y: -3 });
  });
});
