// CallBack

function saveToDb(msg, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1
    msg();
    console.log(internetSpeed);
    if (internetSpeed >= 4) {
        success();
    } else {
        failure();
    }
}

// saveToDb(() => {
//     console.log("Welcome")
//     }, () => {
//         console.log("Success Callback: Internet speed is good ,Inserted")
//     }, () => {
//         console.log("Failure Callback: Weak Internet Connection")
//     }
// )


/*
Welcome
1
Failure Callback: Weak Internet Connection


Welcome
7
Success Callback: Internet speed is good ,Inserted
*/



// callBack Hell   -->pyramid of CallBacks its also a bad practice to avoid it use promises or Async-Await
saveToDb(() => {
    console.log("Welcome")
}, () => {
    console.log("Success Callback: Internet speed is good ,Inserted")
    saveToDb(() => {
    }, () => {
        console.log("Success2 Callback: Internet speed is good ,Inserted")
    }, () => {
        console.log("Failure2 Callback: Weak Internet Connection")
    }
    )
}, () => {
    console.log("Failure Callback: Weak Internet Connection")
}
)


//---------------call back hell-------------
/*


Welcome
4
Success Callback: Internet speed is good ,Inserted
7
Success2 Callback: Internet speed is good ,Inserted
 ---------------------
Welcome
6
Success Callback: Internet speed is good ,Inserted
2
Failure2 Callback: Weak Internet Connection

-------------------
Welcome
1
Failure Callback: Weak Internet Connection
*/