const playerList = [
    {
        batsmenNo: 1,
        name: 'Sachin',
        runs: 105,
        single: 23,
        double: 9,
        three: 2,
        four: 13,
        six: 1,
    },
    {
        batsmenNo: 2,
        name: 'Sehwag',
        runs: 40,
        single: 4,
        double: 1,
        three: 0,
        four: 7,
        six: 1,
    },
    {
        batsmenNo: 3,
        name: 'Gambir',
        runs: 15,
        single: 5,
        double: 1,
        three: 0,
        four: 2,
        six: 0,
    },
    {
        batsmenNo: 4,
        name: 'Kohli',
        runs: 28,
        single: 10,
        double: 2,
        three: 0,
        four: 3,
        six: 0,
    },
    {
        batsmenNo: 5,
        name: 'Rohit',
        runs: 35,
        single: 5,
        double: 4,
        three: 0,
        four: 4,
        six: 1,
    },
    {
        batsmenNo: 6,
        name: 'Yuvraj',
        runs: 44,
        single: 12,
        double: 2,
        three: 0,
        four: 3,
        six: 3,
    },
    {
        batsmenNo: 6,
        name: 'Dhoni',
        runs: 18,
        single: 2,
        double: 0,
        three: 0,
        four: 4,
        six: 0,
    },
    {
        batsmenNo: 7,
        name: 'Zadeja',
        runs: 0,
        single: 0,
        double: 0,
        three: 0,
        four: 0,
        six: 0,
    },
    {
        batsmenNo: 8,
        name: 'Zaheer',
        runs: 0,
        single: 0,
        double: 0,
        three: 0,
        four: 0,
        six: 0,
    },
    {
        batsmenNo: 9,
        name: 'Nehra',
        runs: 0,
        single: 0,
        double: 0,
        three: 0,
        four: 0,
        six: 0,
    },
    {
        batsmenNo: 10,
        name: 'Harbhajan',
        runs: 0,
        single: 0,
        double: 0,
        three: 0,
        four: 0,
        six: 0,
    },
    {
        batsmenNo: 11,
        name: 'RP Singh',
        runs: 0,
        single: 0,
        double: 0,
        three: 0,
        four: 0,
        six: 0,
    },
];


//1. get the total no of RUNs scored by all batsmen




let totalRun=0;
for(i=0;i<playerList.length; i++)
{
    totalRun+= playerList[i].runs;
}
console.log("Total Score: ", totalRun)

// Total Score: 285


// total boundry 

let boundry=0;
for(i=0; i<playerList.length; i++){
    boundry+= ((playerList[i].four) + (playerList[i].six));
}
console.log("total boundries:" , boundry);

// highest no of singles by a batsmen

let highestSingle=0;
for(i=0; i<playerList.length; i++){
    highestSingle+=( playerList[i].single) || (playerList[i].single)
}
console.log("highest Single:", highestSingle);

// 2. get the total no of FOURs hit by all batsmen

let fourHit=0;
for(i=0; i<playerList.length; i++)
{
   fourHit+= playerList[i].four; 
}
console.log("All fours:" ,fourHit);

// All fours: 36

// 3. get the total no of SIXs hit by all batsmen

let totalSix=0;
for(i=0; i<playerList.length; i++)
{
    totalSix+=playerList[i].six;
}
console.log("All Total sixes :", totalSix );

//All Total sixes: 6

// 4. get the total no of SINGLEs scrored by all batsmen

let single=0;
for(i=0; i<playerList.length; i++)
{
    single+=playerList[i].single;
}
console.log("Total Singles:" ,single);

//Total Singles: 61

// 5. get the total no of DOUBLEs scrored by all batsmen

let double=0;
for(i=0; i<playerList.length; i++)
{
    double+= playerList[i].double;
}
console.log("Total doubles:", double);

//Total doubles: 19

// 6. get the total no of THREEs scrored by all batsmen
let three=0;
for(i=0; i<playerList.length; i++)
{
    three+= playerList[i].three;
}
console.log("Total Three:", three);

//Total Three: 2;


// total players  name-List


for(i=0;i<playerList.length; i++){
    console.log(playerList[i].name);
}


// Sachin
// Sehwag
// Gambir
// Kohli
// Rohit
// Yuvraj
// Dhoni
// Zadeja
// Zaheer
// Nehra
// Harbhajan
// RP Singh