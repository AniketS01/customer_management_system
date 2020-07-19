const mongoose = require('mongoose')

const peopleSchema = mongoose.Schema({
    name: {type: String},
    phone: {type: String},
    email: {type: String},
    adress: {type: String},
})


module.exports = mongoose.model('people', peopleSchema)