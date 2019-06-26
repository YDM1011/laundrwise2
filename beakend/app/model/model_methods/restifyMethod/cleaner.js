module.exports.preRead = (req,res,next, backendApp) => {
    // let err = backendApp.service.signUpValidator(req.body);
    // if (err) return res.badRequest(err);
    req.erm.query = {populate:{path:'superManager'}};
    console.log("ok!!!",req.erm)
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
        backendApp.mongoose.model('Client')
            .create(req.body.manager, (err,r)=>{
                console.log(err,r);
                if(err) return rj(err);
                rs(r);
            })
    })
};
