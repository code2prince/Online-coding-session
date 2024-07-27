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

saveToDb(() => {
    console.log("Welcome")
    }, () => {
        console.log("Success Callback: Internet speed is good ,Inserted")
    }, () => {
        console.log("Failure Callback: Weak Internet Connection")
    }
)


/*
Welcome
1
Failure Callback: Weak Internet Connection


Welcome
7
Success Callback: Internet speed is good ,Inserted
*/