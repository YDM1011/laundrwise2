module.exports = function (backendApp, router) {

    router.get('/productBy/:cleanerId', [backendApp.middlewares.isLoggedIn], async function (req, res, next) {
        const Product = backendApp.mongoose.model("Product");
        try {
            Product.find({
                "createdBy.itemId": req.user.id,
                cleanerOwner: req.params.cleanerId,
            }).exec((e,r)=>{
                if (e) return res.serverError(e);
                if (!r) return res.notFound("One of product is invalid!");
                if (r) {
                    let obj = {};
                    r.map(it=>{
                        obj[it.currentOrder] = it;
                    });
                    res.ok(obj)
                }
            })
        } catch(e) {
            res.notFound("Can't be read")
        }
    });
};