//point1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x,y,,...z] = arr;
console.log(x);
console.log(y);
console.log(z);

//point2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let {names:[,name2,,name4], ages:[,age2,,age4] } = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

//point3
function mul(...args) {
    let res = 0;

    for (let arg of args){
        if (Number.isInteger(arg)){
            if (res === 0){
                res = arg;
            } else {
                res *= arg;
            }
        }
    }
    return res;
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

//point4
let server = {
    data: 0,
    convertToString: function (callback){ return callback(()=> this.data + "")},
}

let client = {
        server: server,
        result: "",
        calc: function (data) {
            this.server.data = data;
            this.server.convertToString(this.notification());
        },
    notification: function (){ return callback => this.result = callback()}
    };
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//point5
function mapBuilder(keysArray, valuesArrays){
    let result;
    result = new Map([
        [keysArray[0], valuesArrays[0]],
        [keysArray[1], valuesArrays[1]],
        [keysArray[2], valuesArrays[2]],
        [keysArray[3], valuesArrays[3]]
    ]);
    return result;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"








