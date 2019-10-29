function binarySearch(array, target) {
    if (!array.length) return false;

    let midIdx = Math.floor(array.length / 2);
    let leftArray = array.slice(0, midIdx);
    let rightArray = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
        return binarySearch(leftArray, target);
    } else if (target > array[midIdx]) {
        return binarySearch(rightArray, target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {
    if (!array.length) return -1;

    let midIdx = Math.floor(array.length / 2);
    let leftArray = array.slice(0, midIdx);
    let rightArray = array.slice(midIdx + 1);

    let midEle = array[midIdx]

    if (target < midEle) {
        return binarySearchIndex(leftArray, target);
    } else if (target > midEle) {
        let subResult = binarySearchIndex(rightArray, target);
        return subResult === -1 ? -1 : subResult + midIdx + 1;
    } else {
        return midIdx;
    }

}


module.exports = {
    binarySearch,
    binarySearchIndex
};