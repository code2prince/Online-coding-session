
console.log('register.js loaded');
var userDatabase = [
    { 
       
    },
    { 
      
    },
];
function createUser(){
    var name = document.getElementById('name').value;
    var userid = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var isPasswordOK = validatePassword(password);

    var passwordMatched = password === confirmPassword;

    if(!userid && !password) {
        console.log('Please enter username and password');
        return;
    }
    
    if(!passwordMatched) {
        console.log('password and confirm password doesnt match');
        return;
    }

    if(!isPasswordOK) {
        console.log('password sohuld have one number, 1 special character and length between 8 to 16');
        return;
    }

    console.log('Welcome ', name, 'you are successfully registered');

}

function validatePassword(password) {

    var format = /[0-9 `@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var isPasswordValid = format.test(password);

    var length = password.length;
    var iStrongPassword =  false; 
    

    if(length >=8 && length <=16){
        iStrongPassword = true;
    } 


    if(isPasswordValid && iStrongPassword) {
        return true; 
    } else {
        return false;
    }
}



