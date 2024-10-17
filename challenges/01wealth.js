function redistributeWealth(wealth) {
  // Write your code here
  if (wealth.length === 0) return []; // Falls das Array leer ist, gib ein leeres Array zurück

  // Summe aller Elemente im Array berechnen
  const sum = wealth.reduce((acc, num) => acc + num, 0);

  // Durchschnitt berechnen
  const average = sum / wealth.length;

  // Ein Array mit der gleichen Anzahl an Elementen und dem Durchschnittswert zurückgeben
  return Array(wealth.length).fill(average);
}


const { assert } = require('chai');
describe("Tests", function () {
  it("tests", () => {
    assert.deepEqual(redistributeWealth([3, 3, 3, 3]), [3, 3, 3, 3]);
    assert.deepEqual(redistributeWealth([1, 2, 3, 4]), [2.5, 2.5, 2.5, 2.5]);
    assert.deepEqual(redistributeWealth([1, 1, 5, 4, 9]), [4, 4, 4, 4, 4]);
    assert.deepEqual(redistributeWealth([3, 4, 5, 3, 7, 2, 3, 12, 15]), [6, 6, 6, 6, 6, 6, 6, 6, 6]);
  });
});
