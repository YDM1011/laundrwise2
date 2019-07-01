const fs = require('fs');
module.exports = function (backendApp, router) {

    router.post('/', [], function (req, res, next) {
        backendApp.mongoose.model('Admin').find({}).exec((e,r)=>{
            if (r[0]) {
                backendApp.service.ws(backendApp,r[0].socket,JSON.stringify({
                    event: 'on-notification',
                    data: "it work!!"
                }) );

                res.ok("ok!!!");
            }
        })
    });
};
const convertation = b64string =>{
    let buf;
    if (typeof Buffer.from === "function") {
        buf = Buffer.from(b64string, 'base64'); // Ta-da
    } else {
        buf = new Buffer(b64string, 'base64'); // Ta-da
    }
    return buf;
};