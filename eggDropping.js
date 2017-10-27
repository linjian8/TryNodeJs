var log = console.log;
/* return the minimal # of tries with n eggs and k floor for the worst case scenario */
function eggDropping(n, k){
  var rlt = new Array(n+1); // n+1 rows
  var i, j, x;
  for(var i=0; i<rlt.length; i++)
    rlt[i] = new Array(k+1); //k+1 columns

  for(i=0; i<=n; i++){
    rlt[i][0] = 0; //0 floor
    rlt[i][1] = 1; //1 floor only need to try once
  }

  for(i=0; i<=k; i++){
    rlt[0][i] = 0; // no egg, no way to try
    rlt[1][i] = i; //with only 1 egg, always has to try i times for i floor
  }

  for(i=2; i<=n; i++)
    for(j=2; j<=k; j++){
      rlt[i][j] = Number.MAX_SAFE_INTEGER;
      for(x=1; x<=j; x++){
        tmp = 1 + Math.max(rlt[i-1][x-1], rlt[i][j-x]);
        rlt[i][j] = Math.min(tmp, rlt[i][j]);
      }
    }

  return rlt[n][k];
}

log(eggDropping(4, 100));
