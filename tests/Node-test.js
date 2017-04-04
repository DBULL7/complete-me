import { assert } from 'chai';
import Node from '../scripts/Node'

describe('Tests for Nodes', () => {
  
  it('should be a function', () => {
    assert.isFunction(Node)
  })

  it('should create an instance of node', () => {
    let node = new Node()
    assert.instanceOf(node, Node)
  })

  it('should have letter equal null by default', () => {
    let node = new Node()
    assert.equal(node.letter, null)
  })

  it('should accept letters', () => {
    let node = new Node('a')
    assert.equal(node.letter, 'a')
  })

  it('should ')
})
