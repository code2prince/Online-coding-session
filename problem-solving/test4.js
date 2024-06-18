const mobileList =[
    {   
        itemNO:1,
        name: 'Mi',
        model: 'note T',
        price: 10999,
        Variant: '5G',
        RAMinGB: 4,
        ROMinGB: 64,
        batteryinMah:5000,
    },
    {
        itemNO:2,
        name: 'Realme',
        model: 'C35',
        price: 11999,
        Variant: '5G',
        RAMinGB: 4,
        ROMinGB: 64,
        batteryinMah:5000,
    },
    {
        itemNO:3,
        name: 'Poco',
        model: 'M4 Pro',
        price: 24999,
        Variant: '5G',
        RAMinGB: 8,
        ROMinGB: 128,
        batteryinMah:6000,
    },
    {
        itemNO:4,
        name: 'Oppo',
        model: 'K 10',
        price: 17999,
        Variant: '5G',
        RAMinGB: 8,
        ROMinGB: 128,
        batteryinMah:5000,
    },
    {
        itemNO:5,
        name: 'Infinix',
        model: 'Note 12',
        price: 14999,
        Variant: '4G',
        RAMinGB: 8,
        ROMinGB: 128,
        batteryinMah:5000,
    },
    {
        itemNO:6,
        name: 'Vivo',
        model: 'T1 4400',
        price: 14999,
        Variant: '4G',
        RAMinGB: 4,
        ROMinGB: 128,
        batteryinMah:5000,
    },
    {
        itemNO:7,
        name: 'Realme',
        model: 'Narzo 50A',
        price: 11999,
        Variant: '4G',
        RAMinGB: 4,
        ROMinGB: 64,
        batteryinMah:6000,
    },
    {
        itemNO:8,
        name: 'Samsung',
        model: 'Galaxy A12',
        price: 12999,
        Variant: '4G',
        RAMinGB: 4,
        ROMinGB: 64,
        batteryinMah:5000,
    },
    {
        itemNO:9,
        name: 'Samsung',
        model: 'Galaxy F22',
        price: 11499,
        Variant: '4G',
        RAMinGB: 4,
        ROMinGB: 64,
        batteryinMah:6000,
    },
    {
        itemNO:10,
        name: 'Oppo',
        model: 'T1 5G',
        price: 16999,
        Variant: '5G',
        RAMinGB: 6,
        ROMinGB: 128,
        batteryinMah:5000,
    },
]
// 1. All 5G Mobile

const fiveG= mobileList.filter((x)=>x.Variant==='5G');
console.log(fiveG);


//2. All 4G Mobiles

const fourG= mobileList.filter((x)=>x.Variant==='4G')
console.log("All 4G mobiles", fourG);

//3. Mobiles having price more than 15000

const price=mobileList.filter((x)=>x.price>15000);
console.log("15000+ mobiles",price);

//4 Lowest price Mobile
let lowestPrice=mobileList[0].price;
var low=mobileList[0].name;
for(i=1; i<mobileList.length; i++){
    if(mobileList[i].price < lowestPrice){
       lowestPrice=mobileList[i].price;
       low= mobileList[i].name;
    }
 
}
console.log("low price:",lowestPrice,"name of mobile :",low);

// low price: 10999 name of mobile : Mi

// 5 Highest Price Mobile

let highestPrice=0;
var high;
for(i=0; i<mobileList.length; i++){
    if(mobileList[i].price > highestPrice){
        highestPrice=mobileList[i].price;
       high=mobileList[i];
    }
}
console.log("highest price:", highestPrice,"high price mobile name:",high.name);

// highest price: 24999 high price mobile name: Poco



//mobile having battery 6000 mah

const battery= mobileList.filter((x)=>x.batteryinMah ===6000)
console.log("mobile having battery more than 6000mah:",battery);

/*  mobile having battery more than 6000mah: [
  {
    itemNO: 3,
    name: 'Poco',
    model: 'M4 Pro',
    price: 24999,
    Variant: '5G',
    RAMinGB: 8,
    ROMinGB: 128,
    batteryinMah: 6000
  },
  {
    itemNO: 7,
    name: 'Realme',
    model: 'Narzo 50A',
    price: 11999,
    Variant: '4G',
    RAMinGB: 4,
    ROMinGB: 64,
    batteryinMah: 6000
  },
  {
    itemNO: 9,
    name: 'Samsung',
    model: 'Galaxy F22',
    price: 11499,
    Variant: '4G',
    RAMinGB: 4,
    ROMinGB: 64,
    batteryinMah: 6000
  }
] */

// Mobile having   4gb RAM

const ram= mobileList.filter((x)=>x.RAMinGB === 4)
console.log(" mobile having Ram  4 Gb:", ram);

/*
 mobile having Ram  4 Gb: [
  {
    itemNO: 1,
    name: 'Mi',
    model: 'note T',
    price: 10999,
    Variant: '5G',
    RAMinGB: 4,
    ROMinGB: 64,
    batteryinMah: 5000
  },
  {
    itemNO: 2,
    name: 'Realme',
    model: 'C35',
    price: 11999,
    Variant: '5G',
    RAMinGB: 4,
    ROMinGB: 64,
    batteryinMah: 5000
  },
  {
    itemNO: 6,
    name: 'Vivo',
    model: 'T1 4400',
    price: 14999,
    Variant: '4G',
    RAMinGB: 4,
    ROMinGB: 128,
    batteryinMah: 5000
  },
  {
    itemNO: 7,
    name: 'Realme',
    model: 'Narzo 50A',
    price: 11999,
    Variant: '4G',
    RAMinGB: 4,
    ROMinGB: 64,
    batteryinMah: 6000
  },
  {
    itemNO: 8,
    name: 'Samsung',
    model: 'Galaxy A12',
    price: 12999,
    Variant: '4G',
    RAMinGB: 4,
    ROMinGB: 64,
    batteryinMah: 5000
  },
  {
    itemNO: 9,
    name: 'Samsung',
    model: 'Galaxy F22',
    price: 11499,
    Variant: '4G',
    RAMinGB: 4,
    ROMinGB: 64,
    batteryinMah: 6000
  }
]
*/
//Mobile having atleast  6GB RAM

let mobileRam=[];
for(i=0; i<mobileList.length; i++){
    if(mobileList[i].RAMinGB>=6){
        mobileRam.push(mobileList[i]);
    }
}
console.log("Ram atleast 6Gb :", mobileRam);


/*
Ram atleast 6Gb : [
  {
    itemNO: 3,
    name: 'Poco',
    model: 'M4 Pro',
    price: 24999,
    Variant: '5G',
    RAMinGB: 8,
    ROMinGB: 128,
    batteryinMah: 6000
  },
  {
    itemNO: 4,
    name: 'Oppo',
    model: 'K 10',
    price: 17999,
    Variant: '5G',
    RAMinGB: 8,
    ROMinGB: 128,
    batteryinMah: 5000
  },
  {
    itemNO: 5,
    name: 'Infinix',
    model: 'Note 12',
    price: 14999,
    Variant: '4G',
    RAMinGB: 8,
    ROMinGB: 128,
    batteryinMah: 5000
  },
  {
    itemNO: 10,
    name: 'Oppo',
    model: 'T1 5G',
    price: 16999,
    Variant: '5G',
    RAMinGB: 6,
    ROMinGB: 128,
    batteryinMah: 5000
  }
]

*/


//mobile having atleast 6gb RAM and 6000 mah battery


let mobileItem=[];
for(i=0; i<mobileList.length; i++){
    if(mobileList[i].RAMinGB>=6 && mobileList[i].batteryinMah===6000){
        mobileItem.push(mobileList[i]);
    }
}
console.log(mobileItem);

/*
[
  {
    itemNO: 3,
    name: 'Poco',
    model: 'M4 Pro',
    price: 24999,
    Variant: '5G',
    RAMinGB: 8,
    ROMinGB: 128,
    batteryinMah: 6000
  }
]
*/

//mobile having 4gb Ram and 5000 mah battery

let mobileItems=[];
for(i=0; i<mobileList.length; i++){
    if(mobileList[i].RAMinGB===4 && mobileList[i].batteryinMah===5000){
        mobileItems.push(mobileList[i]);
    }
}
console.log("mobile items 4gb ram and 5000 mah battery",mobileItems);

/*
mobile items 4gb ram and 5000 mah battery [
  {
    itemNO: 1,
    name: 'Mi',
    model: 'note T',
    price: 10999,
    Variant: '5G',
    RAMinGB: 4,
    ROMinGB: 64,
    batteryinMah: 5000
  },
  {
    itemNO: 2,
    name: 'Realme',
    model: 'C35',
    price: 11999,
    Variant: '5G',
    RAMinGB: 4,
    ROMinGB: 64,
    batteryinMah: 5000
  },
  {
    itemNO: 6,
    name: 'Vivo',
    model: 'T1 4400',
    price: 14999,
    Variant: '4G',
    RAMinGB: 4,
    ROMinGB: 128,
    batteryinMah: 5000
  },
  {
    itemNO: 8,
    name: 'Samsung',
    model: 'Galaxy A12',
    price: 12999,
    Variant: '4G',
    RAMinGB: 4,
    ROMinGB: 64,
    batteryinMah: 5000
  }
]
*/
//find total amount invested by seller at  mobiles store 


let total=0;
for(i=0; i<mobileList.length; i++ ){
    total+= mobileList[i].price;
}
console.log("total amount :", total);

// total amount : 149490

