// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
    if (nums.length < 1) return null;

    const midPoint = Math.floor(nums.length / 2);
    const node = new TreeNode(nums[midPoint]);
    node.left = sortedArrayToBST(nums.slice(0, midPoint));
    node.right = sortedArrayToBST(nums.slice(midPoint + 1));
    return node;
}