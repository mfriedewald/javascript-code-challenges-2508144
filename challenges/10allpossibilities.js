function isAllPossibilities(array) {
  // Write your code here
  const n = array.length;

  // Das Array sollte genau n Elemente von 0 bis n-1 enthalten
  if (n === 0) return false;

  // Erstelle ein Array von 0 bis n-1 und vergleiche es mit dem sortierten Array
  for (let i = 0; i < n; i++) {
    if (!array.includes(i)) {
      return false;
    }
  }

  return true;
}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isAllPossibilities([0, 1, 2, 3, 4, 5]), true);
    assert.equal(isAllPossibilities([1, 2, 3, 4]), false);
    assert.equal(isAllPossibilities([0, 1, 3, 4]), false);
    assert.equal(isAllPossibilities([0, 1, 3, 2]), true);
  });
});