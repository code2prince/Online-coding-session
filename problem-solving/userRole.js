var users = [
    {
        username: 'abc@gmail.com',
        password: '12345',
        roles: ["admin"],
    },
    {
        username: 'xyx@gmail.com',
        password: '54321',
        roles: ["view only"],
    },
    {
        username: 'pqr@gmail.com',
        password: '55441',
        roles: ["admin", "view only"],
    },
    {
        username: 'mno@gmail.com',
        password: '44556',
        roles: ["admin"],
    },
    {
        username: 'klm@gmail.com',
        password: '33445',
        roles: "admin",
    },
];


// write a function to get all the users having roles as "admin" & "view only" both
function adminUser(users){
    let admin=[];
    for(i=0; i<users.length; i++){
        if(users[i].roles=== "admin" && users[i].roles==="view only")
        admin.push(users[i])
        
    }
    console.log(admin);
}
adminUser(users);

// write a function to get all the users having roles as "admin" role only

function getUser(users){
    
    let user=[];
    for(i=0; i<users.length; i++)
    {
        if(users[i].roles==="admin")
        user.push(users[i]);    
    }
    
    console.log(user);
}
getUser(users);


