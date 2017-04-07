export default class Node {
  constructor(letter) {
    this.letter = letter || null
    this.children = {}
    this.selected = 0
  }
}
