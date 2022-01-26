// //point1
// function calcRectangleArea(width, height) {
//     if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
//         throw new Error('Invalid data');
//     }
//     return width*height;
// }
//
// try {
//     let res = calcRectangleArea(5,7);
//     console.log(res);
// } catch (exception) {
//     console.log(exception.message)
// }
//
// console.log(calcRectangleArea(5, 5));

//point2
// function checkAge(){
//     const age = prompt('Please enter your age');
//     switch (true){
//         case age === null:
//             throw new Error('This field is empty!Please enter your age.');
//         case isNaN(Number(age)):
//             throw new Error('Please enter only numbers!');
//         case age < 14:
//             throw new Error('You are to young!');
//     }
// }
//
// try {
//     checkAge()
//     alert('Access guaranteed!');
// } catch (e){
//     alert(e.stack);
// }

//point3
// class MonthException {
//     constructor(message) {
//         this.message = message;
//         this.name = 'MonthException';
//     }
// }
//
// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
// ];
//
// function showMonthName(month) {
//     if (months[month-1]) {
//         console.log(months[month-1]);
//     } else {
//         throw new MonthException('Incorrect month number')
//     }
// }
// try {
//     showMonthName(5);
// } catch (e){
//     console.log(e.name + ' ' + e.message);
// }

//point4
