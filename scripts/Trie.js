import Node from '../scripts/Node'
require('locus')

export default class Trie {
  constructor() {
    this.root = new Node
  }

  insert(input) {
    let currentNode = this.root
    let lowerCase = input.toLowerCase()
    let letters = lowerCase.split('')

    letters.forEach((letter, index) => {
      if(currentNode.children[letter]) {
        currentNode = currentNode.children[letter]
        console.log('first fired')
      } else {
        currentNode.children[letter] = new Node(letter)
        let previous = currentNode
        currentNode = currentNode.children[letter]
      }

      if(letters.length - 1 === index) {
        currentNode.isWord = true
      }
    })
  }

  count(){}

  suggest(){}
}
