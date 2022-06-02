var students = [
    {
        id: 1,
        name: 'ankit',
        gender: 'm',
        qualification: '10th',
        markPercent: 58,
        yearGap: 'no'
    },
    {
        id: 2,
        name: 'ankita',
        gender: 'f',
        qualification: '10th',
        markPercent: 62,
        yearGap: 'no'
    },
    {
        id: 3,
        name: 'seema',
        gender: 'f',
        qualification: '10th',
        markPercent: 61,
        yearGap: 'yes'
    },
    {
        id: 4,
        name: 'amit',
        gender: 'm',
        qualification: '10th',
        markPercent: 75,
        yearGap: 'no'
    },
    {
        id: 5,
        name: 'rahul',
        gender: 'm',
        qualification: '10th',
        markPercent: 85,
        yearGap: 'no'
    },
    {
        id: 6,
        name: 'Meena',
        gender: 'f',
        qualification: '10th',
        markPercent: 75,
        yearGap: 'no'
    },
    {
        id: 7,
        name: 'Amar',
        gender: 'm',
        qualification: '10th',
        markPercent: 65,
        yearGap: 'no'
    },
    {
        id: 8,
        name: 'raj',
        gender: 'm',
        qualification: '10th',
        markPercent: 60,
        yearGap: 'no'
    },
    {
        id: 9,
        name: 'ragini',
        gender: 'f',
        qualification: '10th',
        markPercent: 59,
        yearGap: 'no'
    },
    {
        id: 10,
        name: 'jai',
        gender: 'm',
        qualification: '10th',
        markPercent: 63,
        yearGap: 'no'
    }
];



function printTable() {
    var table = document.createElement('table');
    var tr = document.createElement('tr');

    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th4 = document.createElement('th');
    var th5 = document.createElement('th');
    var th6 = document.createElement('th');

    th1.innerText = 'ID';
    th2.innerText = 'Name';
    th3.innerText = 'Gender';
    th4.innerText = 'Qualification';
    th5.innerText = 'MarksPercent';
    th6.innerText = 'Year Gap';

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);

    table.appendChild(tr);

    
    for (var i = 0; i < students.length; i++) {
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');

        td1.innerText = students[i].id;
        td2.innerText = students[i].name;
        td3.innerText = students[i].gender;
        td4.innerText = students[i].qualification;
        td5.innerText = students[i].markPercent;
        td6.innerText = students[i].yearGap;

        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        table.appendChild(tr);
    }
    table.setAttribute('border', 1);

    document.getElementById('studnet-list').appendChild(table);

    var p = document.createElement('p');
    p.innerText = "find me";
    document.body.appendChild(p);


}

function createStudentCard() {

    for (var i = 0; i < students.length; i++) {
        var studentCard = document.createElement('div');
        var name = document.createElement('h4');
        name.innerText = students[i].name;

        var marks = document.createElement('div');
        marks.innerText = students[i].markPercent;

        studentCard.appendChild(name);
        studentCard.appendChild(marks);


        document.getElementById('studnet-card').appendChild(studentCard);
    }


}

printTable();

createStudentCard();