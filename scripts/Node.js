export default class Node {
  constructor(letter, children) {
    this.letter = letter || null
    this.children = {}
  }
}
