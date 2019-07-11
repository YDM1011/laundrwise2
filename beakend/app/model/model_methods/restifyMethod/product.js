module.exports.preRead = async (req,res,next, backendApp) => {
    await readStep (req,res,next, backendApp);
    next()
    // return [readStep]
};

const readStep = async (req,res,next,backendApp) => {
    return new Promise((rs,rj)=>{
        // req.erm.query = {populate:{path:'superManager'}};
        console.log("ok!!!",req.erm);
        rs()
    })
};

// module.exports.preUpdate = async (req,res,next, backendApp) => {
//     try {
//         next()
//     } catch(e) {
//         res.notFound("Can't be update")
//     }
// };

module.exports.preSave = async (req, res, next, backendApp) => {
    try {
        console.log(req.body);
        if (req.body) {
            // let user = await checkUser(req, res, backendApp).catch(e => {return res.notFound(e)});
            // if (user) {
                req.body['createdBy'] = {itemId:req.user._id};
                // console.log(req.body, user, req.user)
                let product = await createProduct(req.body, backendApp).catch(e => {return res.notFound(e)});
                let basket = await checkAndInitBasket(req, backendApp, product).catch(e => {return res.notFound(e)});
                await setBasketToProduct(product, backendApp, basket).catch(e => {return res.notFound(e)});
                res.ok(product);
            // }
            // console.log(manager, "maneger");
        } else {
            next()
        }
    } catch(e) {
        res.notFound("Can't be create")
    }
};
const checkAndInitBasket = (req, backendApp, product) => {
    const Basket = backendApp.mongoose.model('Basket');
    return new Promise ((rs,rj)=>{
        Basket.findOne({
            "createdBy.userId": req.user.id,
            cleanerOwner: req.body.cleaner,
            status: 0
        }).exec((e,r)=>{
            if (e) return rj(e);
            if (!r){
                let data = {
                    'createdBy.userId': req.user._id,
                    products: [product._id],
                    cleanerOwner: product.cleaner,
                    status: 0
                };
                Basket.create(data, (e,r)=>{
                    if (e) return rj(e);
                    if (!r) return rj('Not found!');
                    if (r) return rs(r);
                })
            }
            if (r) {
                Basket.findOneAndUpdate({
                    "createdBy.userId": req.user.id,
                    cleanerOwner: req.body.cleaner,
                    status: 0
                }, {$push:{products:product._id}}, {new:true})
                    .exec((e,r)=>{
                        if (e) return rj(e);
                        if (!r) return rj('Not found!');
                        if (r) return rs(r);
                    })
            }
        })
    })
};

const createProduct = (data,backendApp) => {
    const Product = backendApp.mongoose.model('Product');
    return new Promise((rs,rj)=>{
        Product.create(data,(e,r)=>{
            if (e) return rj(e);
            if (!r) return rj("One of product is invalid!");
            if (r) return rs(r)
        });
    })
};

const setBasketToProduct = (data,backendApp,basket) => {
    const Product = backendApp.mongoose.model('Product');
    return new Promise((rs,rj)=>{
        Product.findOneAndUpdate({_id:data._id}, {basketOwner: basket._id})
            .exec((e,r)=>{
                if (e) return rj(e);
                if (!r) return rj("One of product is invalid!");
                if (r) return rs(r)
            });
    })
};

const checkUser = (req,res,backendApp)=>{
    return new Promise((rs,rj)=>{
        backendApp.middlewares.isLoggedIn(req, res, (e = true)=>{
            rs(e)
        })
    })
};