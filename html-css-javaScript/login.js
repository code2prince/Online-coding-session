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