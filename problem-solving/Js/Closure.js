// -------------Closure---------------
// A closure gives you access to an outer function from an inner func.

function main() {
    const Name = "Prince";

    function MyName() {
        console.log(Name);  //Prince
    }
    MyName();
}
main();

//------------------------------------------------
function mainFunc(Data){
    function InnerFunc(){
        console.log(Data)
    }
    return InnerFunc();
}
mainFunc("Testing Data")




