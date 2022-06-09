const {Schema, model} = require('mongoose');

const travelSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    image: {
        type: String,
        required: true,
    },
    descr: {
        type: String,
        required: true,
    }

});

module.exports = model('Travel', travelSchema);