
         console.log("Details");
         function submitForm(){

           /* var name=document.name.value;
            var mobileno=document.mobileno.value;

            var tr= document.createElement('tr');
            var td1 = tr.appendChild(document.createElement('td'));
            var td2 = tr.appendChild(document.createElement('td'));
            td1.innerHTML=name;
            td2.innerHTML=mobileno;
             document.getElementById("tb1").appendChild(tr); */



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
        

            var radioButtons = document.querySelectorAll('input[name="yeargap"]');
    var selectedyeargap;
    // for(var i=0; i<radioButtons.length; i++)
    for (var rd of radioButtons) {
        if (rd.checked) {
            selectedyeargap = rd.value;
            break;
        }
    }


    var radioButtons = document.querySelectorAll('input[name="marks"]');
    var selectedmarks;
    // for(var i=0; i<radioButtons.length; i++)
    for (var rd of radioButtons) {
        if (rd.checked) {
            selectedmarks = rd.value;
            break;
        }
    }
            
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
            console.log('send data to server' ,name,selectedyeargap,selectedmarks,selectedGender,dateofbirth,language,email,number,fathername,selectedqualification2,selectedOccupation,mothername,selectedqualification1,address);
            } else {
            alert('Please provide full detail')
           }
        }