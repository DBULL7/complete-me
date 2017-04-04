import { assert } from 'chai'
import Trie from '../scripts/Trie'
import Node from '../scripts/Node'
require('locus')

describe('Trie tests', () => {
  it('should be a function', () => {
    assert.isFunction(Trie)
  })

  it('should have a property head which is an instance of Node', () => {
    let trie = new Trie('a')
    assert.deepEqual(trie.root.letter, null)
    assert.deepEqual(trie.root.children, {})
  })

  it('should property head should have default children of an empty object', () => {
    let trie = new Trie('ass')
    assert.deepEqual(trie.root.children, {})
  })

  it('should have a method insert that creates nodes', () => {
    let trie = new Trie()
    trie.insert('PIZZA')
    assert.equal(trie.root.children.p, 'p')
  })

  it.only('should add a letter to the head nodes children if the head has null children', () => {
    let trie = new Trie()
    trie.insert('pizza')
    console.log(JSON.stringify(trie, null, 4))
    assert.deepEqual(trie.root.children['p'], trie.root.children['p'])
  })
})
