/**
 initialization;
 while(condition)
 {
     statement
     increment
 }
 */
function Number(){
    console.log("Print number using while loop");
    let i = 1;
    while(i<=10)
    {
        console.log(i);
        i++;
    }
}

function Table(num){
console.log("Table using while loop");
    let i = 1;
    while(i<=10){
        console.log(num*i);
        i++;
    }
}
Number();
Table(10);