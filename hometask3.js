// //point1
const numbers = [2,3,4,5];

let result = 1;
for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
}
console.log(result);

const data = [2,3,4,5];

let res = 1;
let i = 0;
while (i < data.length) {
    res *= data[i];
    i++;
}
console.log(res);

// //point2
for(let count = 0; count < 16; count++) {
    if (count % 2 === 0) {
        console.log(count + ' is even');
    } else {
        console.log(count + ' is odd');
    }
}

// //point3
function getRandomInt(a, b) {
    let k = [];
    for (let i=a, t=b; i<t; i++) {
        k.push(Math.round(Math.random() * t))
    }
    console.log(k);
}
getRandomInt(1,500)

// //point4
function findMin() {
    const showMin = Math.min(...arguments);
    console.log(showMin);
}
findMin(12, 14, 4, -4, 0.2, -12);

// //point5
function findUnique(arr) {
    const result = [];
    for (let i of arr) {
        if (!result.includes(i)) {
            result.push(i);
        } else {
            return false;
        }
    }

    return true;
}

console.log(findUnique([1, 2, 3, 4]));

// point6
function lastElem(a,b=1) {
    let c = a.slice(-b);
    console.log(c);
}
lastElem([3, 4, 10, -5],2);

// point7
function ucFirst(str) {
    let str2 = ''
    for (let i of str.split(' ')) {
        str2 = str2 + String(i.replace(i[0], i[0].toUpperCase())) + " "
    }
    console.log(str2);
}
ucFirst('this is string');

