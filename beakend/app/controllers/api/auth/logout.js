module.exports = (backendApp, router) => {

    router.post('/logout', [], (req,res,next) => {

        const Client = backendApp.mongoose.model("Client");
        if (req.jwt) {
            const jwt = require('jsonwebtoken');
            const protect = req.cookies['token'] || req.jwt.token;
            if(!protect){
                return res.forbidden("forbidden");
            }
            const connect = protect.split(" ");
            jwt.verify(connect[0], config.jwtSecret, (err,data)=>{
                if (err) {
                    return res.serverError("Token error");
                }else{

                    Client.findOne({login: data.login })
                        .exec((err, info)=>{
                            if (err) return next(err);
                            if (!info) return res.forbidden("forbidden");
                            info.logout()
                        });
                }
            });
        } else {
            res.status(401).send('forbidden');
        }
    });
};
