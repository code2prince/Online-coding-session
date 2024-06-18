// write a function to remove vowels from given word or sentence.

// Example: "This is Rohit Sharma, who played for U-19 India in 2006";
// Output:- "Ths s Rht Shrm, wh plyd fr -19 nd n 2006"




function remVowel(string){
    var vowels = ['a','e','i','o','u'];
    var a="";
    for(i=0;i<string.length; i++){
        if(!vowels.includes(string[i].toLowerCase()))
        {
            a+= string[i];
        }
    }
    console.log(a);
    return a;
}
var string= 'I am Prince Sharma';

remVowel(string);

// toUpperCase uses when we take vowels into caps 

function remVowel(string){
    var vowels = ['A','E','I','O','U'];
    var a="";
    for(i=0;i<string.length; i++){
        if(!vowels.includes(string[i].toUpperCase()))
        {
            a+= string[i];
        }
    }
    console.log(a);
    return a;
}
var string= 'Rohit SHarma is Indian Cricket Team Player';

remVowel(string);


// function removeVowel(sentance){
//     var sentanceArray=sentance.split('');
//     for(i=0; i<sentance.length; i++){
//         var vowel= sentance[i];
//         if(vowel=="a" || vowel== "e" || vowel=="i" || vowel=="o" || vowel== "u"){
//             sentanceArray[i]='';
//         }
//     }
//     return sentanceArray.join('');
// }
// removeVowel('I am Prince sharma');


