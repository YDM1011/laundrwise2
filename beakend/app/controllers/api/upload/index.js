const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');
const path = require('path');

module.exports = (backendApp, router) => {
    router.post('/upload', [], function (req, res, next) {
        let form = new IncomingForm();
        let readStream, createStream, fileName;
        form.on('file', (field, file) => {
            readStream = fs.createReadStream(file.path);
            fileName = new Date().getTime() + '--' + file.name;
            createStream = fs.createWriteStream(path.join(__dirname, '../../../../upload/'+fileName));
            readStream.pipe(createStream);
        });
        form.on('end', (e) => {
            res.ok({file: fileName});
        });
        form.parse(req);
    });
};
