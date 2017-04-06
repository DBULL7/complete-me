import Node from '../scripts/Node'
require('locus')


// let dictionary = []

export default class Trie {
  constructor() {
    this.root = new Node
  }

  insert(input) {
    let currentNode = this.root
    let lowerCase   = input.toLowerCase()
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

  findNode(input) {
    let currentNode = this.root
    let letters = input.split('')

    letters.forEach(letter => {
      if(currentNode.isWord != true) { //may be a bad check
        currentNode = currentNode.children[letter]
      }
    })
    return currentNode
  }

  suggest(input, suggestions = []){
    let currentLocation = this.findNode(input)
    let locationKeys = Object.keys(currentLocation)
    let suggestionsArray = suggestions
    console.log(locationKeys.includes('isTrue'))
    if(locationKeys.includes('isWord')) {
      suggestionsArray.push(input)
      console.log('fired');
    }

    Object.keys(currentLocation.children).forEach(key => {
      this.suggest(input + key, suggestionsArray)
    })
    return suggestionsArray
  }
}

    // if(!locationKeys.isWord) {
