var log = console.log;

/*Given a Binary Tree you need to  find maximum value which you  can get by subtracting value of node B from value of node A, where A and B are two nodes of the binary tree and A is an ancestor of B . You are required to complete the function maxDiff . You should not read any input from stdin/console. There are multiple test cases. For each test case, this method will be called individually.

Input:
The task is to complete the function maxDiff which takes 1 argument, root of the Tree . The struct node has a data part which stores the data, pointer to left child and pointer to right child.
There are multiple test cases. For each test case, this method will be called individually.

Output:
The function should return an integer denoting the maximum difference.*/

class BTNode{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
  static serialize(root, arr){
    if(root == null){
      arr.push(BTNode.SENTENEL);
      return;
    }
    arr.push(root.data);
    BTNode.serialize(root.left, arr);
    BTNode.serialize(root.right, arr);
  }

  static deserialize(arr, si){
    if(arr[si.idx] === BTNode.SENTENEL)
      return null;
    var root = new BTNode(arr[si.idx]);
    si.idx++;
    root.left = BTNode.deserialize(arr, si);
    si.idx++;
    root.right = BTNode.deserialize(arr, si);
    return root;
  }
}

BTNode.SENTENEL = -1;

var r = BTNode.deserialize([10, 7, 5, 0, -1, -1, 2, -1, -1, 2, -1, -1, 11, 6, 7, 1, -1, -1, -1, 5, -1, -1, -1], {idx:0});
log(r);
var arr = [];
BTNode.serialize(r, arr);
log(arr);

log(btMaxDiff(r));

function btMaxDiff(r){
  if(r==null) return {ancestorData: undefined, diff: 0};

  var left = btMaxDiff(r.left);
  if(left.ancestorData != undefined && left.ancestorData < r.data)
    left = {ancestorData: r.data,  diff:r.data - left.ancestorData + left.diff};

  var right = btMaxDiff(r.right);
  if(right.ancestorData != undefined && right.ancestorData < r.data)
    right = {ancestorData: r.data,  diff:r.data - right.ancestorData + right.diff};

  if(left.ancestorData === undefined && right.ancestorData === undefined)
    return {ancestorData: r.data, diff: 0};
  else if(left.ancestorData === undefined)
    return right;
  else
    return left.diff > right.diff ? left : right;
}
