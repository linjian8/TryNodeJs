//b: 2 dim char matrix
//n: size of b
//x: current x index
//y: current y index
//str: current string so far
var log = console.log;
function isValid(str) {return true;}
function findWords(b, n){
  function _findWords(b, n, x, y, str, visited, words) {
    var i, j;
    if(visited[x][y])
      return;

    str += b[x][y];
    visited[x][y] = 1;
    if(isValid(str)){
      log(str+"\n");
      words.push(str);
    }

    xs = Math.max(x-1, 0);
    xe = Math.min(x+1, n-1);
    ys = Math.max(y-1, 0);
    ye = Math.min(y+1, n-1);
    log("x=" + x + ", y=" + y + ", xs=" + xs + ", xe=" + xe + ", ys=" + ys + ", ye=" + ye);
    for(i=xs; i<=xe; i++)
      for(j=ys; j<=ye; j++){
        log(i + ", " + j);
        //if((i != x || j != y)){
          //log(i + ", " + j);
          _findWords(b, n, i, j, str, visited, words);
        //}
      }
    str = str.slice(0,-1);
    visited[x][y] = 0;
  }

  var str="", words = [];
  var visited = new Array(n);
  for(var i=0; i<n; i++)
    visited[i] = new Array(n);

  _findWords(b, n, 0, 0, str, visited, words);
  return words;
}

var b = [['g', 'i'], ['u', 'e']];
var ws = findWords(b, 2);
console.log(ws);
