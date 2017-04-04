import { assert } from 'chai'
import Trie from '../scripts/Trie'
import Node from '../scripts/Node'
require('locus')

describe('Trie tests', () => {
  it('should be a function', () => {
    assert.isFunction(Trie)
  })

  it('should have a property head which is an instance of Node', () => {
    let trie = new Trie()
    assert.deepEqual(trie.head.letter, null)
  })

  it('should property head should have default children of null', () => {
    let trie = new Trie()
    assert.deepEqual(trie.head.children, {})
  })

  it('should have a method insert', () => {
    let trie = new Trie().insert('piz')
    assert.deepEqual(trie, ['p', 'i', 'z'])
  })

  it('should add a letter to the head nodes children if the head has null children', () => {
    let trie = new Trie()
    trie.push('p')
    // eval(locus)
    assert.deepEqual(trie, 'p')
  })
})
