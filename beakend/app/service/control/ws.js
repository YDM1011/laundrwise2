module.exports = () => {
    const WebSocketServer = require('ws').Server;
    const wss = new WebSocketServer({ port: 6759 });

    wss.on('connection', (ws, req) => {

        console.log("data ", req.cookies, req.jwt, parseCookieHeader(req.headers.cookie));

        ws.on('message', (event) => {
            const data = JSON.parse(event);
            const res = JSON.parse(data);

            switch (res.event) {
                case 'set-text':

                    break;
                case 'remove-text':
                    break;
                case 'form-notification':
                    // console.log('WebSocket connection!', ws.upgradeReq.headers);
                    // wss.clients[0].send(JSON.stringify({
                    //     event: 'on-notification',
                    //     data: res.data
                    // }))
                    wss.clients.forEach(client=>{
                        client.send(JSON.stringify({
                            event: 'on-notification',
                            data: res.data
                        }));
                    });
                    // ws.send(JSON.stringify({
                    //     event: 'on-notification',
                    //     data: res.data
                    // }));
                    break;
            }

        });



        ws.on('close', () => {
            console.log('disconnected');
        });

    });
};

const parseCookieHeader = (str) => {
    return str.match(/\=?((\=\w+)*\=)([a-zA-Z\w\.]+)/i)[3]
};