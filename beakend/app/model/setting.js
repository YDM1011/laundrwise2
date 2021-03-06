const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    createdBy: {itemId:{
        type: Schema.Types.ObjectId,
        ref: "Client"
    }},
    isAppBlock: Boolean,
    percentage: Number,
    name: String,
    email: String,
    mobile: String,
    fb: String,
    yt: String,
    inst: String,
    des: String,
    footerDes: String,
    metaDes: String,
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

mongoose.model('Setting', schema);

