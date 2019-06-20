module.exports = function (schema) {

  schema.methods.signin = function (req,res,backendApp) {
      res.cookie('token',this.token,
          {
              domain: backendApp.config.site.sidDomain,
              path:"/",
              httpOnly: true
          });
      res.cookie('userId', String(this._id),
          {
              domain: backendApp.config.site.sidDomain,
              path:"/",
              httpOnly: false
          });
      res.ok({token:this.token,userId:this._id, user: this.toObject()})
  };
  schema.methods.logout = function (req,res) {
      res.clearCookie('token');
      res.clearCookie('userId');
      res.ok({mes:'ok'})
  };
};
