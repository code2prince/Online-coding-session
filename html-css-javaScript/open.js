var admissionList = [];
function courseSubmit() {
    var course = document.getElementById('course').value;
    var stream = document.getElementById('stream').value;
    var fee = document.getElementById('fee').value;
    var startdate = document.getElementById('date1').value;
    var enddate = document.getElementById('date2').value;
    var examdate = document.getElementById('date3').value;
    var resultdate = document.getElementById('date4').value;
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

    if (course && stream && selectedyeargap) {

        var admissionObject ={
            id:admissionList.length+1,
            course:course,
            stream:stream,
            fee:fee,
            yeargap:selectedyeargap,
            marks:selectedmarks,
            startdate:startdate,
            enddate:enddate,
            examdate:examdate,
            resultdate:resultdate,
            
        }
    
            admissionList.push(admissionObject);
            console.log(admissionList);
            displayStudent(admissionList);
            displayFilter();
            displayFilter1();




        console.log('getting details',course,stream,fee,selectedyeargap,selectedmarks,startdate,enddate,examdate,resultdate);
    }
    else {
        alert('please provide full details')
    }
}


    
function displayStudent(list){
    
    var whereToDisplay = document.getElementById('admission-list');
    whereToDisplay.innerHTML = '';
  
    for(var i=0; i<list.length; i++) {
  
      var seqNum  = document.createElement('div');
      seqNum.innerText = list[i].id;
  
      var course = document.createElement('div');
      course.innerText = list[i].course;

      var stream =document.createElement('div');
      stream.innerText = list[i].stream;

      var fee = document.createElement('div');
      fee.innerText = list[i].fee;
    
      var selectedyeargap = document.createElement('div');
      selectedyeargap.innerText = list[i].yeargap;
    
      var selectedmarks = document.createElement('div');
      selectedmarks.innerText = list[i].marks;
  
      var startdate = document.createElement('div');
      startdate.innerText = list[i].startdate;

      var enddate = document.createElement('div');
      enddate.innerText = list[i].enddate;
    
      var examdate = document.createElement('div');
      examdate.innerText = list[i].examdate;

      var resultdate=document.createElement('div');
      resultdate.innerText = list[i].resultdate;
  
  
      var deleteStudnetBtton =  document.createElement('button');
      deleteStudnetBtton.setAttribute('data-id', list[i].id);
      deleteStudnetBtton.innerText = 'Delete';
      deleteStudnetBtton.onclick = deleteUser;
      
  
  
      var admissionRow = document.createElement('div');
      admissionRow.setAttribute('class', 'admission-row');
  
  
  
      admissionRow.appendChild(seqNum);
      admissionRow.appendChild(course);
      admissionRow.appendChild(stream);
      admissionRow.appendChild(fee);
      admissionRow.appendChild(selectedyeargap);
      admissionRow.appendChild(selectedmarks);
      admissionRow.appendChild(startdate);
      admissionRow.appendChild(enddate);
      admissionRow.appendChild(examdate);
      admissionRow.appendChild(resultdate);
      admissionRow.appendChild(deleteStudnetBtton);
  
      whereToDisplay.appendChild(admissionRow)
      
    }
     
  function deleteUser(e) {
    console.log('deleting user', e.target);
    console.log(typeof e.target.dataset.id);

    var id = parseInt(e.target.dataset.id);

  
    admissionList = admissionList.filter((student) => student.id !== id);

   
    displayStudent(admissionList);
  }

  

}

function displayFilter(){
    if(admissionList.length>0){

        var filterDiv=document.getElementById('filter');
        filterDiv.innerHTML=''
       
        var Filter=document.createElement('select');
        Filter.setAttribute('id','courceID');
        Filter.onchange=filterAplicationList;

        var course =document.createElement('option');
        course.text = "course";
        course.value = "course";
        
        var Btech=document.createElement('option');
        Btech.text = "Btech";
        Btech.value = "Btech";


        var Mtech=document.createElement('option');
        Mtech.text = "Mtech";
        Mtech.value = "Mtech";

        var MBA=document.createElement('option');
        MBA.text = "MBA";
        MBA.value = "MBA";

        var Phd=document.createElement('option');
        Phd.text = "Phd";
        Phd.value = "Phd";

        
        Filter.appendChild(course);
        Filter.appendChild(Btech);
        Filter.appendChild(Mtech);
        Filter.appendChild(MBA);
        Filter.appendChild(Phd);

       
        filterDiv.appendChild(Filter)
    }
}
function filterAplicationList(e){
    console.log(e.target.value);


    if(e.target.value!=='course'){
        var output = admissionList.filter((x)=>x.course===e.target.value );
        console.log(output);

        // find if stream is already selected
        // if already selected then furhter filter the list by steam as well
        var selectedStream  = document.getElementById('streamID').value;
       
        if(selectedStream && selectedStream !== 'stream') {
            output = output.filter((x)=>x.stream===selectedStream);
        }

        displayStudent(output)
    }
    else{
        displayStudent(admissionList)
    }
}


function displayFilter1(){
    if(admissionList.length>0){

        var filterDiv1=document.getElementById('filter1');
        filterDiv1.innerHTML=''
       
        var Filter1=document.createElement('select');
        Filter1.setAttribute('id', 'streamID')
        Filter1.onchange=filterAplicationList1;

        var stream =document.createElement('option');
        stream.text = "stream";
        stream.value = "stream";
        
        var CSE=document.createElement('option');
        CSE.text = "Computer Science";
        CSE.value = "Computer Science";


        var Mechanical=document.createElement('option');
        Mechanical.text = "Mechanical";
        Mechanical.value ="Mechanical";

        var Civil=document.createElement('option');
        Civil.text = "Civil";
        Civil.value = "Civil";

        var EE=document.createElement('option');
        EE.text = "Electical";
        EE.value = "Electical";

        var Aeronautical=document.createElement('option')
        Aeronautical.text = "Aeronautical";
        Aeronautical.value ="Aeronautical"; 

        
        Filter1.appendChild(stream);
        Filter1.appendChild(CSE);
        Filter1.appendChild(Mechanical);
        Filter1.appendChild(Civil);
        Filter1.appendChild(EE);
        Filter1.appendChild(Aeronautical);

       
        filterDiv1.appendChild(Filter1)
    }
}
function filterAplicationList1(e){
    console.log(e.target.value);
    if(e.target.value!=='stream'){
        
        // filter all the applications with selected cource
        var selectedCource = document.getElementById('courceID').value;
        var newList = admissionList.filter((x) => x.course === selectedCource);
        console.log('selected cource lsit ', newList)

        var output = newList.filter((x)=>x.stream===e.target.value );
        console.log(output);
        displayStudent(output)
    }
    else{
        displayStudent(admissionList)
    }
}







