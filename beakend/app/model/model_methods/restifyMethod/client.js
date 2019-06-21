module.exports.preRead = (req,res,next, backendApp) => {
    // let err = backendApp.service.signUpValidator(req.body);
    // if (err) return res.badRequest(err);
    next()
};
module.exports.preUpdate = (req,res,next, backendApp) => {
    // let err = backendApp.service.signUpValidator(req.body);
    // if (err) return res.badRequest(err);
    console.log("Hello!!")
    delete req.body.createdBy;
    req.body = req.body.toString()
    req.body['_id'] = '5d0b7b0c254a8d1ee0580d90'
    console.log(req.body)
    next()
};