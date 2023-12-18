function transformTree(tree) {
  if (tree.length === 0) return null

  function buildNode(index) {
    if (index >= tree.length || tree[index] === null) {
      return null
    }

    const node = {
      value: tree[index],
      left: buildNode(2 * index + 1),
      right: buildNode(2 * index + 2)
    }

    return node
  }

  return buildNode(0)
}

// Example usage:
const treeArray = [3, 1, 0, 8, 12, null, 1]
const treeObject = transformTree(treeArray)
console.log(treeObject)
