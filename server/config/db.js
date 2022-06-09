const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true
        })
        console.log(`MongoDB connected to: Atls`.blue.bold);
    } catch (err) {
        console.log(err);
    }
}
module.exports = connectDB