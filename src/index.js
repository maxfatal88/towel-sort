// let arr =[
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

module.exports = function towelSort (matrix) {
let newArr=[];
let flag = true;
if (matrix===undefined) {
  return [];
}
for(let i =0; i<matrix.length; i++) {
    if(flag) {
      for(let k=0; k<matrix[i].length; k++) {
        newArr.push(matrix[i][k])
        flag=false
      }
    }
        else { for(let m=matrix[i].length-1; m>=0; m--){
          // console.log(m)
          // console.log(i)
          newArr.push(matrix[i][m])
          flag=true
        }
        }    
  // console.log(newArr)
}

  return newArr;
}


// console.log(towelSort ())