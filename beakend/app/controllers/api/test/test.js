const fs = require('fs');
module.exports = function (backendApp, router) {

    router.get('/', [], async function (req, res, next) {
        let data = JSON.stringify(JSON.stringify({event: 'form-notification', to:'admin', data:{data:"faq"}}));
        console.log(data)
        backendApp.events.callWS.emit('event',data)
        res.ok("ok")
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

const asyncForEach = (arr, fun, backendApp) => {
    return new Promise(async (rs,rj)=>{
        let result = () => {
            return new Promise(async (rs,rj)=>{
                let arrData = [];
                for(let i=0; i<arr.length; i++){
                    let item = await fun(arr[i], backendApp);
                    arrData.push(item);
                    if (arr.length == arrData.length){
                        let dat = parseToIdArr(arrData);
                        rs(dat);
                    }
                }
            })
        };
        let d = await result();
        rs(d)
    })
};

const createBasket = (data,backendApp) => {
    // const Product = backendApp.mongoose.model('Basket');
    return new Promise((rs,rj)=>{
        // Product.create(data,(e,r)=>{
        //     if (e) return rj(e);
        //     if (!r) return rj("One of Basket is invalid!");
        //     if (r) return rs(r)
        // });
        console.log(data);
        setTimeout (()=>{
            data['_id'] = Math.random();
            rs(data)
        },100)

    })
};
const parseToIdArr = arr => {
    let arrRes = [];
    arr.map(obj=>{
        arrRes.push(obj._id)
    });
    return arrRes;
};