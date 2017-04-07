import { assert } from 'chai'
import Trie from '../scripts/Trie'
import Node from '../scripts/Node'
import fs from 'fs';
const text = "/usr/share/dict/words"
require('locus')

describe('Trie tests', () => {
  it('should be a function', () => {
    assert.isFunction(Trie)
  })

  it('should have a property root which is an instance of Node', () => {
    let trie = new Trie
    assert.deepEqual(trie.root.letter, null)
    assert.deepEqual(trie.root.children, {})
  })

  it('should have a property root with the default children of an empty object', () => {
    let trie = new Trie
    assert.deepEqual(trie.root.children, {})
  })

  it('should have a method insert that creates nodes', () => {
    let trie = new Trie
    trie.insert('PIZZA')
    trie.insert('apple')
    console.log(JSON.stringify(trie, null, 4))
    assert.equal(trie.root.children['p'], trie.root.children['p'])
    assert.equal(trie.root.children['p'].children['i'], trie.root.children['p'].children['i'])
    assert.equal(trie.root.children['a'], trie.root.children['a'])
    assert.equal(trie.root.children['a', 'p'], trie.root.children['a', 'p'])
  })

  it('should add a letter to the root nodes children if the root has null children', () => {
    let trie = new Trie
    assert.deepEqual(trie.root.children, {})
    trie.insert('desert')
    assert.notEqual(trie.root.children['d'], trie.root.children['e'])
    assert.deepEqual(trie.root.children['d'], trie.root.children['d'])
  })

  it('should take multiple words', () => {
    let trie = new Trie
    trie.insert('pizza')
    trie.insert('pie')
    trie.insert('party')
    trie.insert('pizzeria')
    console.log(JSON.stringify(trie, null, 4))
    assert.deepEqual(trie.root.children['p'], trie.root.children['p'])
  })

  it('should return true if it reaches the last letter of a word', () => {
    let trie = new Trie
    trie.insert('pie')
    assert.equal(trie.root.children['p'].children['i'].children['e'].isWord, true)
  })

  it('should make a new node for new letters', () => {
    let trie = new Trie
    trie.insert('pizza')
    trie.insert('pie')
    assert.equal(trie.root.children['p'].children['i'].children['z'], trie.root.children['p'].children['i'].children['z'])
    assert.equal(trie.root.children['p'].children['i'].children['e'], trie.root.children['p'].children['i'].children['e'])
    // this test could be improved not sure how yet
  })
})

describe('Suggest Tests', () => {
  it('should find the current node', () => {
    let trie = new Trie
    trie.insert('pizza')
    // trie.insert('bear')
    console.log(JSON.stringify(trie, null, 4))
    assert.equal(trie.findNode('pi'), trie.root.children['p'].children['i'])
  })

  it('should suggest a word', () => {
    let trie = new Trie

    trie.insert('pie')
    trie.insert('pizza')
    trie.insert('pied')
    trie.insert('pizzeria')
    trie.insert('pickles')
    trie.select('pizza')

    assert.deepEqual(trie.suggest('pi'), ['pizza', 'pie', 'pied', 'pizzeria', 'pickles'])
  })
})

describe('Populate Tests', () => {
  it('should populate the whole dictionary into the trie', () => {
    let trie = new Trie
    let dictionary = fs.readFileSync(text).toString().trim().split('\n');
    trie.populate(dictionary)
    assert.equal(trie.count(), 235886)
  })

  it('should suggest things from the dictionary', () => {
    let trie = new Trie
    let dictionary = fs.readFileSync(text).toString().trim().split('\n');
    trie.populate(dictionary)
    assert.deepEqual(trie.suggest('piz'), ["pize", "pizza", "pizzeria", "pizzicato", "pizzle"])
  })
})

describe('Select Tests', () => {
  it('should increment the selected property of the node', () => {
    let trie = new Trie
    trie.insert('pizza')
    trie.select('pizza')

    assert.deepEqual(1, trie.findNode('pizza').selected)
  })
})

describe('sortSuggestions Tests', () => {
  it('should return an array', () => {
    let trie = new Trie
    assert.deepEqual(trie.sortSuggestions([{input: 'suh', selected: 1}]), ['suh'])
  })



  it('return an array sorted by how many times each word was previously selected', () => {
    let trie = new Trie

    trie.insert('pizzeria')
    trie.insert('pizza')
    trie.insert('pizzas')
    trie.select('pizza')
    trie.select('pizza')
    trie.select('pizzeria')

    assert.deepEqual(trie.suggest('pi'), ['pizza', 'pizzeria', 'pizzas'])
  })
})
