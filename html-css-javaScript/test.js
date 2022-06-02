var studentList = [];

function addStudent()
{ 
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;

  

  var studentObject = {
    id: studentList.length +1,
    name: name,
    email: email,
    contact: number,
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

    var deleteStudnetBtton =  document.createElement('div');
    deleteStudnetBtton.setAttribute('data-id', list[i].id);
    deleteStudnetBtton.innerText = 'X';
    deleteStudnetBtton.onclick = deleteUser;
    


    var studetRow = document.createElement('div');
    studetRow.setAttribute('class', 'studet-row');



    studetRow.appendChild(seqNum);
    studetRow.appendChild(name);
    studetRow.appendChild(email);
    studetRow.appendChild(number);
    studetRow.appendChild(deleteStudnetBtton);

    whereToDisplay.appendChild(studetRow)


  }


  function deleteUser(e) {
    console.log('deleteing user', e.target);
    console.log(e.target.dataset.id);

    Array.filter()

    var newList = studentList.filter(fasdfasdfasdfasdf);

    displayStudent(newList)

    // first remove studnet form studentList (use the id to do achive that)
    // call displayStudent with new studentList
  }

  

}
