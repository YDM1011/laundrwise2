module.exports.preSave = (req,res,next, backendApp) => {
    console.log(req.body)
    req.body.date = req.body.date ? req.body.date : new Date();
    console.log(req.body)
    next()
};