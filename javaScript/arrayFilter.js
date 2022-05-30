var student = [
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



/*
1 find all the students who has got marks equal or greater than 60%
*/
var output = student.filter((x) => x.markPercent >=60);
console.log(output);


/*
2 find all the students who has got marks less than 60%
*/
var less = student.filter((x) => x.markPercent <60);
console.log(less);


/*
3 find all the students who has year gap
*/
var out = student.filter((x) => x.yearGap ==="yes");
console.log(out);
/*
4 find all the students who has no year gap
*/
var out1 = student.filter((x) => x.yearGap ==="no");
console.log(out1);






/*var out = register.map((x) => x.name);
console.log(out);
/*  [ 'ankit',
  'ankita',
  'seema',
  'amit',
  'rahul',
  'Meena',
  'Amar',
  'raj',
  'ragini',
  'jai' ]
*/