const WebSocket = require('ws');

const ws = new WebSocket('ws://codelift.org/v2/building');

ws.on('message', function incoming(message) {
    console.log('message from server' + message);
});
// after connection is established
// need to send commands 30x
// after send command, close socket




ws.on('open', function open() {
    ws.send(JSON.stringify({
        "username": "magicMouse",
        "email": "test@gmail.com",
        "plan": "training_1"
    }));
});

// ws.on('close', function close() {
//     console.log("connection is now closed");
// });

ws.onmessage = function(event) {
  console.log(event.data);
}



var countTimes = 30;

var timer = setInterval(function() {
    ws.send(JSON.stringify({
        "commands": {
            "0": {
                "speed": 1,
                "direction": 1
            },
            "1": {
                "speed": 1,
                "direction": 1
            }
        }
    }));

    countTimes -= 1;

    if (countTimes === 0) {
        clearInterval(timer)
        ws.close();
    }
}, 1000 );

