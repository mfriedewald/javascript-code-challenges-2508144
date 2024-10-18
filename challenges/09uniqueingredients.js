function unique(ingredients) {
  // Write your code here

  // Set wird benutzt, um Duplikate zu eliminieren
  const allItems = new Set();

  // Iteriere durch jedes Array und füge die Elemente zum Set hinzu
  ingredients.forEach(subArray => {
    subArray.forEach(item => {
      allItems.add(item);
    });
  });

  // Konvertiere das Set in ein Array und sortiere es alphabetisch
  return Array.from(allItems).sort();
}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.deepEqual(unique(
      [
        ['Zucker', 'Mehl'],
        ['Zucker', 'Mehl', 'Salat'],
        ['Salat', 'Zucker'],
      ]
    ), ['Mehl', 'Salat', 'Zucker']);

    assert.deepEqual(unique(
      [
        ['Bier', 'Chips'],
        ['Cola', 'Käse', 'Chips'],
        ['Bier', 'Cola'],
      ]
    ), ['Bier', 'Chips', 'Cola', 'Käse']);

    assert.deepEqual(unique(
      [
        ['Brot', 'Wurst'],
        ['Brot', 'Käse', 'Butter'],
        ['Wurst', 'Käse'],
      ]
    ), ['Brot', 'Butter', 'Käse', 'Wurst']);
  });
});
