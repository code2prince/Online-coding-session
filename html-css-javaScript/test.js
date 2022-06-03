var studentList = [];

function addStudent()
{ 
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var address = document.getElementById("address").value;

  

  var studentObject = {
    id: studentList.length +1,
    name: name,
    email: email,
    contact: number,
    address: address,
  };


  studentList.push(studentObject);

  console.log(studentList);

  displayStudent(studentList);

}


function displayStudent(list){
  var whereToDisplay = document.getElementById('studnet-list');
  whereToDisplay.innerHTML = '';

  for(var i=0; i<list.length; i++) {

    var seqNum  = document.createElement('div');
    seqNum.innerText = list[i].id;

    var name = document.createElement('div');
    name.innerText = list[i].name;
  
    var email = document.createElement('div');
    email.innerText = list[i].email;
  
    var number = document.createElement('div');
    number.innerText = list[i].contact;

    var address = document.createElement('div');
    address.innerText = list[i].address;

    var deleteStudnetBtton =  document.createElement('button');
    deleteStudnetBtton.setAttribute('data-id', list[i].id);
    deleteStudnetBtton.innerText = 'Delete';
    deleteStudnetBtton.onclick = deleteUser;
    


    var studetRow = document.createElement('div');
    studetRow.setAttribute('class', 'studet-row');



    studetRow.appendChild(seqNum);
    studetRow.appendChild(name);
    studetRow.appendChild(email);
    studetRow.appendChild(number);
    studetRow.appendChild(address);
    studetRow.appendChild(deleteStudnetBtton);

    whereToDisplay.appendChild(studetRow)


  }


  function deleteUser(e) {
    console.log('deleteing user', e.target);
    console.log(typeof e.target.dataset.id);

    var id = parseInt(e.target.dataset.id);

    // first remove studnet form studentList (use the id to do achive that)
    studentList = studentList.filter((student) => student.id !== id);


    // call displayStudent with new studentList
    displayStudent(studentList);
  }

  

}
