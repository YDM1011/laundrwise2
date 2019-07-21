module.exports.preSave = async (req, res, next, backendApp) => {
    try {
        const Admin = backendApp.mongoose.model('Admin');
        await isLoggedIn(req,res,backendApp);
        Admin.findOne({_id:req.user._id}).exec((e,r)=>{
            console.log(e, r)
            if (e || !r) return res.badRequest();
            if (r) return next();
        });
    } catch(e) {
        res.notFound("Can't be create")
    }
};

// module.exports.preRead = async (req,res,next, backendApp) => {
// };

const isLoggedIn = (req,res,backendApp) => {
    return new Promise((rs,rj)=>{
        backendApp.middlewares.isLoggedIn(req,res, (e=null)=>{rs(e)})
    })
}