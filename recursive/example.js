const shallowTree = require('./shallowTree')
const deepTree = require('./deepTree')(1000)
const depthTraversal = require('./depthTraversal')
const breadthTraversal = require('./breadthTraversal')

console.log(depthTraversal(deepTree))
console.log(depthTraversal(shallowTree))

let acc = []
breadthTraversal(acc, shallowTree, '')
console.log(acc)

// stack overflow depending on deepTree depth
// acc = []
// breadthTraversal(acc, deepTree, '')
// console.log(acc)