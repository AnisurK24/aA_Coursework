// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

const getHeight = (root) => {
    if (!root) return -1;
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
};

function isBalanced(root) {
    // check the height of each branch
    // left and right subtrees height diff <= 1
    if (!root) return true;
    let heightDifference = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
      
    return heightDifference && isBalanced(root.left) && isBalanced(root.right);
}