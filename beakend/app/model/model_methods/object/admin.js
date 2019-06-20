module.exports = function (schema) {

  schema.methods.signin = function (req,res,backendApp) {
      res.cookie('adminToken',this.token,
          {
              domain: backendApp.config.site.sidDomain,
              path:"/",
              maxAge: 0,
              httpOnly: true
          });
      res.cookie('adminId', String(this._id),
          {
              domain: backendApp.config.site.sidDomain,
              path:"/",
              maxAge: 0,
              httpOnly: false
          });
      res.ok({token:this.token,userId:this._id, user: this.toObject()})
  };
};
