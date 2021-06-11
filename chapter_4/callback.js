const myFunc = (callbackFunc)=>{
    let value = 50;
    callbackFunc(value);
}

myFunc(value =>{
    console.log(value);
})

//callback function - we just pass a function into something another function as an argument and some point it will be called

//forloop - Is a method which iterate over an array. It's a bit like a loop where we iterate over same kind of array.expect callback function as an arguments

let people = ['mario','mona','hanu','arvind'];



const ul = document.querySelector('.people');

let html = ``;

people.forEach((person)=>{
    html +=`<li style="color:purple">${person}</li>`;
})
console.log(html);
ul.innerHTML = html;