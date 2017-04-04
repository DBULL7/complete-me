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

  it('should have a method insert', () => {
    let trie = new Trie()
    trie.insert('pizza')
    assert.equal(trie, 'pizza')
  })

  it.skip('should add a letter to the head nodes children if the head has null children', () => {
    let trie = new Trie()
    trie.insert('p')
    // eval(locus)
    assert.deepEqual(trie.root.children, 'p')
  })
})
