//started


let obj = {
    a: 1,
    "b": 2,

}

// console.log(obj.a);
let b = "a";

console.log(obj[b]);
console.log(obj.b);
console.log(obj.a);



// -------------------------------------------

// reverse a string 
let str1 = "aabaa";
let str2 = "";
// console.log(str1.indexOf("l"));
// console.log(str1.indexOf("l"));

for(let i = str1.length-1; i >= 0; i--){
    str2 = str2 + str1[i];
}

console.log(str2 === str1);



// -------------------------------------------

// reverse a number

let num1 = 77877;

let num2 = "";

// num1 = toString(num1);
num1 = num1.toString();
// console.log(typeof(num1));
// for(let)

for(let i = num1.length - 1; i >= 0; i--){
    num2 = num2 + num1[i];
}

console.log(num2 === num1);


// console.log(Math.max(62,3,34,45));


// -------------------------------------------

// reverse a array

let arr1 = [2,4,6,,,6];

let arr2 = [];
// let arr2 = new Array;
// let arr2 = new Object;

// let arr2 = [...arr1];
// arr2.push(3);

// console.log(arr2);
// console.log(arr1);

for(let i = arr1.length-1; i>=0; i--){
    arr2.push(arr1[i]);
}

console.log(arr2);

// console.log(3 + -3476);



// -------------------------------------------

// make a string in assending order



// -------------------------------------------

// make a number in assending order


// -------------------------------------------

// make a array in assending order