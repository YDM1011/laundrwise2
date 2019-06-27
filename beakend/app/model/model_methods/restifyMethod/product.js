module.exports.preRead = async (req,res,next, backendApp) => {
    await readStep (req,res,next, backendApp);
    await readStep2 (req,res,next, backendApp);
    next()
    // return [readStep]
};

const readStep = async (req,res,next,backendApp) => {
    return new Promise((rs,rj)=>{
        // req.erm.query = {populate:{path:'superManager'}};
        console.log("ok!!!",req.erm);
        rs()
    })
};
const readStep2 = async (req,res,next,backendApp) => {
    return new Promise((rs,rj)=>{
        // req.erm.query = {populate:{path:'superManager'}};
        console.log("ok!!!2",req.erm);
        rs()
    })
};

module.exports.preUpdate = async (req,res,next, backendApp) => {
    // if (typeof req.body.manager == 'object'){
    //     let manager = await createManeger(req, backendApp).catch(e=>{res.notFound(e)});
    //     next()
    // } else {
    //     next()
    // }
    next()
};

// const createManeger = (req, backendApp) => {
//     return new Promise((rs,rj)=>{
//
//     })
// };
