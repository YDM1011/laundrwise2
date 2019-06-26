let restFunction = {};
module.exports = function (backendApp) {
    // const restify = require('express-restify-mongoose');
    var restify = require('express-restify-mongoose');
    var modelNames = backendApp.mongoose.modelNames();
    modelNames.forEach(function (modelName) {
        var model = backendApp.mongoose.model(modelName);
        if (model.schema.options.createRestApi) {
            var router = backendApp.express.Router();
            restify.serve(router, model, {
                prefix: "",
                version: "",
                runValidators: true,
                totalCountHeader: true,
                lean: false,
                findOneAndUpdate: true,
                findOneAndRemove: true,
                postRead: model.schema.options.postRead || function (req, res, next) {
                    next(null);
                },
                // preRead: (req,res,next)=>{preRead(model,req,res,next)},
                // for access rights control
                // preMiddleware: backendApp.middlewares.isLoggedIn,
                preRead: [schemaPreRead],
                preCreate: [backendApp.middlewares.isLoggedIn, schemaPreSave],
                preUpdate: [backendApp.middlewares.isLoggedIn, schemaPreUpdate],
                preDelete: backendApp.middlewares.isLoggedIn,
                // preCustomLink: backendApp.middlewares.isLoggedIn
            });
            backendApp.app.use("/api", router);
            // backendApp.app.use("/", require('../../routes'));
        }
    });

    const glob = require('glob');
    let schemaMethods = glob.sync(backendApp.config.root+'/model/model_methods/restifyMethod/*.js');
    schemaMethods.forEach((controller) => {
        restFunction[parseFileName(controller).toLowerCase()] = require(controller);
    });

    function schemaPreRead (req, res, next) {
        let schem = restFunction[String(req.erm.model.modelName.toLowerCase())];
        console.log("Schema", schem, req.erm.model.modelName);
        if (schem) {
            try {
                console.log("ok")
                schem.preRead(req, res, next, backendApp);
            } catch (e) {
                next()
            }
        } else {
            next()
        }

    };

    function schemaPreSave (req, res, next) {
        let schem = restFunction[String(req.erm.model.modelName.toLowerCase())];
        console.log("Schema", schem, req.erm.model.modelName);
        if (schem) {
            try {
                req.body.date = req.body.date ? req.body.date : new Date();
                schem.preSave(req, res, next, backendApp);
            } catch (e) {
                next()
            }
        } else {
            next()
        }
    };

    function schemaPreUpdate (req, res, next) {
        let schem = restFunction[String(req.erm.model.modelName.toLowerCase())];
        console.log("Schema", schem, req.erm.model.modelName);
        if (schem) {
            try {
                schem.preUpdate(req, res, next, backendApp);
            } catch (e) {
                next()
            }
        } else {
            next()
        }
    };
};

const parseFileName = str =>{
    return str.match(/\/?([^:\/\s]+)((\/\w+)*\/)([a-zA-Z]\w+)?/i)[4]
};


const preRead = (req,res,next) => {
    try{
        if (req._ermQueryOptions.skip){
            req._ermQueryOptions.skip = req.query.skip * req.query.limit;
            next()
        }else{
            next()
        }
    }catch(e){}

};
