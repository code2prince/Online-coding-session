const candidateList = [
    {
        enrollmentId: 1,
        marks: 65,
        caste: 'General',
    },
    {
        enrollmentId: 2,
        marks: 70,
        caste: 'OBC',
    },
    {
        enrollmentId: 3,
        marks: 65,
        caste: 'SC/ST',
    },
    {
        enrollmentId: 4,
        marks: 50,
        caste: 'OBC',
    },
    {
        enrollmentId: 5,
        marks: 79,
        caste: 'General',
    },
    {
        enrollmentId: 6,
        marks: 82,
        caste: 'General',
    },
    {
        enrollmentId: 7,
        marks: 73,
        caste: 'General',
    },
    {
        enrollmentId: 8,
        marks: 77,
        caste: 'General',
    },
    {
        enrollmentId: 9,
        marks: 52,
        caste: 'SC/ST',
    },
    {
        enrollmentId: 10,
        marks: 61,
        caste: 'OBC',
    },
    {
        enrollmentId: 11,
        marks: 69,
        caste: 'General',
    },
    {
        enrollmentId: 12,
        marks: 74,
        caste: 'General',
    },
    {
        enrollmentId: 13,
        marks: 68,
        caste: 'General',
    },
    {
        enrollmentId: 14,
        marks: 78,
        caste: 'General',
    },
    {
        enrollmentId: 15,
        marks: 48,
        caste: 'General',
    },
];

/**
 * Above list is SSC exam result. CUtoff mark is 75 or above
 * A general cadidate has no benefit, he has to score 75 or above to qualify the exam
 * A OBC candidate has 5 marks benefit. it means, 5 extra marks will be awarded to him
 * A SC/ST candidate has 10 marks benefit, it means, 10 extra marks will be awarded to him
 */

// For example:- enrollmentId: 2 is OBC and has scored 70 marks. He will be awarded 5 extra marks
// so his total becomes 75 and he/she also qualify exam.


// Que- 1:- Find all qualified candidates (Do not apply any benefit)
const candidate= candidateList.filter((x)=> x.marks>75);
console.log(candidate);
/*
{ enrollmentId: 5, marks: 79, caste: 'General' },
{ enrollmentId: 6, marks: 82, caste: 'General' },
{ enrollmentId: 8, marks: 77, caste: 'General' },
{ enrollmentId: 14, marks: 78, caste: 'General' }
*/


// Que- 2:- Find all qualified candidates (apply OBC and SC/ST benefits)
let allCandidate=[];
for(i=0; i<candidateList.length; i++){
   if(candidateList[i].caste==='General' && candidateList[i].marks>=75 || candidateList[i].caste==='OBC' && candidateList[i].marks>=70 || candidateList[i].caste==='SC/ST' && candidateList[i].marks>=65 ) {
       allCandidate.push(candidateList[i]);
   }
}

candidateList.filter( x => {
    let isQualified = false;
    if(x.marks >= 75) {
        isQualified = true;
    }
    if(x.caste === 'OBC' && x.marks+5 >=75) {
        isQualified = true;
    }
    if(x.caste === 'SC/ST' && x.marks+10 >=75) {
        isQualified = true;
    }
    return isQualified;
});

candidateList.map(x => {
    if(x.caste === 'OBC') {
        return {
            ...x,
            marks: x.marks+5
        }
    }
    if(x.caste === 'SC/ST') {
        return {
            ...x,
            marks: x.marks+10
        }
    }
}).filter(x => x.marks >=75);


console.log(allCandidate);

/*
 { enrollmentId: 2, marks: 70, caste: 'OBC' },
  { enrollmentId: 3, marks: 65, caste: 'SC/ST' },
  { enrollmentId: 5, marks: 79, caste: 'General' },
  { enrollmentId: 6, marks: 82, caste: 'General' },
  { enrollmentId: 8, marks: 77, caste: 'General' },
  { enrollmentId: 14, marks: 78, caste: 'General' }

*/

// Que- 3:- Find all OBC candidates who have qualified exam becasue of benefit given.
let candidate1=[];
for(i=0; i<candidateList.length; i++){
    if(candidateList[i].caste==='OBC' && candidateList[i].marks>=70){
        candidate1.push(candidateList[i]);
    }
}
console.log(candidate1);

// [ { enrollmentId: 2, marks: 70, caste: 'OBC' } ]

// Que- 4:- Find all SC/ST candidates who have qualified exam becasue of benefit given.

let scSt=[];
for(i=0; i<candidateList.length; i++){
    if(candidateList[i].caste==='SC/ST' && candidateList[i].marks >= 65){
        scSt.push(candidateList[i]);
    }
}
console.log(scSt);

// [ { enrollmentId: 3, marks: 65, caste: 'SC/ST' } ]

// Que- 5:- Find all OBC candidates who have qualified exam without benefit.
let obc=[];
for(i=0; i<candidateList.length; i++){
    if(candidateList[i].caste==='OBC' && candidateList[i].marks >=75){
        obc.push(candidateList[i]);
    }
}
console.log(obc);

// []  no any OBC candidates are their in list

// Que- 6:- Find all SC/ST candidates who have qualified exam without benefit.

let candidateScST=[];
for(i=0; i<candidateList.length; i++){
    if(candidateList[i].caste==='SC/ST' && candidateList[i].marks>= 75){
        candidateScST.push(candidateList[i]);
    }
}
console.log(candidateScST);

// Que- 7:- Find all OBC & SC/ST candidates who have qualified exam becasue of benefit given.
let candidate2 =[];
for(i=0; i<candidateList.length; i++){
    if(candidateList[i].caste==='OBC' && candidateList[i].marks >=70 || candidateList[i].caste==='SC/ST' && candidateList[i].marks>=65){
        candidate2.push(candidateList[i]);
    }
}
console.log(candidate2);

/*
[
  { enrollmentId: 2, marks: 70, caste: 'OBC' },
  { enrollmentId: 3, marks: 65, caste: 'SC/ST' }
]
*/

// Que- 8:- Find all OBC & SC/ST candidates who have qualified exam without benefit.
let candidate3=[];
for(i=0; i<candidateList.length; i++){
    if(candidateList[i].caste==='OBC'  && candidateList[i].marks>=75 || candidateList.caste==='SC/ST' && candidateList.marks>=75){
        candidate3.push(candidateList[i]);
    }
}
console.log(candidate3);

// [] 

// Que- 9:- Find total no of students who have cleared exam (apply benefit).

let totalCandidate=0;
for(i=0; i<candidateList.length; i++){
    totalCandidate+= candidateList[i].caste==='General' && candidateList[i].marks>=75  || candidateList[i].caste==='OBC' && candidateList[i].marks>=70 || candidateList[i].caste==='SC/ST' && candidateList[i].marks>=65 ;
}
console.log(totalCandidate);
 
// 6