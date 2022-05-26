console.log("login-Details");
function submitForm(){
    var userid=document.getElementById('userid').value;
    var password=document.getElementById('password').value;
    if(userid && password){
        console.log('getting details',userid,password);
    }else{
        alert('please Enter Correctly')
        }
    
}

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