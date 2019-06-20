module.exports = function (schema) {

  schema.methods.signin = function (req,res,backendApp) {
      res.cookie('token',this.token,
          {
              domain: backendApp.config.site.sidDomain,
              path:"/",
              httpOnly: true
          });
      res.cookie('useriId', String(this._id),
          {
              domain: backendApp.config.site.sidDomain,
              path:"/",
              httpOnly: false
          });
      res.ok({token:this.token,userId:this._id, user: this.toObject()})
  };
  schema.methods.logout = function (req,res,backendApp) {
      res.cookie('token',this.token,
          {
              domain: backendApp.config.site.sidDomain,
              path:"/",
              maxAge: 0,
              httpOnly: true
          });
      res.cookie('useriId', String(this._id),
          {
              domain: backendApp.config.site.sidDomain,
              path:"/",
              maxAge: 0,
              httpOnly: false
          });
      res.ok({})
  };
};
