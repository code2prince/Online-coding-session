var DailySharePrice=[
    {
        date:"01-06-2022",
        price: 100,

    },
    {
        date:"02-06-2022",
        price: 102,

    },
    {
        date:"03-06-2022",
        price: 98,

    },

    {
        date:"04-06-2022",
        price: 95,

    },
    {
        date:"05-06-2022",
        price: 101,

    },
    {
        date:"06-06-2022",
        price: 105,

    },
    {
        date:"07-06-2022",
        price: 110,

    },

]
// 1.lowest share price date

let lowestPrice=DailySharePrice[0].price; 
for(i=0; i<DailySharePrice.length; i++){
    if(DailySharePrice[i].price < lowestPrice){
        lowestPrice=DailySharePrice[i].price;
        low=DailySharePrice[i].date;
    }
}
console.log("lowest share price and date:", lowestPrice,low);





//highest share date
let highestPrice=DailySharePrice[0].price;
for(i=0; i<DailySharePrice.length; i++){
    if(DailySharePrice[i].price >  highestPrice){
      
       highestPrice=DailySharePrice[i].price;
       high=DailySharePrice[i].date

    }
}
console.log("highest share price:",highestPrice ,"date:" ,high);