// sorting by different methods   


//palendrom by me
let str = "hih";
let str2 = [];

for(let i = str.length; i >= 0; i--){
    str2.push(str[i]);
}

let str3 = str2.join("");
console.log(str3);

if(str == str3){
    console.log("palendrom");
} else {
    console.log("not a palendrom");
}

//palendrom by toturial\
//1
const isPalendrom = function (x) {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

const res = isPalendrom(232);
console.log(res);

//2

var isPalindrome = function(x) {
    const str = x.toString();
    let reversedStr = "";
    for (let l of str) {
     reversedStr = l + reversedStr   
    }
    return reversedStr === str
};

console.log("101",isPalindrome(101));




//----------------------------------------------------------------------------------

// Fibonacci Number by me

var febNumber = function (n) {
    const arr = [0, 1];

    for(let i = 2; i <= n; i++){
        arr.push(arr[i-1] + arr[i-2]);
        // if(arr[i] > 3){
            // arr.pop();
            // console.log(arr);
            // return;
            // break;
        // }
    }

    // console.log(arr);
    return arr;
}

let full = febNumber(10);

console.log("full : ",full);

// console.log(full.splice())
console.log();



//2 by recursion
let fibarr = [];
const fib = function(n){
    if(n <= 1) return n;

    return fib(n-1) + fib(n-2);
}

console.log(fib(8));


// one line
const fibo = (n) => (n <= 1 ? n : fibo(n - 1) + fibo(n - 2));
fibo(8);


