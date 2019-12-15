// const TempManager = require('./TempManager')
// const Renderer = require('./Renderer')


//require folders

// let city = "london"
const t1 = new TempManager()
console.log(t1)

// t1.getDataFromDB(city)

// const loadPage = function(){
//     t1.getDataFromDB()
// }

// const handleSearch = async function(){
//     let cityInput = $("#city-input").val()
//     let weatherData = await getCityData(cityInput)
//     renderData(weatherData)
// }

// loadPage()

// $("#city-btn").on("click", function () {
//     let cityInput = $("#city-input").val()
//     handleSearch()

//     }

 $("#city-btn").on("click", function () {
     let cityInput = $("#city-input").val()
     console.log(cityInput)
     t1.getDataFromDB(cityInput)

 })
