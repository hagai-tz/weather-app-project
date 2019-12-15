const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Document
const weatherSchema = new Schema({
    cityName: String,
    temperature: Number,
    condition: String,
    conditionPic: String,
    country: String,
    timezone: Number,
    cityId: Number

})

// Collection

const Weather = mongoose.model('weather', weatherSchema)
module.exports = Weather
