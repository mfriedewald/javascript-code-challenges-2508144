function capitalize(string) {
  // Write your code here
  return string
    .split(' ')                   // String in Wörter aufteilen
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    )                             // Erstes Zeichen jedes Wortes groß
    .join(' ');                   // Die Wörter wieder zu einem String zusammenfügen
}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(capitalize('Hallo welt.'), 'Hallo Welt.');
    assert.equal(capitalize('Guten tag, welt.'), 'Guten Tag, Welt.');
    assert.equal(capitalize('Das ist eine überschrift'), 'Das Ist Eine Überschrift');
    assert.equal(capitalize('JavaScript macht Spaß!'), 'JavaScript Macht Spaß!');
  });
});
