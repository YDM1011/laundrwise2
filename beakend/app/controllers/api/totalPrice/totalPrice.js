const fs = require('fs');
module.exports = function (backendApp, router) {

    router.get('/totalPrice', [backendApp.middlewares.isLoggedIn], async function (req, res, next) {
        const Basket = backendApp.mongoose.model('Basket');
        try {
            Basket.find({"createdBy.userId":req.user._id, cleanerOwner:{$exists:true}})
                .exec((e,r)=>{
                    if (e) return res.serverError(e);
                    if (!r) return res.notFound('Not found!');
                    if (r) {
                        let price = 0;
                        r.map(obj=>{
                            price += obj.totalPrice
                        });
                        res.ok({totalPrice:price})
                    };
                })
        } catch(e) {
            res.notFound("Can't be valid")
        }
        // res.ok(r)
    });
};