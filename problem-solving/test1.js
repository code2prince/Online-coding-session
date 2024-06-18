const playerList = [
    {
        id: 1,
        name: 'Sachin',
        age: 46,
        height: 5.6,
        level: 'A+',
        type: 'batsmen',
    },
    {
        id: 2,
        name: 'Dhoni',
        age: 40,
        height: 5.8,
        level: 'A+',
        type: 'batsmen',
    },
    {
        id: 3,
        name: 'Kohli',
        age: 32,
        height: 5.8,
        level: 'A+',
        type: 'batsmen',
    },
    {
        id: 4,
        name: 'Pandya',
        age: 28,
        height: 5.9,
        level: 'B+',
        type: 'batsmen',
    },
    {
        id: 5,
        name: 'Siraj',
        age: 27,
        height: 5.8,
        level: 'B',
        type: 'bowler',
    },
    {
        id: 6,
        name: 'Pant',
        age: 28,
        height: 5.7,
        level: 'B+',
        type: 'keeper',
    },
    {
        id: 7,
        name: 'Karthik',
        age: 36,
        height: 5.7,
        level: 'B+',
        type: 'keeper',
    },
    {
        id: 8,
        name: 'Kumble',
        age: 48,
        height: 6.1,
        level: 'A',
        type: 'bowler',
    },
    {
        id: 9,
        name: 'Venkatesh Prasad',
        age: 50,
        height: 6.2,
        level: 'A',
        type: 'bowler',
    },
    {
        id: 10,
        name: 'Yuvraj',
        age: 40,
        height: 6.2,
        level: 'A',
        type: 'batsmen',
    },
    {
        id: 11,
        name: 'K L Rahul',
        age: 29,
        height: 5.10,
        level: 'A',
        type: 'batsmen',
    },
    {
        id: 12,
        name: 'Gambhir',
        age: 39,
        height: 5.6,
        level: 'A',
        type: 'batsmen',
    },
    {
        id: 13,
        name: 'boomrah',
        age: 29,
        height: 5.10,
        level: 'A',
        type: 'bowler',
    },
];


//1. Find all the players whoes height is 5.7 or less

const height = playerList.filter((x)=>x.height<=5.7);
console.log(height);
/*
[
    {
      id: 1,
      name: 'Sachin',
      age: 46,
      height: 5.6,
      level: 'A+',
      type: 'batsmen'
    },
    {
      id: 6,
      name: 'Pant',
      age: 28,
      height: 5.7,
      level: 'B+',
      type: 'keeper'
    },
    {
      id: 7,
      name: 'Karthik',
      age: 36,
      height: 5.7,
      level: 'B+',
      type: 'keeper'
    },
    {
      id: 10,
      name: 'K L Rahul',
      age: 29,
      height: 5.1,
      level: 'A',
      type: 'batsmen'
    },
    {
      id: 11,
      name: 'Gambhir',
      age: 39,
      height: 5.6,
      level: 'A',
      type: 'batsmen'
    },
    {
      id: 12,
      name: 'boomrah',
      age: 29,
      height: 5.1,
      level: 'A',
      type: 'bowler'
    }
  ] */

// 2. find all the players whose height is greater than 6.0

let height1 = playerList.filter((x)=>x.height > 6);
console.log(height1);

/*
[
  {
    id: 7,
    name: 'Kumble',
    age: 48,
    height: 6.1,
    level: 'A',
    type: 'bowler'
  },
  {
    id: 8,
    name: 'Venkatesh Prasad',
    age: 50,
    height: 6.2,
    level: 'A',
    type: 'bowler'
  },
  {
    id: 9,
    name: 'Yuvraj',
    age: 40,
    height: 6.2,
    level: 'A',
    type: 'batsmen'
  }
]
*/
// 3. find all the batsmen whose height is less than 6.0

let player=[];
for(i=0; i<playerList.length; i++){
  if(playerList[i].type==='batsmen' && playerList[i].height < 6){
    player.push(playerList[i]);
  }
}
console.log(player);

/*
[
  {
    id: 1,
    name: 'Sachin',
    age: 46,
    height: 5.6,
    level: 'A+',
    type: 'batsmen'
  },
  {
    id: 2,
    name: 'Dhoni',
    age: 40,
    height: 5.8,
    level: 'A+',
    type: 'batsmen'
  },
  {
    id: 3,
    name: 'Kohli',
    age: 32,
    height: 5.8,
    level: 'A+',
    type: 'batsmen'
  },
  {
    id: 4,
    name: 'Pandya',
    age: 28,
    height: 5.9,
    level: 'B+',
    type: 'batsmen'
  },
  {
    id: 11,
    name: 'K L Rahul',
    age: 29,
    height: 5.1,
    level: 'A',
    type: 'batsmen'
  },
  {
    id: 12,
    name: 'Gambhir',
    age: 39,
    height: 5.6,
    level: 'A',
    type: 'batsmen'
  }
]
*/

// 4. find all the batsmen whose height is greater than 6.0

let player1=[];
for(i=0; i<playerList.length; i++){
  if(playerList[i].type==='batsmen' && playerList[i].height>6){
    player1.push(playerList[i]);
  }
}
console.log(player1);

/*

{
    id: 10,
    name: 'Yuvraj',
    age: 40,
    height: 6.2,
    level: 'A',
    type: 'batsmen'
  }

*/

// 5. find all the bowlers whose height is greater than 6.0

let player2=[];
for(i=0; i<playerList.length; i++){
  if(playerList[i].type==='bowler' && playerList[i].height>6){
    player2.push(playerList[i]);
  }
}
console.log(player2);

/*
[
  {
    id: 8,
    name: 'Kumble',
    age: 48,
    height: 6.1,
    level: 'A',
    type: 'bowler'
  },
  {
    id: 9,
    name: 'Venkatesh Prasad',
    age: 50,
    height: 6.2,
    level: 'A',
    type: 'bowler'
  }
]
*/

// 6. find all the bowlers whose age is less than 30

let players=[];
for(let i=0;i<playerList.length;i++){
  if(playerList[i].type==='bowler' && playerList[i].age < 30){
    players.push(playerList[i]);
  }
}
console.log(players);

/*
  [
  {
    id: 5,
    name: 'Siraj',
    age: 27,
    height: 5.8,
    level: 'B',
    type: 'bowler'
  },
  {
    id: 13,
    name: 'boomrah',
    age: 29,
    height: 5.1,
    level: 'A',
    type: 'bowler'
  }
]
  */

// 7. find all the bowlers whoes age is greater than 30

let players1=[];
for(i=0; i<playerList.length; i++){
  if(playerList[i].type==='bowler' && playerList[i].age>30){
    players1.push(playerList[i]);
  }
}
console.log(players1);

/*
[
  {
    id: 8,
    name: 'Kumble',
    age: 48,
    height: 6.1,
    level: 'A',
    type: 'bowler'
  },
  {
    id: 9,
    name: 'Venkatesh Prasad',
    age: 50,
    height: 6.2,
    level: 'A',
    type: 'bowler'
  }
]
*/

// 8. find all the bowlers whoes level is A

let bowlers=[];
for(i=0; i<playerList.length; i++){
  if(playerList[i].type==='bowler' && playerList[i].level==='A'){
    bowlers.push(playerList[i]);
  }
}
console.log(bowlers);

/*
[
  {
    id: 8,
    name: 'Kumble',
    age: 48,
    height: 6.1,
    level: 'A',
    type: 'bowler'
  },
  {
    id: 9,
    name: 'Venkatesh Prasad',
    age: 50,
    height: 6.2,
    level: 'A',
    type: 'bowler'
  },
  {
    id: 13,
    name: 'boomrah',
    age: 29,
    height: 5.1,
    level: 'A',
    type: 'bowler'
  }
]
*/

// 9. find all the batsmen whose level is A+

let batsmens=[];
for(i=0; i<playerList.length; i++){
  if(playerList[i].type==='batsmen' && playerList[i].level==='A+'){
    batsmens.push(playerList[i]);
  }
}
console.log(batsmens);

/*
[
  {
    id: 1,
    name: 'Sachin',
    age: 46,
    height: 5.6,
    level: 'A+',
    type: 'batsmen'
  },
  {
    id: 2,
    name: 'Dhoni',
    age: 40,
    height: 5.8,
    level: 'A+',
    type: 'batsmen'
  },
  {
    id: 3,
    name: 'Kohli',
    age: 32,
    height: 5.8,
    level: 'A+',
    type: 'batsmen'
  }
]
*/

// 10. find all the batsmen whoes level is A

let batsmen1=[];
for(i=0; i<playerList.length; i++){
  if(playerList[i].type==='batsmen' && playerList[i].level==='A'){
    batsmen1.push(playerList[i]);
  }
}
console.log(batsmen1);

/*
[
  {
    id: 10,
    name: 'Yuvraj',
    age: 40,
    height: 6.2,
    level: 'A',
    type: 'batsmen'
  },
  {
    id: 11,
    name: 'K L Rahul',
    age: 29,
    height: 5.1,
    level: 'A',
    type: 'batsmen'
  },
  {
    id: 12,
    name: 'Gambhir',
    age: 39,
    height: 5.6,
    level: 'A',
    type: 'batsmen'
  }
]
*/

// 11. find all keeper

const keep= playerList.filter((x)=>x.type==='keeper');
console.log(keep);


/*
[
  {
    id: 6,
    name: 'Pant',
    age: 28,
    height: 5.7,
    level: 'B+',
    type: 'keeper'
  },
  {
    id: 7,
    name: 'Karthik',
    age: 36,
    height: 5.7,
    level: 'B+',
    type: 'keeper'
  }
]
*/