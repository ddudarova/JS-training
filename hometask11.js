const http = require("http");
const os = require("os");
const path = require("path");
//task1
const userInfo = "Current username: " + os.userInfo().username;
const platform = "Platform: " + os.platform();
const timeOs = "System work time: " + os.uptime()/60 + ' minutes';
const workDir = "Current work directory: " + path.dirname("/users/ddudar/js/JS-training/hometask11.js");
const fileName = "Server file name: " + path.basename("/users/ddudar/js/JS-training/hometask11.js", undefined);

//task2
const greeting = require('./personalmodule');
const userName = os.userInfo().username;


http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //task1
    response.write(userInfo + '\n' + platform + '\n' + timeOs + '\n' + workDir + '\n' + fileName + '\n');

    //task2
    const data = greeting(userName);
    response.write(data.date + '\n' + data.greeting);

    response.end();
}).listen(5000);
