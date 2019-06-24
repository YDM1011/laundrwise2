const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schem = new Schema({
    name: {type: String, required: [true, "Cleaner Name is required"]},
    country: {type: String, required: [true, "Cleaner country is required"]},
    city: {type: String, required: [true, "Cleaner city is required"]},
    address: {type: String, required: [true, "Cleaner address is required"]},
    category: [{
        type: Schema.Types.ObjectId,
        ref: "Category"
    }],
    createdBy: {itemId:{
            type: Schema.Types.ObjectId,
            ref: "Client"
        }},
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
        }
    },
    createRestApi: true,
    strict: true,

});
mongoose.model('Cleaner', schem);