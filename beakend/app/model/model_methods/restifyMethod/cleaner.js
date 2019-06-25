module.exports.preUpdate = async (req,res,next, backendApp) => {
    if (typeof req.body.manager == 'object'){
        await createManeger()
    }else{
        next()
    }

};

const createManeger = (req, backendApp) => {
    return new Promise((rs,rj)=>{

    })
};