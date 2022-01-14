//point 1
// let x = 1;
// let y = 2;
//
// let res1 = x.toString() + y;
// console.log(res1);
// console.log(typeof res1);
//
// let res2 = !!x + y.toString();
// console.log(res2);
// console.log(typeof res2);
//
// let res3 = !!(x + y);
//     console.log(res3);
// console.log(typeof res3);
//
// let res4 = 'a' * x * y;
// console.log(res4);
// console.log(typeof res4);

//point2
const number = prompt('Please enter number', '');
if (number > 0 && number % 2 === 0 && number % 7 === 0) {
    console.log('Number ' + number + ' is valid');
} else {
    console.log('Number ' + number + ' is NOT valid')
}

