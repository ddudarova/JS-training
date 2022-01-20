// //point 1
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
//
// //point2
// const number = prompt('Please enter number', '');
// if (number > 0 && number % 2 === 0 && number % 7 === 0) {
//     console.log('Number ' + number + ' is valid');
// } else {
//     console.log('Number ' + number + ' is NOT valid')
// }
//
// //point3
// const newArray = [];
// newArray.push(2,'test',true,null);
// document.write(newArray.length);
// const userNum = prompt('Please enter number', '');
// newArray.push(userNum);
// document.write(userNum);
// newArray.shift();
// document.write(newArray);
//
// //point4
// let cities = ["Rome", "Lviv", "Warsaw"];
// let str = cities.join('*');
// console.log(str);
//
// //point5
// const isAdult = prompt('Please enter your age', '');
// if (isAdult > 0 && isAdult < 18) {
//     alert('You are too young');
// } else if (isAdult >= 18) {
//     alert('You have reached the age of majority');
// }
// else {
//     alert('Invalid number');
// }
//
// //point6
// const A = Number(prompt('Please enter length of A side', ''));
// const B = Number(prompt('Please enter length of B side', ''));
// const C = Number(prompt('Please enter length of C side', ''));
//
// if ((isNaN(A) || isNaN(B) || isNaN(C)) || (A < 1 || B < 1 || C < 1)) {
//     console.log('Incorrect Data');
// } else {
//     const P = (A + B + C) / 2;
//     const S = (P * (P - A) * (P - B) * (P - C)) ** (1 / 2);
//     console.log(S.toFixed(2))
//     const isRA = A ** 2 + B ** 2 === C ** 2;
//     if (isRA === true) {
//         console.log('This  triangle is right angled');
//     } else {
//         console.log('This  triangle is not right angled');
//     }
// }

//point7
const curTime = (new Date()).getHours();
console.log(curTime);

if (curTime === 23 || curTime >= 0 && curTime < 5) {
    console.log('Good night');
} else if (curTime >= 5 && curTime < 11) {
    console.log('Good morning');
} else if (curTime >= 11 && curTime < 17) {
    console.log('Good afternoon');
} else if (curTime >= 17 && curTime < 23) {
    console.log('Good evening');
} else {
    console.log('Incorrect data');
}

switch (true) {
    case curTime === 23:
        console.log('Good night');
        break
    case curTime >= 0 && curTime < 5:
        console.log('Good night');
        break
    case curTime >=5 && curTime < 11:
        console.log('Good morning');
        break
    case curTime >= 11 && curTime < 17:
        console.log('Good afternoon');
        break
    case curTime >= 17 && curTime < 23:
        console.log('Good evening');
        break
}
