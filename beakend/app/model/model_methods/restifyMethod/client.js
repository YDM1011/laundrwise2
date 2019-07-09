module.exports.preRead = (req,res,next, backendApp) => {
    // let err = backendApp.service.signUpValidator(req.body);
    // if (err) return res.badRequest(err);
    req.body.login = req.body.login.toLowerCase();
    req.body.email = req.body.email.toLowerCase();
    next()
};
module.exports.preUpdate = (req,res,next, backendApp) => {
    // let err = backendApp.service.signUpValidator(req.body);
    // if (err) return res.badRequest(err);
    delete req.body.createdBy;
    delete req.body._id;
    next()
};