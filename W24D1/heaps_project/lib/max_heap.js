class MaxHeap {
        constructor(){
        this.array = [null];
    }
    getParent(idx) {
        return Math.floor(idx / 2);
    }
    getLeftChild(idx){
        return idx * 2;
    }
    getRightChild(idx) {
        return idx * 2 + 1;
    }
    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }
    siftUp(idx){
        if(idx === 1) return;
        let parentIdx = this.getParent(idx);
        if(this.array[idx] > this.array[parentIdx]){
            [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
            this.siftUp(parentIdx);
        }        
    }
}

module.exports = {
    MaxHeap
};