import Node from '../scripts/Node'

export default class Trie {
  constructor(letter) {
    this.head = new Node()
  }

  insert(input) {
    let split = input.split('')

    if (this.head.children == {}) {
      this.head.children.push(split[0])
    }
    return split
  }
}
