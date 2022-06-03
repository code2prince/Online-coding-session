
console.log("Details");

var student [
    {
        name = 'Prince'
                 email = 'princekumarsharma365@gmail.com'
                 number = '8888888888'
                 address = 'chennai'
    },
    {
        name = 'raj'
                 email = 'raj@gmail.com'
                 number = '7777777777'
                 address = 'chennai'
    }
];


function printTable() {
    var table = document.createElement('table');
    var tr = document.createElement('tr');

    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th4 = document.createElement('th');

    th1.innerText = 'Name';
    th2.innerText = 'email';
    th3.innerText = 'number';
    th4.innerText = 'address';


    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);


    table.appendChild(tr);


    for (var i = 0; i < student.length; i++) {
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');


        td1.innerText = student[i].name;
        td2.innerText = student[i].email;
        td3.innerText = student[i].number;
        td4.innerText = student[i].address;


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);


        table.appendChild(tr);
    }
    table.setAttribute('border', 1);

    document.getElementById('student').appendChild(table);

    var p = document.createElement('p');
    p.innerText = "find me";
    document.body.appendChild(p);
}
printTable();

function submitForm() {

    /* var name=document.name.value;
     var mobileno=document.mobileno.value;

     var tr= document.createElement('tr');
     var td1 = tr.appendChild(document.createElement('td'));
     var td2 = tr.appendChild(document.createElement('td'));
     td1.innerHTML=name;
     td2.innerHTML=mobileno;
      document.getElementById("tb1").appendChild(tr); */



    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var mothername = document.getElementById('mothername').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var address = document.getElementById('address').value;
    var dateofbirth = document.getElementById('date').value;
    var qualification = document.getElementById('qualification').value;





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

    var checkboxes = document.querySelectorAll('input[name="language"]:checked');
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






    if (name && email && number) {
        // TODO: create a applicationObject with all the values and push it into an global array applicationArray.
        console.log('sending data', name, dateofbirth, email, number, selectedyeargap, selectedmarks, selectedGender, selectedOccupation, qualification, fathername, mothername, address);
        // console.log('send data to server' ,name,selectedyeargap,selectedmarks,selectedGender,dateofbirth,language,email,number,fathername,selectedqualification2,selectedOccupation,mothername,selectedqualification1,address);
    } else {
        alert('Please provide full detail')
    }
}



function displayApplication(list) {
    // TODO: display all the applicatiuons > applicationArray
}

function deleteApplications() {
    // TODO: get the id of application
    // TODO: filter the applicationArray by id
    // TODO: call displayApplication by passign the filtered Array
}