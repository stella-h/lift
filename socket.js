const WebSocket = require('ws');

const ws = new WebSocket('ws://codelift.org/v2/building');

ws.on('message', function incoming(message) {
    console.log('message from server' + message);
});

// need to send commands 30x




ws.on('open', function open() {
    ws.send(JSON.stringify({
        "username": "magicMouse",
        "email": "alletsaurus@gmail.com",
        "plan": "training_1"
    }));
});

ws.on('close', function close() {
    console.log("connection is now closed");
});

ws.onmessage = function(event) {
  console.log(event.data);
}



// var commandTimes = 30;

// ws.on('open', function open(commandTimes) {
//     for (var i; 0 < 30; i++) {
//         ws.send(JSON.stringify({
//             "commands": {
//                 "0": {
//                     "speed": 1,
//                     "direction": 1
//                 },
//                 "1": {
//                     "speed": 1,
//                     "direction": 1
//                 }
//             }
//         }));
//     }
// });
