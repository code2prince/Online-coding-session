// work on array
//method 1
var array=[1,2,3,4,5,6,7,8,9];
console.log(array)

console.log(array[4])

console.log(array[array.length-1])

//method2
var array=new Array(1,2,3,4,5,6,7,8);
console.log(array[array.length-1])

//push (it will push/add element at the end of the array)

//array.push(10)
console.log(array.push(10))



var num= new Array(1,2,3,4,5);
   //num.push(6)
console.log(num.push(6))
//1,2,3,4,5,6

//unshift (I will add element at the starting of the array )

var num= new Array(1,2,3,4,5);
    //num.unshift(18)
console.log(num.unshift(18))
// 18,1,2,3,4,5,6,7


//pop (Remove the element from last)
var num= new Array(1,2,3,4,5,6,7,10);
 //num.pop()
 console.log(num.pop())

 //shift(Remove the First element )
 var num= new Array(1,2,3,4,5);
 //num.shift()
 console.log(num.shift())


 //injecting the array
 var num= new Array(1,2,3,4,5);
 num[0]='Prince'
 console.log(num)

 num[1]='88'
 num[2]={number:123}
 console.log(num)
 //

 var array=[1,23,33];
 array[2]='24'
 console.group(array)

 var names=['prince','sharma','Raj','Rajeev'];
 console.log(names);

 //IndexOf method
 console.log(names.indexOf('Rajeev'));
 console.log(names.indexOf('ram'));
 //It will show -1 because ram does not exist in our array

 //lastIndexOf (it checks from last of the list)

 var names=['pk','sharma','prince','raj','sharma'];
 console.log(names.lastIndexOf('sharma'));

 // o/p:- 4 

 //includes method (it is a boolean data type uses for premitive data type only)

 names=['prince','sharma','Raj','Rajeev'];
 console.log(names.includes('Raj'));

 //.find() (It can be used for both reference & premitive data type to find an object)

 let students=[
     {
         name:'Prince',
         email :'princekumarsharma365@gmail.com',
         phone: 8888888888,
    },
    {
        name:'Amit',
        email:'amit@gmail.com',
        phone: 7777777777,
    }
];
//console.log(students.findstudent => student.name ==='Amit');
console.log(students.find(function(element){
    return element.name==='Prince'
}));
/*  name: 'Prince',
email: 'princekumarsharma365@gmail.com',
phone: 8888888888 */

// concat method (uses to add element)

var name1=['Amit','Prince','sharma'];
var name2=['raj','rajeev','kumar'];
 console.log(name1.concat(name2));
// [ 'Amit', 'Prince', 'sharma', 'raj', 'rajeev', 'kumar' ]

 console.log(name1.concat('Yash'))
// [ 'Amit', 'Prince', 'sharma', 'Yash' ]

console.log(name2.concat('Ram','Rahul'))
// [ 'raj', 'rajeev', 'kumar', 'Ram', 'Rahul' ]

//slice method (uses to remove element before and after and print the value in between)

var name= [ 'Amit', 'Prince', 'sharma', 'raj', 'rajeev', 'kumar' ];
console.log(name.slice(3));
// [ 'raj', 'rajeev', 'kumar' ] 

console.log(name.slice(2,5))
//   [ 'sharma', 'raj', 'rajeev' ]

//spread operator (used to add like concat)

var name1=['Amit','Prince','sharma'];
var name2=['raj','rajeev','kumar'];
var name3=[...name1,...name2];
console.log(name3);
//   [ 'Amit', 'Prince', 'sharma', 'raj', 'rajeev', 'kumar' ]


//for loop
var names=[ 'Amit', 'Prince', 'sharma', 'raj', 'rajeev', 'kumar' ];
for(let i=0;i<names.length;i++){
    console.log(names[i]);
} 
/* Amit
Prince
sharma
raj
rajeev
kumar
 */

//forof
var names=[ 'Amit', 'Prince', 'sharma', 'raj', 'rajeev', 'ram' ];
for(let name of names){
    console.log(name)
}
/*Amit
Prince
sharma
raj
rajeev
ram
*/

//forEach
var names=[ 'Amit', 'Prince', 'sharma', 'raj', 'rajeev', 'ram' ];
names.forEach(function(name,index){
    console.log(name,index);
})
/* Amit 0
  Prince 1
  sharma 2
  raj 3
  rajeev 4
  ram 5
  */

//join method( uses to add the elements of the array in a string)

var name=['P','r','i','n','c','e'];
console.log(name.join());
//  P,r,i,n,c,e

console.log(name.join(''));
//  Prince

console.log(name.join('-'));
//  P-r-i-n-c-e

