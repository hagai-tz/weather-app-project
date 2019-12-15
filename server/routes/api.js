


const express = require('express')
const router = express.Router()
const request = require('request')
const bodyParser = require('body-parser')

const Weather = require('../model/City')
const apiKey = "613dea6ca2fc442863e5a75447bae338"




router.get('/city', function (req, res) {
    const cityName = req.query.q
    console.log(cityName)

    request(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`, function (err, response) {

        const weatherData = response.body
        console.log(weatherData)
        res.send(weatherData)
    })

})


router.post('/city', function (req, res) {
    const cityName = req.query.q
    console.log(cityName)

    request(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`, function (err, response) {
        const weatherData = JSON.parse(response.body)
        console.log(weatherData.name)
        let newCity = {

            country: weatherData.sys.country,
            cityName: weatherData.name,
            timezone: weatherData.timezone,
            cityId: weatherData.id
        }
        
        newCity = new Weather({
            
            cityName: newCity.cityName,
            country: newCity.country,
            timezone: newCity.timezone,
            cityId: newCity.cityId
            
        })
        newCity.save()
        console.log(newCity)
        res.send(newCity)
    })

})


router.delete('/city', function (req, res) {
    const cityNameDel = req.query.q
    console.log(cityNameDel)

    Weather.deleteOne({ cityName: cityNameDel}, function(err){
        console.log(err)
    })
    res.end()
})



router.get('/cities', async function (req, res) {
    const citiesData = req.query.q
    let newData = await Weather.find({ cityName: citiesData })
    res.send(newData)

})




// \\require weather for the db
module.exports = router
