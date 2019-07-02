module.exports.preRead = async (req,res,next, backendApp) => {
    await readStep (req,res,next, backendApp);
    await readStep2 (req,res,next, backendApp);
    next()
};

const readStep = async (req,res,next,backendApp) => {
    return new Promise((rs,rj)=>{

        rs()
    })
};
const readStep2 = async (req,res,next,backendApp) => {
    return new Promise((rs,rj)=>{

        rs()
    })
};

module.exports.preUpdate = async (req,res,next, backendApp) => {
    if (typeof req.body.manager == 'object'){
        let manager = await createManeger(req, backendApp).catch(e=>{return res.notFound(e)});
        console.log(manager, "maneger")
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
                if(err) return rj(err);
                rs(r);
            })
    })
};
const getToken = (backendApp,login) =>{
    const jwt = require('jsonwebtoken');
    return jwt.sign({login: login}, backendApp.config.jwtSecret);
};