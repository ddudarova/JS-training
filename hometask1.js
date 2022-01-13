//hometask point 2
console.log('Dudarova');

//hometask point 3
let first = 'first_variable';
let second = 'second_variable';
document.write(first, second)
first = second;
document.write(first)

//hometask point 4
const dataTypesObject = {
    number: 55,
    string: 'Ivan',
    boolean: true,
    null: null,
    undefined: undefined
}
console.log(dataTypesObject)

//hometask point 5
const isAdult = confirm('Are you an adult?');
console.log(isAdult)

//hometask point 6
const myName = 'Daria';
const mySurname = 'Dudarova';
const myGroup = '1A';
const myBirthYear = 1995;
const isMarried = true;
let myMiddleName;
let myAde = null;

console.log(typeof myBirthYear, typeof isMarried, typeof myName, typeof mySurname, typeof myGroup, typeof myMiddleName, typeof myAde)

//hometask point 7
const login = prompt('Login', 'Ivan123');
alert(login);
const email = prompt('Email', 'Ivan123@gmail.com');
alert(email);
const password = prompt('Password', 'qwerty12345');
alert(password);
alert('Dear ' + login + ', your email is ' + email + ', your password is ' + password)

//hometask point 8
const sec = 1;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;
const month = day * 30;
document.write('There is ', hour, ' seconds in 1 hour, ', day, ' seconds in 1 day, ', 'and ', month, ' seconds in 1 30-days month')
