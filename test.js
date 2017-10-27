
// Given an array of integers (arr) and a value (num), move all occurrences of num
// to the end of the array. The order of the non-num elements must be preserved.
//
// Examples:
//   Input:  arr = [1,9,8,4,0,0,2,7,0,6,0], num = 0
//   Output: arr = [1,9,8,4,2,7,6,0,0,0,0]
//
//   Input:  arr = [1,5,2,5,3,5,4,5], num = 5
//   Output: arr = [1,2,3,4,5,5,5,5]
//
// Function signature: function PushNumsToEnd( arr, num )
//
function RunTests() {
    var testCases = [
        [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0], 0,
        [1, 5, 2, 5, 3, 5, 4, 5], 5,
        [0, 0, 0, 0, 0], 0,
        [1, 2, 3, 4, 5], 0,
        [], 1
    ];

    for (let i=0; i<testCases.length; i=i+2) {
        var a = testCases[i];
        var num = testCases[i+1];
        console.log("Input:  [" + a + "]");
        console.log("Moving " + num + "'s to the end.")
        PushNumsToEnd(a, num);
        console.log("Result: [" + a + "]\n");
    }
}

RunTests();

function PushNumsToEnd(arr, num){
    var i, count = 0;
      for (var i = 0; i < arr.length; i++)
          if (arr[i] !== num)
              arr[count++] = arr[i];

      while (count < arr.length)
          arr[count++] = num;
}

//this one works fine and better from geeks
