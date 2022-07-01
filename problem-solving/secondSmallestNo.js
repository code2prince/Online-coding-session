
var list = [
    {
        sequence: 1,
        number: 5,
    },
    {
        sequence: 2,
        number: 11,
    },
    {
        sequence: 3,
        number: 9,
    },
    {
        sequence: 4,
        number: 51,
    },
    {
        sequence: 5,
        number: 12,
    },
    {
        sequence: 6,
        number: 50,
    },
];

var array=[2,5,42,-9,0,-3,1,7];
function findSecondSmallest(array) {
    array.sort((a, b) => a - b);
    var secSmall = array[1];
    console.log(secSmall);
}
findSecondSmallest(array);

//find the 2nd smallest no (by using bubble sort)

function secondSmallest(){
    for(i=0; i<list.length; i++ ){
        for(j=0; j<i; j++)
        {
            if( list[j].number> list[j+1].number){

                // swap
                var temp=list[j];
                list[j]=list[j+1];
                list[j+1]= temp;
            }
        }
       
    }
    // at 1st position we will get 2nd smallest element into a sorted list
    console.log(list[1]);  

}
secondSmallest()




