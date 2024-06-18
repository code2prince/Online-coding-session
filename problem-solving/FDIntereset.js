// given list is the bank accounts for Fixed Deposit
// 1. calculate simple interest on balance amount and add it to the balance amount
// For example accountNo: '1000001' has Rs 100000 in account, after interest calculation balance amount becomes 100005


const interestRate = 5;


const fixedDepositAccounts = [
    {
        accountNo: '1000001',
        balance: '100000',
    },
    {
        accountNo: '1000002',
        balance: '87501',
    },
    {
        accountNo: '1000003',
        balance: '250000',
    },
    {
        accountNo: '1000004',
        balance: '65900',
    },
    {
        accountNo: '1000005',
        balance: '125000',
    },
    {
        accountNo: '1000006',
        balance: '210000',
    },
];

function fd(fixedDepositAccounts){
let totalFd=[];

let n=fixedDepositAccounts.length;
let t=1;
let r=interestRate;

let p=fixedDepositAccounts.balance;
let SI;

for(i=0; i<n; i++){
   SI=p*r*t/100;
   
//    if(SI[i].p())
//    {
    p=p+SI;
    totalFd.push(p[i]);
   }
}
console.log(totalFd[i]);
//}
fd(fixedDepositAccounts);
