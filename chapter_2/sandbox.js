//log this things to comment

/*log this comment */
let age = 2014;
let year = 12;

console.log(age,year);

age = 30;
yaer = 2021;
console.log(age,year);

const points = 100;
console.log(points);

var score = 75;
console.log(score);

/***********************************string*************************/

console.log('Hello world');

//string concate
let fname = "Padmanabham";
let lname = "Vats";
let fullName = fname +' '+ lname;
console.log(fullName);

//string length
console.log(fullName.length);

//function: Is snipet code which performs some kinds  of specific task

//Method: Is just a function that's associated with a particular object or datatype. It donot actually alter the original value that we use them on.

console.log(fullName.toUpperCase());

//common string methods
let email = "padmanabham0502@gmail.com";

let result = email.lastIndexOf('a');
console.log(result);

let result1 = email.slice(0,11);
console.log(result1);

let result2  = email.substr(4,10);//it will got from 4 to 14
console.log(result2);

let result3 = email.replace('m','w');//replace first m to w in string
console.log(result3);

/***********************************string*************************/

/***********************************Number*************************/

//order of operartion BIDMAS, I stands for indices(++)
//math operators + - * / ++ %

let result4 = 5 * (10-3)**2;
console.log(result4);

let likes  = 10;
likes = likes+1;
likes++;
likes+=10;
console.log(likes);


/***********************************Number*************************/

//template string
const title = "Best reads of 2019";
const author = "PAdmanabham";
const like = 30;

const result5 = `The bolg called ${title} and auhor ${author} and likes ${like}`;

console.log(result5);


/**************************************Array **********************/

let ninja = ['mona','hanu','mun','raju'];

console.log(ninja);
ninja[2] = 'munmun';
console.log(ninja);

console.log(ninja.join(','))

console.log(ninja.indexOf('mona'));

let marks = [10,20,30,40,50];

marks.push(0);//add element to end
console.log(marks);

marks.pop();
console.log(marks);// delete element from end

marks.unshift(0);
console.log(marks);//Add element to start of array

marks.shift();//remove  the first element from the array
console.log(marks);
/**************************************Array **********************/


/********************** Null and undefined ************************/
//Null is intensinally lack of value
//Undefined isn't
let hanuAge;

console.log(hanuAge);

/********************** Null and undefined ************************/