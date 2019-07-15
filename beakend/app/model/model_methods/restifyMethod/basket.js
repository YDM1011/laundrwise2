module.exports.preRead = async (req,res,next, backendApp) => {
    next()
};

module.exports.preUpdate = async (req,res,next, backendApp) => {
    try {
        switch (parseInt(req.body.status)){
            case 0: return next();
            case 1: return next();
            case 2:

                let superManeger = await checkRole(req, backendApp).catch(e=>{return res.notFound(e)});
                console.log('!!!!!!', superManeger)
                if (superManeger && (superManeger.role == req.body.role)) return res.badRequest();
                let cleaner = await getCleaner(superManeger).catch(e=>{return res.notFound(e)});
                await validate(req,res,cleaner,backendApp).catch(e=>{return res.notFound(e)});
                let update = await updateBasketByCleaner(req,cleaner).catch(e=>{return res.notFound(e)});
                return res.ok(update);
        }
    } catch(e) {
        res.notFound("Can't be update")
    }
};

// module.exports.PreDel = async (req,res,next, backendApp) => {
//     const Product = backendApp.mongoose.model('Product');
//     const Basket = backendApp.mongoose.model('Basket');
//     try {
//         Product.findById(req.params.id)
//             .exec((e,r)=>{
//                 if (e) return res.serverError(e);
//                 if (!r) return res.notFound('Not found!');
//                 if (r) {
//                     let inc = r.price*(0-r.count);
//                     Basket.findOneAndUpdate({
//                         "createdBy.userId": req.user.id,
//                         products:{$in:req.params.id},
//                         status: 0
//                     }, { $inc: {totalPrice:inc} }, {new:true})
//                         .exec((e,r)=>{
//                             if (e) return res.serverError(e);
//                             if (!r) return res.notFound('Not found!');
//                             if (r) {next()};
//                         })
//                 };
//             });
//     } catch(e) {
//         res.notFound("Can't be update")
//     }
// };

const getCleaner = async superManeger => {
    const Cleaner = backendApp.mongoose.model('Cleaner');
    return new Promise((rs,rj)=>{
        Cleaner.findOne({superManager: superManeger._id})
            .exec((e,r)=>{
                if (e) return rj(e);
                if (!r) return rj('not found');
                if (r) return rs(r);
            })
    })
};
const updateBasketByCleaner = async (req,cleaner) => {
    const Basket = backendApp.mongoose.model('Basket');
    return new Promise((rs,rj)=>{
        Basket.findOneAndUpdate({cleanerOwner: cleaner._id}, req.body, {new:true})
            .exec((e,r)=>{
                if (e) return rj(e);
                if (!r) return rj('not found');
                if (r) return rs(r);
            })
    })
};
const validate = (req,res,cleaner,backendApp)=>{
    return new Promise((rs,rj)=>{
        const d = req.body;
        if (d.managerCleanerOwner) {
            /** try find auto asign if settings cleaner's set do auto */
            // res.notFound('Manager was not assigned!');
            rs()
        } else if (cleaner.autoAssign) {
            backendApp.mongoose.model('ActionLog')
                .findOne({cleaner:cleaner._id})
                .select('ordersOpenCount _id')
                .exec((e,r)=>{
                    if (e) return rj(e);
                    if (!r) return rj('not found');
                    if (r) {
                        searchLess(res,log,cleaner,backendApp,minCountOfLog=>{
                            let loger = minCountOfLog || r;
                            req.body.managerCleanerOwner = loger._id;
                            rs()
                        })
                    }
                });
            /** find clients/manager with low orders */
        } else {
            rj('Manager was not assigned!');
        }
    })
};

let triger = null;
const searchLess = (res,log,cleaner,backendApp,next)=>{

    backendApp.mongoose.model('ActionLog')
        .findOne({cleaner:cleaner._id, ordersOpenCount: { $lt: log.ordersOpenCount } })
        .select('ordersOpenCount _id')
        .exec((e,r)=>{
            if (e) return res.serverError(e);
            if (!r) next(triger);
            if (r) {
                triger = r;
                searchLess(r,cleaner,backendApp,next)
            }
        });
};

const checkRole = (req, backendApp) => {
    return new Promise((rs,rj)=>{
        const error = 'Role is invalid';
        const client = backendApp.mongoose.model('Client');
        const action = (e,r) => {
            if (e) return rj(error);
            if (!r) return rj(error);
            if (r) return rs(r);
        };
        console.log()
        client.findOne({_id:req.user._id}).exec(action);
    });
};