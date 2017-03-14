let deepTree = {
  name: 'root',
  children: []
}

function addToTree (i, level, node) {
  console.log(i)
  'use strict'
  if (i === level) {
    return
  } else {
    node.children.push({ name: `child${i}`, children:[]})
    return addToTree(++i, level, node.children[0])
  }
}

module.exports = (levels) => {
  'use strict'
  addToTree(1, levels, deepTree)
  return deepTree
}
