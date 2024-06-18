//-----------HOF--------------------
// A function that accepts a function as an argument and/or returns a function as its value
function Higher_Order_Func(a,b,Next){
    let result=a+b;
    Next(result);  // here Next is a callback
}

Higher_Order_Func(2,4,function(val){
    console.log('val is:',val);  //val is: 6
});

// --------------------Arrow function------------
Higher_Order_Func(3,5,(value)=>{console.log('value:',value)})  //value: 8

