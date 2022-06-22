// write a function to get the factorial of given a parameter

/*
num = 5;
i=6;
a = 120;
*/

function factorial(num) {    
    var result = 1;
    for(i=1; i<=num; i++ ){
       result = result * i; 
    }

    console.log(result);
}

factorial(6);


