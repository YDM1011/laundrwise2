const md5 = require('md5');
const jwt = require('jsonwebtoken');
module.exports = (backendApp, router) => {

    router.get('/isCanAppDownload', [], (req,res,next) => {
        res.ok(true)
    });
};
