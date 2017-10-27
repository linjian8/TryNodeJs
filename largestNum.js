/*
Given a list of non negative integers, arrange them in such a manner that they form the largest number possible.

The result is going to be very large, hence return the result in the form of a string.

Input:

The first line of input consists number of the test cases. The description of T test cases is as follows:

The first line of each test case contains the size of the array, and the second line has the elements of the array.


Output:

In each separate line print the largest number formed by arranging the elements of the array in the form of a string.


Constraints:

1 ≤ T ≤ 70
1 ≤ N ≤ 100
0 ≤ A[i] ≤ 1000


Example:

Input:

2
5
3 30 34 5 9
4
54 546 548 60

Output:

9534330
6054854654 */
var log = console.log;

function largestNum(arr){
  var rlt = [];
  for(var i=0; i<arr.length; i++)
    rlt.push(arr[i].toString());

  rlt.sort( (s1, s2) => {
    var len = s1.length > s2.length ? s1.length : s2.length;
    for(var i=0; i<len; i++){
      if(s1[i%s1.length] > s2[i%s2.length])
        return -1;
      else if (s1[i%s1.length] < s2[i%s2.length])
        return 1;
      else
        continue;
    }
    return 0;
  });
  return rlt;
}

log(largestNum([3, 30, 34, 5, 9]));

log(largestNum([1, 34, 3, 98, 9, 76, 45, 4, 12, 121]));
