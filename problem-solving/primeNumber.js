// 1. write a function to find prime no b/w  0 to 10
// prime no [ 2,3,5,7,11]
function prime(num){
    if(num===2){
        return true;
    }
    else if(num>1){
        let flag = true;
        for(i=2; i<num; i++){
            
            if(num % i === 0) {
                flag = false;
            }
        }
        return flag;
        
    }
}

function primeNumbers(range) {
    const primeArr = [];
    for(let i=2; i<=range; i++){
        const isPrimeNumber = prime(i);
        if(isPrimeNumber){
            primeArr.push(i);
        }
    }    
    console.log(primeArr)
}

primeNumbers(20)
    





// 2. write a function to find n prime numbers bw 2 given numbers 

function primeNumbersBwRange(lowerRange, upperRange) {
    for(i=lowerRange; i<= upperRange; i++){
        let flag= true;
        for(j=2; j<i; j++){
            if(i%j===0){
                flag=false;
                
            }
        }
    
        if(i >1 && flag=== true ){
        console.log(i);
    }
    }
    

function primeNumnersBwRange(lowerRange, upperRange) {

}
}


primeNumbersBwRange(10, 20);

// check a no prime or not

let num=11;
if(num>=2)
var isPrime=true;
for(i=2;i<num; i++){
    if(num%i ===0){
        isPrime= false;
    }
} 
if(isPrime==true){
    console.log(`${num} is prime no`);
}
else
console.log(`${num} is not a prime no`);
