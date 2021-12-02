let fs =      require('fs');
let express = require('express')
let socket =  require('socket.io');
let moment = require('moment')
let process = require('process');
// let map = require('./modules/gmaps')

let io
let server
let app = express()


function start() {
    server = app.listen(80, function () {

        console.log('Server Starting...')

        app.use(express.static('public'))

        io = socket(server);

        io.on('connection', (socket) => {

            console.log('Main Socket connected..')

            socket.on('js', function (data) {

                let msg = JSON.parse(data);

                switch (msg.type) {

                    case'':

                        break;
                    default:
                        break;
                }
            })
        })
    })
}
start()


