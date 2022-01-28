const { Schema, model } = require('mongoose');

const carSchema = new Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: Number }
});

const Car = model('Car', carSchema);

module.exports = Car;