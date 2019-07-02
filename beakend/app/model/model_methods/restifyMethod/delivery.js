module.exports.preRead = async (req,res,next, backendApp) => {
    next()
};

module.exports.preUpdate = async (req,res,next, backendApp) => {
    if (typeof req.body.manager == 'object'){
        let manager = await createManeger(req, backendApp).catch(e=>{res.notFound(e)});
        req.body = {superManager: manager._id}
        next()
    } else {
        next()
    }
};

const createManeger = (req, backendApp) => {
    return new Promise((rs,rj)=>{
        delete req.body.manager.token;
        req.body.manager['token'] = getToken(backendApp,req.body.manager.login);
        backendApp.mongoose.model('Client')
            .create(req.body.manager, (err,r)=>{
                console.log(err,r);
                if(err) return rj(err);
                rs(r);
            })
    })
};
const getToken = (backendApp,login) =>{
    const jwt = require('jsonwebtoken');
    return jwt.sign({login: login}, backendApp.config.jwtSecret);
};