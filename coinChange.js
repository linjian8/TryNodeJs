var log = console.log;

//calc # of combos to sum to n with s face type of coins
var face = [25, 1,5,10];
function coinChange(face, n, s){

  if(n == 0)
    return 1;
  if(s == 0 && n > 0)
    return 0; // no way if coins array is 0

  var cnt = coinChange(face, n, s-1);
  if(n>=face[s-1])
    cnt += coinChange(face, n-face[s-1], s);
  return cnt;
}

log(coinChange(face, 36, 4));

function coinChange2(face, n, s){
  var i, j;
  var rlt = new Array(s+1);
  for(i=0; i<=s; i++)
    rlt[i] = new Array(n+1);

  for(i=0; i<=n; i++)
    rlt[0][i] = 0;

  for(i=0; i<=s; i++)
    rlt[i][0] = 1; //if n=0, then there is only 1 way

  for(i=1; i<=s; i++)
    for(j=1; j<=n; j++){
      rlt[i][j] = rlt[i-1][j];
      if(j >= face[i-1])
        rlt[i][j] += rlt[i][j-face[i-1]];
    }
  return rlt[s][n];
}

log(coinChange2(face, 36, 4));
