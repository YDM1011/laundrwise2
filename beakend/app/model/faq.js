const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    question: String,
    answer: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Admin"
    },
    date: {type: Date, default: new Date()}
},{
    toJSON: {
        transform: function (doc, ret) {
            delete ret.pass;
            delete ret.token;
        }
    },
    toObject: {
        transform: function (doc, ret) {
            delete ret.pass;
            delete ret.token;
        },
        virtuals: true,
    },
    createRestApi: true,
    strict: true,

});

mongoose.model('Faq', schema);

