
         console.log("Details");
         function submitForm(){
            var name = document.getElementById('name').value;
            var fathername=document.getElementById('fathername').value;
            var mothername=document.getElementById('mothername').value;
            var email = document.getElementById('email').value;
            var number = document.getElementById('number').value;
            var address=document.getElementById('address').value;
            
             
            var checkboxes = document.querySelectorAll('input[name="qualification"]:checked');
            var qualification = [];
            checkboxes.forEach((checkbox) => {
                qualification.push(checkbox.value);
            });
            
            var checkboxes =document.querySelectorAll('input[name="language"]:checked');
            var language = [];
            checkboxes.forEach((checkbox) => {
                language.push(checkbox.value);
            });
           

            if(name && email && number  ) {
            console.log('send data to server' ,name,email,number,fathername,mothername,radio,address,qualification,language,gender);
            } else {
            alert('Please provide full detail')
           }
        }