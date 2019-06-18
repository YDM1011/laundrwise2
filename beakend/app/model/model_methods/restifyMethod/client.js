module.exports.preRead = (req,res,next, backendApp) => {
    backendApp.service.email({
        to: 'ydm101194@gmail.com',
        subject: 'customer',
        temp: 'client',
        tempObj: {

        }
    },backendApp);
    next()
};