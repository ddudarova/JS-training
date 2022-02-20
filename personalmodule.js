const curTime = (new Date()).getHours();

function greeting(userName){

    const result = {};
    result.date = 'Date of request: ' + new Date();

    if (curTime === 23 || curTime >= 0 && curTime < 5) {
        result.greeting = 'Good night, ' + userName;
    } else if (curTime >= 5 && curTime < 11) {
        result.greeting = 'Good morning, ' + userName;
    } else if (curTime >= 11 && curTime < 17) {
        result.greeting =  'Good afternoon, ' + userName;
    } else if (curTime >= 17 && curTime < 23) {
        result.greeting =  'Good evening, ' + userName;
    }

    return result;
}

module.exports = greeting;
