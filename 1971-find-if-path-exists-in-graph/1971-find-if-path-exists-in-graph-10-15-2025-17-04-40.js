/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = Array.from({length: n}, () => []);

    for(const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const visited = new Set();
    const stack = [source];

    while(stack.length) {
        const node = stack.pop();

        if(node === destination) return true;

        if(visited.has(node)) continue;

        visited.add(node);

        for(const next of graph[node]) {
            if(!visited.has(next)) stack.push(next);
        }
    }

    return false;
};