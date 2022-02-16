//point1
function getPromise(message, delay) {
    return new Promise(
        function (resolve) {
            setTimeout(function() {
                resolve(message);
            }, delay);

        }
    )
}

getPromise("test promise", 2000).then(function(data) {
    console.log(data);
});

//point2
function calcArrProduct(arr){
    return new Promise(
        function (resolve, reject){
            let numbers = 1;
            for (let i = 0; i < arr.length; i++){
                if (isNaN(arr[i])){
                    reject("Error! Incorrect array!");
                } else {
                    numbers *= arr[i];
                }
            }
            resolve(numbers);
        }
    )
}

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));

//point3
const delay = (i, time) => new Promise(resolve => setTimeout(() => {
    console.log(i);
    resolve(i);
}, time));

 function showNumbers(n) {
    let pr = delay(0, Math.random()*n);

    for (let i = 1; i <= 10; i++) {
        pr = pr.then(() => delay(i, Math.random()*n))
    }
}
showNumbers(3000);

//point4
const delay = (i, time) => new Promise(resolve => setTimeout(() => {
    console.log(i);
    resolve(i);
}, time));

async function showNumbers(n) {

    for (let i = 0; i <= 10; i++) {
        await delay(i, Math.random()*n);
    }
}
showNumbers(3000);
