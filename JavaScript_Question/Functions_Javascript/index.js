// Using map
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num) => num * num);

console.log(result);


// Using reduce
const array1 = [1, 2, 3, 4];
const reducer = (acc, curr) => acc + curr;

console.log(array1.reduce(reducer));

// Using fliter
const num = [1, -2, 3, -4];
const positiveNumbers = num.filter((eachnum) => eachnum > 0);

console.log(positiveNumbers);


// Using flatMap
const arr = [1, 2, 3]
const flatMapResult = arr.flatMap(x => [x, x * 2]);
console.log(flatMapResult);