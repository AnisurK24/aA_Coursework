// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (array[idx] === undefined) return true;
    let leftIdx = idx * 2;
    let rightIdx = idx * 2 + 1;
    let leftVal = array[leftIdx] === undefined ? -Infinity : array[leftIdx];
    let rightVal = array[rightIdx] === undefined ? -Infinity : array[rightIdx];
    console.log("array", array)
    console.log("idx", idx)
    console.log("current", array[idx])
    console.log("leftChild", leftVal)
    console.log("rightChild", rightVal)
    return array[idx] > leftVal && array[idx] > rightVal
        && isMaxHeap(array, leftIdx)
        && isMaxHeap(array, rightIdx);
}


module.exports = {
    isMaxHeap
};