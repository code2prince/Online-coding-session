var users = [
    {
        username: 'abc@gmail.com',
        password: '12345',
    },
    {
        username: 'xyx@gmail.com',
        password: '54321',
    },
    {
        username: 'pqr@gmail.com',
        password: '55441',
    },
    {
        username: 'mno@gmail.com',
        password: '44556',
    },
    {
        username: 'klm@gmail.com',
        password: '33445',
    },
];


// write a function which will accept username & passwrd 
// and it will return success if user is present or else it will return false
function login(users){
    
    
    let userid= (prompt("Enter username:"));
    //console.log(`username:${userid}`);
    console.log("username:",userid);
  
    let password=(prompt("Enter password:"));
    console.log("password:", password);

    // check if userid and password not entered then alert them to enter
    if(!userid && !password) {
        alert('Please enter username and password');
    } else {
        var foundItem = users.find(function(item){
            return item.username ===  userid && item.password === password;
        });
        if(foundItem) {
            console.log('User is present')
        } else {
            console.log('user not found')
        }
    }
}


login(users);

