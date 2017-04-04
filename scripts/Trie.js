import Node from '../scripts/Node'

let array = []

export default class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(input) {
    let node = new Node()

    let word = input[0]

    if(this.root.children) {
      console.log(this.root.children)
      this.root.children[word] = node
      console.log(this.root.children)
    }
    node.children[input] = node
    console.log(node.children)
    return node
  }

  count(){}

  suggest(){}
}
