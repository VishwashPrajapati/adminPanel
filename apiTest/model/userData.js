const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : String,
    description : String
});

module.exports = mongoose.model('User',productSchema);