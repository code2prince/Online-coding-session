console.log('hello');
/*var list1=[];
var list2=[];
var list3=[];
var n=1;
var x=0;


function addStudent()
{ 
   var addrow=document.getElementById('show');
   var newrow= addrow.insertrow(n);
   list1[x]= document.getElementById("name").value;
   list2[x]= document.getElementById("email").value;
   list3[x]= document.getElementById("number").value;

   var cell1= newrow.insertCell(0);
   var cell2= newrow.insertCell(1);
   var cell3= newrow.insertCell(2);
   cell1.innerHTML=list1[x];
   cell2.innerHTML=list2[x];
   cell3.innerHTML=list3[x];
   n++;
   x++;
}


  /*  var name = document.sample.name.value;
    var email = document.sample.email.value;
    var phone = document.sample.phone.value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));

    td1.innerHTML='name';
    td2.innerHTML='email';
    td3.innerHTML='number';

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
   

    table.appendChild(tr);



document.getElementById("td1").appendChild("td2");
}
