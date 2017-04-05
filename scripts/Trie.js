import Node from '../scripts/Node'
require('locus')


// let dictionary = []

export default class Trie {
  constructor() {
    this.root = new Node
    this.dictionary = [] //could make this an object instead of an array???
  }

  insert(input) {
    let currentNode = this.root
    let lowerCase   = input.toLowerCase()
    if (this.dictionary.includes(lowerCase)) {
      console.log('already in our dictionary')
    } else {
      this.dictionary.push(lowerCase)
    }
    let letters     = lowerCase.split('')

    letters.forEach((letter, index) => {
      if(currentNode.children[letter]) {
        currentNode = currentNode.children[letter]
      } else {
        currentNode.children[letter] = new Node(letter)
        currentNode  = currentNode.children[letter]
      }
      if(letters.length - 1 === index) {
        currentNode.isWord = true
      }
    })
  }

  count(){
    return this.dictionary.length
  }

  findNode() {
    let currentNode = this.root
    // console.log(currentNode.children.isWord)
    if (currentNode.children != {}) {
      //change node
      let childKeys = Object.keys(currentNode.children)
      childKeys.forEach((letter, index) => {
        console.log('fired motherfucker')
        currentNode = childKeys[index]
        console.log(currentNode)
      })

    } else {
      // push word to array
      console.log('DONE!!!')
      return
    }
  }

  suggest(){}
}
