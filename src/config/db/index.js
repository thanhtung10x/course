const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Course_dev');
        console.log('Connected to DB DONE!!!!!');
    } catch (error) {
        console.log('Connected to DB FALSE!!!!!');
    }
}

module.exports = { connect };
