/** Breadth First Search **
 * 
 * Return the breadth first values of the given binary tree in 
 * an array.  
 * 
 */

 const breadthFirstSearch = (root) => {
    const queue = [root]
    const result = []

    while (queue.length > 0) {
        const curr = queue.shift()
        result.push(curr.val)

        if (curr.left !== null) queue.push(curr.left)
        if (curr.right !== null) queue.push(curr.right)
    }
    return result
}


module.exports = breadthFirstSearch;