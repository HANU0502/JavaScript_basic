let age = 30;//global scope

if(true){
    let age = 40;
    console.log('inside code block ',age);
}
console.log('outside code block ',age);

//let is local scope varialble
//var is used for global scope