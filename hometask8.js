//point1
function upperCase(str) {
    const regExp = /^[A-Z]/.test(str);
    if (regExp) {
        console.log('String starts with uppercase character ');
    } else {
        console.log('String is not start with uppercase character ');
    }
}
upperCase('regexp');
upperCase('RegExp');

//point2
function checkEmail(str){
    const regExp = /^[\.\w\-]+@[a-z0-9\-\.]+\.com$/i;
    console.log(regExp.test(str));
}

checkEmail("Qmail2@gmail...com");


//point5
const regExp1 = /\w+/g;
const newAr = "Java Script".match(regExp1);
const newStr = "Java Script".replace(/^\w+/, newAr[1]);
console.log(newStr.replace(/\w+$/, newAr[0]));

//point6
function checkEmail(str){
    const regExp = /^[^\-]\w+[\-]{0,1}\w+@[a-z0-9]+\.com$/i;
    const res =  regExp.test(str);
    if (res){
        console.log('Email is correct!');
    } else {
        console.log('Email is not correct!');
    }
}

checkEmail("Qmail2@gmail.com");

//point7
function checkLogin(login){
    const checkExp = /^[^\d]([a-z0-9]*[.]?[0-9]+){2,10}$/i;
    const printNum = /[0-9]*[.]?[0-9]+/g;
    console.log(checkExp.test(login));
    console.log(login.match(printNum).join(', '));

}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
