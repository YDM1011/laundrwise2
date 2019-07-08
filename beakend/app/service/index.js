const glob = require('glob');

module.exports = function (backendApp) {

  let apiControllers = glob.sync(backendApp.config.root+'/service/control/*.js');

  apiControllers.forEach((controller) => {
      console.log(controller)
      backendApp['service'][parseFileName(controller).toLowerCase()] = require(controller);
  });
    console.log(backendApp.service)
  backendApp.service.ws(backendApp);
};
const parseFileName = str =>{
    // return str.match(/\/?([^:\/\s]+)((\/\w+)*\/)([a-zA-Z]\w+)?/ig)[4]
    let strRout = str.split('.js')[0];
    return strRout ? strRout.split('control/')[1] : ''
};