const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * 1 - cleaners
 * 2 - delivery
 * role - manedger 1/2 superManedger 1/2 client
 */
const schem = new Schema({
    login: {type: String, required: [true, "Login is required"]},
    pass: {type: String, required: [true, "Password is required"]},
    firstName: {type: String, required: [true, "First Name is required"]},
    lastName: {type: String, required: [true, "Last Name is required"]},
    email: {type: String},
    mobile: {type: String},
    address1: {type: String},
    address2: String,
    country: {type: String},
    cityCode: {type: String},
    basketList: [],
    basketListCount: Number,
    token: String,
    role: String,
    data: {type: Date, default: new Date()}
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
require("./model_methods/object/client")(schem);
mongoose.model('Client', schem);