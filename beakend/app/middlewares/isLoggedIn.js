var mongoose = require('mongoose');
var Client = mongoose.model('Client');
var Admin = mongoose.model('Admin');
const config = require('../config/config');

module.exports = function (req, res, next) {
  if (req.jwt) {
      const jwt = require('jsonwebtoken');
      const protect = req.cookies['token'] || req.jwt.token;
      if(!protect){
          return tryAsAdmin(req, res, next);
      }
      const connect = protect.split(" ");
      jwt.verify(connect[0], config.jwtSecret, (err,data)=>{
          if (err) {
              return res.serverError("Token error");
          }else{

              Client.findOne({login: data.login })
                  .exec((err, info)=>{
                      if (err) return next(err);
                      if (!info){
                          tryAsAdmin(req, res, next)
                      } else {
                          req.user = info.toObject();
                          bodyModyfi(req);
                          tryAsAdmin(req, res, next);
                      }

                  });
          }
      });
  } else {
    res.status(401).send("Login is required");
  }
};

const tryAsAdmin = (req,res,next) => {
    const jwt = require('jsonwebtoken');
    const protect = req.cookies['adminToken'] || req.jwt.token;
    if(!protect && !req.user){
        return res.forbidden("forbidden12");
    }
    const connect = protect.split(" ");
    jwt.verify(connect[0], config.jwtSecret, (err,data)=>{
        if (err) {
            if (!req.user) return res.serverError("Token error");
            return next()
        }else{
            Admin.findOne({login: data.login })
                .exec((err, infoA)=>{
                    if (err) return next(err);
                    if (!infoA){
                        if (!req.user) return res.forbidden("forbidden3");
                        return next()
                    }
                    if (req.user) return next()
                    req.user = infoA.toObject();
                    req.isAdmin = true;
                    bodyModyfi(req);
                    next()
                });
        }
    });
}

const bodyModyfi = (req) => {
  req.body['createdBy'] = {};
  req.body.createdBy['itemId'] = req.user._id;
  return req.body
};