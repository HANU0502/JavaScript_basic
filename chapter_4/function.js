//function : fall under inside the object datatypes
//Small piece of code

//function declaration - Hoisting is supported by the this
function greet(){
    console.log('Hello there');
}

//function expression - Not supported by this as we have to declared and then use it
const speak = function(){
    console.log('Speaking English');
}

//passing parameter
const sum = function(a,b){
    console.log(`Sum of ${a} and ${b} is `,(a+b))
}
//function calling/invoke
greet();
speak();
sum(4,5)//sum(argu1,argu2)