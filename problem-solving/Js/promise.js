//---------------Promises-------------------
function saveToDb(data){
    return new Promise((resolve,rej)=>{
    let internetSpeed =Math.floor(Math.random()*10)+1;
    console.log(data);
    console.log(internetSpeed);
    if(internetSpeed>=4){
        resolve("Success: Internet Speed is Good, Inserted")
    } else{
        rej("Failure: Weak Internet Connection")
    }
    });
    
}

// let req= saveToDb("Welcome") //here req is promise object

// req.then(()=>{
//     console.log("promise was resolved")
//     console.log(req);   ///Promise { 'Success: Internet Speed is Good, Inserted' }
// })
// .catch(()=>{
//     console.log("promise was rejected")
//     console.log(req);   //Promise { <rejected> 'Failure: Weak Internet Connection' }

// })

//------------we can also use it -----------------
// saveToDb("Welcome")
// .then(()=>{
//     console.log("promise was resolved")
// })
// .catch(()=>{
//     console.log("promise was rejected")
// })

/*
7
promise was resolved
Promise { 'Success: Internet Speed is Good, Inserted' }

2
promise was rejected
Promise { <rejected> 'Failure: Weak Internet Connection' }

*/


//---------------Promise Chaining----------------------
saveToDb("Layer1")
.then((result)=>{
    console.log("Level 1 data: Saved");
    console.log('result=',result)
    return saveToDb("Layer 2");
})
.then((result)=>{
    console.log('result=',result);
    console.log("Level 2 data : saved")
})
.catch((error)=>{
    console.log("error=",error);
    console.log("promise was rejected")
})

/*

Layer1
6
Level 1 data: Saved
result= Success: Internet Speed is Good, Inserted
Layer 2
10
result= Success: Internet Speed is Good, Inserted
Level 2 data : saved


------------------
Layer1
10
Level 1 data: Saved
result= Success: Internet Speed is Good, Inserted
Layer 2
3
error= Failure: Weak Internet Connection
promise was rejected
-------------------

Layer1
1
error= Failure: Weak Internet Connection
promise was rejected
-----------------
*/