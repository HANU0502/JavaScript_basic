//if statements

/**
if(condition){
    statement
}
 */

function Age(num){
    if(num>=0 && num<=3)
        console.log("Not to be vaccinated");
    else if(num>3 && num<18)
        console.log('Trail is on');
    if(num>=18)
        console.log("Give vaccine");
}
Age(2);
Age(4);
Age(18);
Age(12);