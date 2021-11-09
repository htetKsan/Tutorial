var msg="Hello World";
    console.log(msg);
    
console.error("This is error");
console.warn("This is warning");

//let,const
let age=25;
age=30
console.log("age="+age);

const score=99;
console.log("Score=" +score);

//string,number,boolean,null,undefined
const name='John';
const age1='25';
const isCool=true;
const x=null;
const y=undefined;
let z;

console.log(typeof name);

/**template string
const a='A Dream';
const b='come alive';
const hello = '${a}';
console.log(hello);**/

const s='Hello,World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(1,7).toUpperCase());
console.log(s.split(','));

//Array
const array=new Array(1,2,3,4);
console.log(array);
const fruits=['apple','orange'];
fruits[2]='mango';
fruits.push('grapes');
fruits.unshift('strawbarries');
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('orange'));

//
const person={
    firstName:'John',
    lastName:'Done',
    age:30,
    hobies:['reading', 'movies', 'sport'],
    address:{
        street:'street 12',
        city:'jaue',
        state:'nw'
    }
}
console.log(person);
console.log(person.lastName);    
console.log(person.hobies[1]);  
console.log(person.address.city); 

const {firstName,lastName,address:{state}}=person;
console.log(state);
person.email='john@gmail.com';
console.log(person);  

//
const todos=[
    {
        id:1,
        text: 'take out trash',
        isCompleted:true

    },
    {
        id:2,
        text: 'Meeting with Boss',
        isCompleted:true
    },
    {
        id:3,
        text: 'Dentist apointment',
        isCompleted:true
    }
];
console.log(todos);
console.log(todos[2].text);

const todosJSON= JSON.stringify(todos);
console.log(todosJSON);

//for
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}

//while
let j=0;
while(j<=todos.length){
    console.log(todos[j].);
    j++;
}

//

