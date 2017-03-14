const breadthTraversal = (accumulator, node, path) => {
  'use strict'
  let newPath = `${path}/${node.name}`
  accumulator.push(newPath)
  if (node.children && node.children.length > 0) {
    node.children.forEach((child) => {
      return breadthTraversal(accumulator, child, newPath)
    })
  }
}

module.exports = breadthTraversal
