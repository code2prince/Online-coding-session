// find missing number from 1 to n 

let arr=[3,1,5,4];
let n=arr.length;

function getMissingNo(arr,n){
// sum of first n num = (n*n+1/2) but here 1 no is missing so we have to add 1
    let total= ((n+1) * (n+2)/2);
    for(i=0; i< n; i++)
    total-= arr[i];
    return total;
}
let missing=getMissingNo(arr,n);
console.log("missing no:",missing);

