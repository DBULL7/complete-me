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

  findNode(input, currentNode) {
    //may not need to pass in currentNode
    let currentNode = this.root
    let letters = input.split('')

    letters.forEach(letter => {
      if(currentNode.isWord != true) {
        currentNode = currentNode.children[letter]
        console.log(currentNode);
      }
    })
      //change node


    //
    // } else {
    //   // push word to array
    //   console.log('DONE!!!')
    //   return
    // let childKeys = Object.keys(currentNode.children)
    // childKeys.forEach((letter, index) => {
    //   console.log('fired motherfucker')
    //   currentNode.children = childKeys[index]
    //   currentNode = currentNode.children
    //   console.log(currentNode)
    // })
    // return currentNode
    // }
  }

  suggest(){}
}
