// Array MAP method
var arr = [1,2,3,4];

/*
1 square of each element in array
output: [1,4,9,16]
*/
function square(x){
    return x*x;
}
var output = arr.map(square);
console.log(output);

/*
1 cube of each element in array
output: [1,8,27,64]
*/
function cube(y){
    return y*y*y;
}
var cubic = arr.map(cube);
console.log(cubic);


