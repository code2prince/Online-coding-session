/* 

write a funtion to print a pattern as given below
Output:-
*
**
***
****
*****
****
***
**
*


*/

// as you can see, 1st line has one star, 2nd line has 2 star, 
// 5th line has 5 star then from 6th line star are decreasing one by one till it reaches 1

function pattern(num){
    
    for(let i=1;i<=3;i++){
        for(let j=0;j<=i;j++){
            
            console.log("*",i*j);
        }
    }

    // for(k=4;k>=1;k--){
    //     for(j=k;j>=1;j--){
    //         console.log("*",k*j);
    //     }
    // }
}
pattern(5);