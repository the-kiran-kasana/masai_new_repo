function solve(mat) {
    const n = mat.length;
    console.log(mat, "actual matrix")
    // Step 1: Transpose
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
      //   console.log(mat[i][j])
      // console.log(mat[i][j])
      // console.log(mat[j][i])
      // console.log("this is the initial matrix",mat)
      // console.log(i,j, "i and j")
      // console.log("________")
      // console.log(j,i)
      
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      
      //you need to change or use another way to swap the values instead of above method
      //   [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      // console.log( "after the swap i of j with j of i will become this=>", mat[i][j])
      // console.log("after the swap j of i this will become this=> ", mat[j][i])
      //   console.log("this is the swaped matrix",mat)
      }
    }
    console.log(mat, "kbjjhvjh n")
    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
      mat[i].reverse();
      //you need to use brute force mathod for reverse the value
    }
  }
  
  // Example usage:
  let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  let expactedMat=[
      [ 7, 4, 1 ],
      [ 8, 5, 2 ], 
      [ 9, 6, 3 ]
      ]
  solve(mat);
  console.log(mat)  