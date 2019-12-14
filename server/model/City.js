const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Document
const weatherSchema = new Schema({
    cityName: String,
    temperature: Number,
    condition: String,
    conditionPic: String

})

// Collection

const Weather = mongoose.model('weather', weatherSchema)
module.exports = Weather