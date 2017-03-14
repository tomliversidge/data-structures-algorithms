run with node --harmony flag for tail call optimisation

Given a tree of

```javascript
{
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
```

depth traversal should give 

```javascript
 ['/root',
  '/root/child1',
  '/root/child2',
  '/root/child3',
  '/root/child1/grandchild1',
  '/root/child1/grandchild2' ]
```

breadth traversal should give

```javascript
[ '/root',
  '/root/child1',
  '/root/child1/grandchild1',
  '/root/child1/grandchild2',
  '/root/child2',
  '/root/child3' ]

```

