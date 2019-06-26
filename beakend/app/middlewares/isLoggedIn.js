var mongoose = require('mongoose');
var Client = mongoose.model('Client');
var Admin = mongoose.model('Admin');
const config = require('../config/config');

module.exports = function (req, res, next) {
  if (req.jwt) {
      const jwt = require('jsonwebtoken');
      const protect = req.cookies['adminToken'] || req.cookies['token'] || req.jwt.token;
      console.log("Cookies", protect, req.cookies)
      if(!protect){
          return res.forbidden("forbidden12");
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
                          Admin.findOne({login: data.login })
                              .exec((err, infoA)=>{
                                  if (err) return next(err);
                                  if (!infoA) return res.forbidden("forbidden3");
                                  req.user = infoA.toObject();
                                  req.isAdmin = true;
                                  bodyModyfi(req);
                                  next()
                              });
                      } else {
                          req.user = info.toObject();
                          bodyModyfi(req);
                          next()
                      }

                  });
          }
      });
  } else {
    res.status(401).send("Login is required");
  }
};

const bodyModyfi = (req) => {
  req.body['createdBy'] = {};
  req.body.createdBy['itemId'] = req.user._id;
  return req.body
};