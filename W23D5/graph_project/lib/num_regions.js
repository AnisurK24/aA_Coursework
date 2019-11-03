function numRegions(graph) {
  let visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (depthFirst(node, graph, visited)) count++;
  }
}

function depthFirst(node, graph, visited = new Set()) {
  if (visited.has(node)) {
    return;
  }
  visited.add(node);
  graph[node].forEach(neighbor => depthFirst(neighbor, graph, visited));
  return true;
}

module.exports = {
    numRegions
};