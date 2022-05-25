console.log("contact query");
function submitForm(){
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   var phone = document.getElementById('phone').value;
   var query = document.getElementById('query').value;
   if(name && email && phone && query ) {
   console.log('send data to server' ,name,email,phone,query);
   } else {
   alert('Please provide full detail')
  }
}   