import Node from '../scripts/Node'
require('locus')


export default class Trie {
  constructor() {
    this.root = new Node
    this.dictionary = []
    this.amount = 0
  }


  insert(input) {
    let currentNode = this.root
    let lowerCase   = input.toLowerCase()
    let letters     = lowerCase.split('')

    this.dictionary.push(lowerCase)
    this.amount++

    letters.forEach((letter, index) => {
      if (currentNode.children[letter]) {
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
    return this.amount
  }


  findNode(input) {
    let currentNode = this.root
    let letters = input.split('')

    letters.forEach(letter => {
      if(currentNode.children[letter]) {
        currentNode = currentNode.children[letter]
      }
    })
    return currentNode
  }


  suggest(input, suggestions = []){
    let currentLocation = this.findNode(input)
    let locationKeys = Object.keys(currentLocation)
    let suggestionsArray = suggestions

    if(locationKeys.includes('isWord')) {
      suggestionsArray.push({input: input, selected: currentLocation.selected})
    }


    Object.keys(currentLocation.children).forEach(key => {
      this.suggest(input + key, suggestionsArray)
    })

    return this.sortSuggestions(suggestionsArray)
  }

  sortSuggestions(suggestions) {
    suggestions.sort((a, b) => {
      return b.selected - a.selected
    })

    let mapped = suggestions.map(obj => {
      return obj.input
    })
    return mapped
  }



  populate (dictionary) {
    dictionary.forEach(word => {
      this.insert(word)
    })
  }

  select(input) {
    let currentNode = this.findNode(input)

    currentNode.selected++
    return currentNode
  }
}
