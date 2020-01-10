const mongoose = require('mongoose');

const mongiURI = "mongodb+srv://hasnain:H--95@cluster0-opxki.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongiURI);

module.exports = mongoose;
