//console.log("Details");

var aplicantList = [];

function submitForm() {

    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var mothername = document.getElementById('mothername').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var address = document.getElementById('address').value;
    var dateofbirth = document.getElementById('date').value;
    var qualification = document.getElementById('qualification').value;

    var radioButtons = document.querySelectorAll('input[name="gender"]');
    var selectedGender;
    // for(var i=0; i<radioButtons.length; i++)
    for (var rd of radioButtons) {
        if (rd.checked) {
            selectedGender = rd.value;
            break;
        }
    }


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


  
    var radioButtons = document.querySelectorAll('input[name="Occupation"]');
    var selectedOccupation;
    // for(var i=0; i<radioButtons.length; i++)
    for (var rd of radioButtons) {
        if (rd.checked) {
            selectedOccupation = rd.value;
            break;
        }
    }






    if (name && email && number ) {
        
        // TODO: create a applicationObject with all the values and push it into an global array applicationArray.

        var aplicantObject ={
            id:aplicantList.length+1,
            name:name,
            gender:selectedGender,
            dateofbirth:dateofbirth,
            email:email,
            number:number,
            address:address,
            fathername:fathername,
            mothername:mothername,
            qualification:qualification,
        }
    
            aplicantList.push(aplicantObject);
            console.log(aplicantList);
            displayStudent(aplicantList);
            displayFilter();

    

        console.log('sending data', name, dateofbirth, email, number, selectedyeargap, selectedmarks, selectedGender, selectedOccupation, qualification, fathername, mothername, address);
        // console.log('send data to server' ,name,selectedyeargap,selectedmarks,selectedGender,dateofbirth,language,email,number,fathername,selectedqualification2,selectedOccupation,mothername,selectedqualification1,address);
    } else {
        alert('Please provide full detail')
    }
}




    
function displayStudent(list){
    // TODO: display all the studentlist > applicationArray
    var whereToDisplay = document.getElementById('student-list');
    whereToDisplay.innerHTML = '';
  
    for(var i=0; i<list.length; i++) {
  
      var seqNum  = document.createElement('div');
      seqNum.innerText = list[i].id;
  
      var name = document.createElement('div');
      name.innerText = list[i].name;

      var selectedGender =document.createElement('div');
      selectedGender.innerText = list[i].gender;

      var dateofbirth = document.createElement('div');
      dateofbirth.innerText = list[i].dateofbirth;
    
      var email = document.createElement('div');
      email.innerText = list[i].email;
    
      var number = document.createElement('div');
      number.innerText = list[i].number;
  
      var address = document.createElement('div');
      address.innerText = list[i].address;

      var fathername = document.createElement('div');
      fathername.innerText = list[i].fathername;
    
      var mothername = document.createElement('div');
      mothername.innerText = list[i].mothername;

      var qualification=document.createElement('div');
      qualification.innerText = list[i].qualification;
  
  
      var deleteStudnetBtton =  document.createElement('button');
      deleteStudnetBtton.setAttribute('data-id', list[i].id);
      deleteStudnetBtton.innerText = 'Delete';
      deleteStudnetBtton.onclick = deleteUser;
      
  
  
      var studentRow = document.createElement('div');
      studentRow.setAttribute('class', 'student-row');
  
  
  
      studentRow.appendChild(seqNum);
      studentRow.appendChild(name);
      studentRow.appendChild(selectedGender);
      studentRow.appendChild(dateofbirth);
      studentRow.appendChild(email);
      studentRow.appendChild(number);
      studentRow.appendChild(address);
      studentRow.appendChild(fathername);
      studentRow.appendChild(mothername);
      studentRow.appendChild(qualification);
      studentRow.appendChild(deleteStudnetBtton);
  
      whereToDisplay.appendChild(studentRow)
  
  
    }
     
  function deleteUser(e) {
    console.log('deleteing user', e.target);
    console.log(typeof e.target.dataset.id);

    var id = parseInt(e.target.dataset.id);

    // TODO: get the id of application
    // TODO: filter the applicationArray by id
    aplicantList = aplicantList.filter((student) => student.id !== id);

    // TODO: call displayApplication by passign the filtered Array
    displayStudent(aplicantList);
  }

  

}

function displayFilter(){
    if(aplicantList.length>0){

        var filterDiv=document.getElementById('filter');
        filterDiv.innerHTML=''
        // create a male-female dropdown
        // create selectElement
        var Filter=document.createElement('select');
        //attach onchange
        Filter.onchange=filterAplicationList;

        //create option element with attribute "select " & "value"
        var select =document.createElement('option');
        select.text = "select";
        select.value = "select";
        //select.setAttribute('value', 'select');
        //select.innerText= 'select';
        var male=document.createElement('option');
        //male.setAttribute('value', 'male');
        //male.innerText= 'male';
        male.text = "male";
        male.value = "male";
        var female=document.createElement('option');
        //female.setAttribute('value', 'female');
        //female.innerText= 'female';

        female.text = "female";
        female.value = "female";

        
        Filter.appendChild(select);
        Filter.appendChild(male);
        Filter.appendChild(female);

       
        filterDiv.appendChild(Filter)
    }
}
function filterAplicationList(e){
    console.log(e.target.value);
    if(e.target.value!=='select'){
        var output = aplicantList.filter((x)=>x.gender===e.target.value );
        console.log(output);
        displayStudent(output)
    }
    else{
        displayStudent(aplicantList)
    }
}
