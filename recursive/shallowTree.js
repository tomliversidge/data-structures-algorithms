module.exports = {
  name: 'root',
  children: [
    { name: 'child1',
      children: [
        { name: 'grandchild1', children: []},
        { name: 'grandchild2', children: []}
      ]},
    { name: 'child2', children: []},
    { name: 'child3', children: []}
  ]
}
