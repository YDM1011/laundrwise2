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
    if (typeof req.body.manager == 'object') {
        let manager = null;
        if (req.body.manager.role === 'superManagerCleaner') {
            manager = await createSManeger(req, backendApp).catch(e=>{return res.notFound(e)});
            if (!manager) return res.badRequest('Bad request!');
            req.body = {superManager: manager._id};
            next()
        }
        if (req.body.manager.role === 'managerCleaner') {
            console.log(req.body)
            manager = await createManeger(req, backendApp).catch(e=>{return res.notFound(e)});
            if (!manager) return res.badRequest('Bad request!');
            req.body = {$push:{managers: manager._id}};
            backendApp.mongoose.model('Cleaner')
                .findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
                .exec((e,r)=>{
                    if(e) return res.serverError(e);
                    if(!r) return res.badRequest();
                    if(r) return res.ok(r);
                })
        }

        console.log(manager, "maneger");


    } else {
        next()
    }
};

const createSManeger = (req, backendApp) => {
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
