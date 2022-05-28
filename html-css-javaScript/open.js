function courseSubmit(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var aadhar = document.getElementById('aadhar').value;


    var radioButtons = document.querySelectorAll('input[name="yeargap"]');
            var selectedyeargap;
            // for(var i=0; i<radioButtons.length; i++)
            for (var rd of radioButtons) {
                if (rd.checked) {
                    selectedyeargap = rd.value;
                    break;
                }
            }

if(name && email && phone && aadhar) 
{
console.log('getting details',name,email,phone,aadhar,selectedyeargap);
}
else{
    alert('please provide full details')
}
}
