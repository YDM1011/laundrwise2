const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schem = new Schema({
    login: {type: String, unique: true, required: [true, "Login is required"]},
    pass: {type: String, required: [true, "Password is required"]},
    firstName: {type: String, required: [true, "First Name is required"]},
    lastName: {type: String, required: [true, "Last Name is required"]},
    email: {type: String, required: [true, "Email is required"]},
    mobile: {type: String, required: [true, "Mobile is required"]},
    address1: {type: String, required: [true, "Address is required"]},
    address2: String,
    country: {type: String, required: [true, "Country is required"]},
    cityCode: {type: String, required: [true, "City code is required"]},
    basketList: [],
    basketListCount: Number,
    token: String,
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
        }
    },
    createRestApi: true,
    strict: true,

});
require("./model_methods/object/client")(schem);
mongoose.model('Client', schem);