const Queue = require('./queue')

const depthTraversal = function(tree) {
  'use strict'
  let results = []
  let queue = new Queue()
  queue.enqueue({node: tree, parentPath: ''})
  let currentTree = queue.dequeue()

  while(currentTree){
    for (let i = 0, length = currentTree.node.children.length; i < length; i++) {
      queue.enqueue({node: currentTree.node.children[i], parentPath: `${currentTree.parentPath}/${currentTree.node.name}`})
    }
    results.push(`${currentTree.parentPath}/${currentTree.node.name}`)
    currentTree = queue.dequeue()
  }

  return results
};

module.exports = depthTraversal
