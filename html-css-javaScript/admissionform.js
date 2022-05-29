
         console.log("Details");
         function submitForm(){
            var name = document.getElementById('name').value;
            var fathername=document.getElementById('fathername').value;
            var mothername=document.getElementById('mothername').value;
            var email = document.getElementById('email').value;
            var number = document.getElementById('number').value;
            var address=document.getElementById('address').value;
            var dateofbirth = document.getElementById('date').value;
            
             
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


            var radioButtons = document.querySelectorAll('input[name="gender"]');
            var selectedGender;
            // for(var i=0; i<radioButtons.length; i++)
            for (var rd of radioButtons) {
                if (rd.checked) {
                    selectedGender = rd.value;
                    break;
                }
            }
           var radioButtons = document.querySelectorAll('input[name="Occupation"]');
            var selectedOccupation;
            // for(var i=0; i<radioButtons.length; i++)
            for (var rd of radioButtons) {
                if (rd.checked) {
                    selectedOccupation = rd.value;
                    break;
                }
            }

            var radioButtons = document.querySelectorAll('input[name="qualification2"]');
            var selectedqualification2;
            // for(var i=0; i<radioButtons.length; i++)
            for (var rd of radioButtons) {
                if (rd.checked) {
                    selectedqualification2 = rd.value;
                    break;
                }
            }
            var radioButtons = document.querySelectorAll('input[name="qualification1"]');
            var selectedqualification1;
            for (var rd of radioButtons) {
                if (rd.checked) {
                    selectedqualification1 = rd.value;
                    break;
                }
            }

           


           

            if(name && email && number  ) {
            console.log('send data to server' ,name,selectedGender,dateofbirth,language,email,number,fathername,selectedqualification2,selectedOccupation,mothername,selectedqualification1,address);
            } else {
            alert('Please provide full detail')
           }
        }