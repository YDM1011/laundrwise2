const glob = require('glob');

module.exports = function (backendApp) {

  let apiControllers = glob.sync(backendApp.config.root+'/service/control/*.js');

  apiControllers.forEach((controller) => {
      backendApp['service'][parseFileName(controller).toLowerCase()] = require(controller);
  });

  backendApp.service.ws();
};
const parseFileName = str =>{
    return str.match(/\/?([^:\/\s]+)((\/\w+)*\/)([a-zA-Z]\w+)?/i)[4]
};