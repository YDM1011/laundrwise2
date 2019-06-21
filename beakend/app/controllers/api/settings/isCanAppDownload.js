module.exports = (backendApp, router) => {
    router.get('/isCanAppDownload', [], (req,res,next) => {
        res.ok(false)
    });
};
