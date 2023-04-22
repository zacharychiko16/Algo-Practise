/** Length of Linked List **
 * 
 * Find the length of the given linked list. 
 *  
 * @example
 * lengthOfList(1 -> 2 -> 3) -> 3
 * lengthOfList(10 -> 20) -> 2
 * lengthOfList(100 -> 200 -> 300 -> 400) -> 4
 * 
 */

 const lengthOfList = (head) => {
    let length = 0 
    let curr = head

    while (curr) {
        length++
        curr = curr.next
    }
    return length

}


module.exports = lengthOfList;