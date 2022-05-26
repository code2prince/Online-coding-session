
var userDatabase = [
    { 
        name: 'prince', 
        email: 'prince@gmail.com', 
        phone: 324523453, 
        password: 'prince' 
    },
    { 
        name: 'Rajeev', 
        email: 'Raj@gmail.com', 
        phone: 84365435, 
        password: 'raj' 
    },
];

function Login(){

    
    var userid=document.getElementById('userid').value;
    var password=document.getElementById('password').value;

    if(!userid && !password) {
        alert('Pleaes enter username and password');
    } else {
        var foundItem = userDatabase.find(function(item){
            return item.email ===  userid && item.password === password;
        });
        if(foundItem) {
            console.log('you are successfully loggedIN')
        } else {
            console.log('username & password not found in database, please enter correct detail')
        }
    }
}


/*
this function should return true if details are valid or it should
*/
function validatePassword() {
    var password = 'a@123'; //document.getElementById('password').value;
    var format = /[0-9`@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var isPasswordValid = format.test(password);
    var length = password.length;
    if(isPasswordValid) {
        console.log('password is in valid format'); 
    } else {
        console.log('password is not in valid format, use atleaset one number and one special character'); 
    }
    if(length >=8 && length <=16){
        console.log('password is strong length'); 
    } else {
        console.log('password must be of length between 8 to 16'); 
    }
}
