var mongoose = require('mongoose');
var Admin = mongoose.model('Admin');
const config = require('../config/config');

module.exports = function (req, res, next) {
  if (req.jwt) {
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
                      if (req.user) return next();
                      req.user = infoA.toObject();
                      req.isAdmin = true;
                      next()
                  });
          }
      });
  } else {
    res.status(401).send("Login is required");
  }
};