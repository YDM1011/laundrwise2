const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 6759, path: '/ws' });
const wsEvent = {};
const glob = require('glob');
const wsControllers = glob.sync(backendApp.config.root+'/service/wsEvents/*.js');
wsControllers.forEach((controller) => {
    let wsController = require(controller)();
    wsEvent[wsController.event] = wsController.fun;
});
module.exports = (backendApp, socket = null, data = null) => {

    wss.on('connection', async (ws, req) => {
        let tokenData = parseCookieHeader(req.headers.cookie);
        let userData = await checkToken(backendApp, tokenData).catch(e=>{console.error(e)});
        console.log("connected",userData)
        saveConnect(userData, wss, ws);

        backendApp.events.callWS.on('event',(event)=>{
            const data = JSON.parse(event);
            const res = JSON.parse(data);
            const sendTo = (to, event, data) => {
                if (!to) {
                    wss[userData._id].forEach(ws=>{
                        ws.send(JSON.stringify({
                            event: event,
                            data: "ok!!"
                        }));
                    });
                    return
                }
                /** All user's requests and send response to 1 client of all requests */
                console.log(wss[to]);
                wss[to] ? wss[to].forEach(ws=>{
                    ws.send(JSON.stringify({
                        event: event,
                        data: data
                    }));
                }) : '';
            };
            const send = (event, data) => {
                if (res.to == 'admin'){
                    backendApp.mongoose.model('Admin').findOne({}).exec((e,r)=>{
                        if (r) {
                            sendTo(r._id, event, data);
                        }
                    })
                } else {
                    sendTo(res.to, event, data);
                }
            };
            console.log(wsEvent,res.event);
            wsEvent[res.event](data, send);
        })

        ws.on('message', (event) => {
            const data = JSON.parse(event);
            const res = JSON.parse(data);

            const sendTo = (to, event, data) => {
                if (!to) {
                    wss[userData._id].forEach(ws=>{
                        ws.send(JSON.stringify({
                            event: event,
                            data: "ok!!"
                        }));
                    });
                    return
                }
                /** All user's requests and send response to 1 client of all requests */
                console.log(to);
                wss[to] ? wss[to].forEach(ws=>{
                    ws.send(JSON.stringify({
                        event: event,
                        data: data
                    }));
                }) : '';
            };
            const send = (event, data) => {
                if (res.to == 'admin'){
                    backendApp.mongoose.model('Admin').findOne({}).exec((e,r)=>{
                        if (r) {
                            sendTo(r._id, event, data);
                        }
                    })
                } else {
                    sendTo(res.to, event, data);
                }
            };
            console.log(wsEvent,res.event);
            wsEvent[res.event](data, send);

            // let wsController = require('../wsEvents/wsControler')();

        });

        ws.on('close', () => {
            console.log('disconnected');
        });

    });

};

const parseCookieHeader = (str) => {
    console.log(str, "STR")
    let tokenName = findTokenName(str);
    let token = str.split(tokenName+'=')[1].split(';')[0];
    return {name:tokenName, token:token, model: tokenName == 'token' ? 'Client' : 'Admin'}
};

const findTokenName = (str) => {
    if (str && (str.search('adminToken') > -1)) return 'adminToken';
    if (str && (str.search('token') > -1)) return 'token';
    return null
};

const checkToken = (backendApp,tokenData) => {
    const jwt = require('jsonwebtoken');
    const Schema = backendApp.mongoose.model(tokenData.model);
    return new Promise((rs,rj)=>{
        jwt.verify(tokenData.token, backendApp.config.jwtSecret, (err,data)=>{
            if (err) {
                return rj("Token error");
            } else {
                Schema.findOne({login: data.login})
                    .exec((err, info)=>{
                        if (err) return rj(err);
                        if (!info){
                           rj("not found")
                        } else {
                            rs(info)
                        }
                    });
            }
        });
    });
};
/**
 * wss->userId->[ws<index, socket>]
 * @param userData
 * @param wss
 * @param ws
 */
const saveConnect = (userData, wss, ws) => {
    if (wss[userData._id]){
        /** update */
        wss[userData._id].push(ws)
    } else {
        /** create */
        wss[userData._id] = [];
        wss[userData._id].push(ws);
    }
    // const Schema = backendApp.mongoose.model(model);
    // return new Promise((rs,rj)=> {
    //     Schema.findOneAndUpdate(query, {$push: {socket: ws}}, {new: true})
    //         .exec((err, r) => {
    //             if (err) return rj(err);
    //             if (!r) {
    //                 rj("not found")
    //             } else {
    //                 rs(r)
    //             }
    //         })
    // });
};

