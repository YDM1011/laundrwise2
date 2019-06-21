module.exports.preRead = (req,res,next, backendApp) => {
    // let err = backendApp.service.signUpValidator(req.body);
    // if (err) return res.badRequest(err);
    next()
};
module.exports.preUpdate = (req,res,next, backendApp) => {
    // let err = backendApp.service.signUpValidator(req.body);
    // if (err) return res.badRequest(err);
    delete req.body.createdBy;
    delete req.body._id;
    next()
};