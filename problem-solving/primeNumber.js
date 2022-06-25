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

function primeNumners(range) {
    const primeArr = [];
    for(let i=2; i<=range; i++){
        const isPrimeNumber = prime(i);
        if(isPrimeNumber){
            primeArr.push(i);
        }
    }    
    console.log(primeArr)
}

primeNumners(20)
    





// 2. write a function to find n prime numbers bw 2 given numbers 
function primeNumnersBwRange(lowerRange, upperRange) {

}


primeNumnersBwRange(10, 20);