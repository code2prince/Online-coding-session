// 1. write a function to find prime no b/w  0 to 10
// prime no [ 2,3,5,7,11]
function prime(num){
    if(num===2){
        return true;
    }
    else if(num>1){
        for(i=2; i<num; i++){
            if(num % i !==0){
                return true;
            }
            else if(num === i*1){
                return false;
            }
            else{
                return false;
            }
        }
        
    }
}
console.log(prime(8));
    





// 2. write a function to find n prime numbers (n will be provided as argument to funtions)