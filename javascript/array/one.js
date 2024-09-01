// array practice

// 50 javascript array questions with answers

// 1. Create an array with 5 different numbers.
// 2. Add a new element to the end of an array.
// 3. Add a new element to the beginning of an array.
// 4. Remove the last element from an array.
// 5. Remove the first element from an array.
// 6. Access the third element in an array.
// 7. Find the length of an array.
// 8. Convert an array to a string using `.join()`.
// 9. Create a copy of an array using `.slice()`.
// 10. Merge two arrays together using `.concat()`.
// 11. Sort an array of numbers in ascending order.
// 12. Sort an array of strings in alphabetical order.
// 13. Reverse the order of elements in an array.
// 14. Find the index of a specific element in an array using `.indexOf()`.
// 15. Check if an array contains a specific element using `.includes()`.
// 16. Remove a specific element from an array.
// 17. Find all elements greater than 10 in an array using `.filter()`.
// 18. Double each element in an array using `.map()`.
// 19. Find the sum of all elements in an array using `.reduce()`.
// 20. Flatten a 2D array into a 1D array using `.flat()`.
// 21. Remove duplicate elements from an array.
// 22. Find the largest number in an array.
// 23. Find the smallest number in an array.
// 24. Check if all elements in an array are even numbers using `.every()`.
// 25. Check if at least one element in an array is greater than 50 using `.some()`.
// 26. Find the first element greater than 20 using `.find()`.
// 27. Find the index of the first element less than 5 using `.findIndex()`.
// 28. Fill an array with a specific value using `.fill()`.
// 29. Create an array from a string using `.split()`.
// 30. Replace elements at specific positions in an array using `.splice()`.
// 31. Loop through an array and log each element to the console.
// 32. Use the `forEach()` method to loop through an array.
// 33. Convert an array to a string using `.toString()`.
// 34. Find the difference between two arrays (elements in the first but not the second).
// 35. Find the intersection of two arrays (common elements).
// 36. Check if two arrays are equal.
// 37. Remove all falsy values from an array.
// 38. Combine an array of arrays into a single array using `.flatMap()`.
// 39. Get the last element of an array without modifying it.
// 40. Get the first element of an array without modifying it.
// 41. Create an array of 10 random numbers between 1 and 100.
// 42. Generate an array of numbers from 1 to 100.
// 43. Remove elements from an array without leaving empty slots.
// 44. Create a function that takes an array and a number, and returns a new array with the number multiplied by each element.
// 45. Sort an array of objects by a specific property.
// 46. Find the most frequent element in an array.
// 47. Create a multidimensional array (2D or 3D) and access elements.
// 48. Write a function that accepts an array and returns a new array with elements shuffled.
// 49. Split an array into chunks of a specified size.
// 50. Merge two sorted arrays into a single sorted array.





// 1. Create an array with 5 different numbers.
let numbers = [10, 20, 30, 40, 50];

// 2. Add a new element to the end of an array.
numbers.push(60);  // [10, 20, 30, 40, 50, 60]

// 3. Add a new element to the beginning of an array.
numbers.unshift(5);  // [5, 10, 20, 30, 40, 50, 60]

// 4. Remove the last element from an array.
numbers.pop();  // [5, 10, 20, 30, 40, 50]

// 5. Remove the first element from an array.
numbers.shift();  // [10, 20, 30, 40, 50]

// 6. Access the third element in an array.
let thirdElement = numbers[2];  // 30

// 7. Find the length of an array.
let arrayLength = numbers.length;  // 5

// 8. Convert an array to a string using .join().
let arrayString = numbers.join(", ");  // "10, 20, 30, 40, 50"

// 9. Create a copy of an array using .slice().
let copiedArray = numbers.slice();  // [10, 20, 30, 40, 50]

// 10. Merge two arrays together using .concat().
let moreNumbers = [70, 80, 90];
let mergedArray = numbers.concat(moreNumbers);  // [10, 20, 30, 40, 50, 70, 80, 90]



// -----------------------------------------------------------------------------


// 1. Sort an array of numbers in ascending order.
let numbers1 = [40, 10, 30, 20, 50];
numbers1.sort((a, b) => a - b);  // [10, 20, 30, 40, 50]

// 2. Sort an array of strings in alphabetical order.
let strings = ["banana", "apple", "cherry", "date"];
strings.sort();  // ["apple", "banana", "cherry", "date"]

// 3. Reverse the order of elements in an array.
let reversedNumbers1 = numbers1.reverse();  // [50, 40, 30, 20, 10]

// 4. Find the index of a specific element in an array using .indexOf().
let index = numbers1.indexOf(30);  // 2

// 5. Check if an array contains a specific element using .includes().
let containsElement = numbers1.includes(20);  // true

// 6. Remove a specific element from an array.
let elementToRemove = 30;
numbers1 = numbers1.filter(num => num !== elementToRemove);  // [50, 40, 20, 10]

// 7. Find all elements greater than 10 in an array using .filter().
let greaterThanTen = numbers1.filter(num => num > 10);  // [50, 40, 20]

// 8. Double each element in an array using .map().
let doubledNumbers1 = numbers1.map(num => num * 2);  // [100, 80, 40, 20]

// 9. Find the sum of all elements in an array using .reduce().
let sum = numbers1.reduce((acc, num) => acc + num, 0);  // 120

// 10. Flatten a 2D array into a 1D array using .flat().
let array2D = [[1, 2], [3, 4], [5, 6]];
let flattenedArray = array2D.flat();  // [1, 2, 3, 4, 5, 6]



// -----------------------------------------------------------------------------




// 1. Remove duplicate elements from an array.
let arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 1];
let uniqueArray = [...new Set(arrayWithDuplicates)];  // [1, 2, 3, 4, 5]

// 2. Find the largest number in an array.
let numbers2 = [10, 20, 30, 40, 50];
let largestNumber = Math.max(...numbers2);  // 50

// 3. Find the smallest number in an array.
let smallestNumber = Math.min(...numbers2);  // 10

// 4. Check if all elements in an array are even numbers2 using .every().
let allEven = numbers2.every(num => num % 2 === 0);  // true

// 5. Check if at least one element in an array is greater than 50 using .some().
let greaterThanFifty = numbers2.some(num => num > 50);  // false

// 6. Find the first element greater than 20 using .find().
let firstGreaterThanTwenty = numbers2.find(num => num > 20);  // 30

// 7. Find the index of the first element less than 5 using .findIndex().
let smallNumbers2 = [10, 3, 8, 1, 6];
let firstLessThanFiveIndex = smallNumbers2.findIndex(num => num < 5);  // 1

// 8. Fill an array with a specific value using .fill().
let filledArray = new Array(5).fill(7);  // [7, 7, 7, 7, 7]

// 9. Create an array from a string using .split().
let string = "hello world";
let stringArray = string.split(" ");  // ["hello", "world"]

// 10. Replace elements at specific positions in an array using .splice().
let fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1, 2, "blueberry", "kiwi");  // ["apple", "blueberry", "kiwi", "date"]
// Replaces "banana" and "cherry" with "blueberry" and "kiwi"






// -----------------------------------------------------------------------------





// 1. Loop through an array and log each element to the console.
let numbers3 = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers3.length; i++) {
  console.log(numbers3[i]);
}

// 2. Use the forEach() method to loop through an array.
numbers3.forEach(num => console.log(num));

// 3. Convert an array to a string using .toString().
let numbers3String = numbers3.toString();  // "10,20,30,40,50"

// 4. Find the difference between two arrays (elements in the first but not the second).
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let difference = array1.filter(x => !array2.includes(x));  // [1, 2]

// 5. Find the intersection of two arrays (common elements).
let intersection = array1.filter(x => array2.includes(x));  // [3, 4]

// 6. Check if two arrays are equal.
let arrayEqual = JSON.stringify(array1) === JSON.stringify(array2);  // false

// 7. Remove all falsy values from an array.
let mixedArray = [0, 1, false, 2, "", 3, null, 4, undefined, 5];
let truthyArray = mixedArray.filter(Boolean);  // [1, 2, 3, 4, 5]

// 8. Combine an array of arrays into a single array using .flatMap().
let arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
let flatMappedArray = arrayOfArrays.flatMap(arr => arr);  // [1, 2, 3, 4, 5, 6]

// 9. Get the last element of an array without modifying it.
let lastElement = numbers3[numbers3.length - 1];  // 50

// 10. Get the first element of an array without modifying it.
let firstElement = numbers3[0];  // 10









// -----------------------------------------------------------------------------













// 1. Create an array of 10 random numbers between 1 and 100.
let randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

// 2. Generate an array of numbers from 1 to 100.
let numbersArray = Array.from({ length: 100 }, (_, i) => i + 1);

// 3. Remove elements from an array without leaving empty slots.
let fruits2 = ["apple", "banana", "cherry", "date"];
fruits2.splice(1, 2);  // Removes "banana" and "cherry" - no empty slots remain

// 4. Create a function that takes an array and a number, and returns a new array with the number multiplied by each element.
function multiplyArray(arr, num) {
  return arr.map(element => element * num);
}
let multipliedArray = multiplyArray([1, 2, 3], 5);  // [5, 10, 15]

// 5. Sort an array of objects by a specific property.
let people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }];
people.sort((a, b) => a.age - b.age);  // Sorts by age: [{name: "Bob", age: 25}, {name: "Alice", age: 30}, {name: "Charlie", age: 35}]

// 6. Find the most frequent element in an array.
let items = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let mostFrequent = items.reduce((acc, curr, i, arr) => 
  arr.filter(item => item === acc).length >= arr.filter(item => item === curr).length ? acc : curr
);  // 4 (most frequent)

// 7. Create a multidimensional array (2D or 3D) and access elements.
let multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let element = multiArray[1][2];  // Accessing element "6" from second row

// 8. Write a function that accepts an array and returns a new array with elements shuffled.
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
let shuffledArray = shuffleArray([1, 2, 3, 4, 5]);  // [3, 1, 5, 2, 4] (random order)

// 9. Split an array into chunks of a specified size.
function chunkArray(arr, chunkSize) {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}
let chunkedArray = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);  // [[1, 2, 3], [4, 5, 6], [7, 8]]

// 10. Merge two sorted arrays into a single sorted array.
function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
let mergedArray2 = mergeSortedArrays([1, 3, 5], [2, 4, 6]);  // [1, 2, 3, 4, 5, 6]


















