
// const jquery = require('jquery')
// const apiCaller = require('../server/routes/api')


class TempManager {

    constructor(cityData) {

        this.cityData = []
    }

    getDataFromDB(){
        $.get('/cities', function(req, res){
            let newCityData = req.query
            if(newCityDate)
            { 
                this.cityData = newCityData
            }
        })
    }

    async getCityData() {
        let cityName = await $.get('/city')
        this.cityData.push(cityName)
    }

    saveCity(cityName){
        $.post(`/city?q=${cityName}`, function(req, res){
            let newCityName = req.body.cityName
            res.send(this.cityData.find(c => c.cityName === newCityName ))

        })
    }

    // removeCity(cityName){
    //     $.ajax({
    //         url: '/city'
    //         type: 'DELETE'
    //         success: function(cityName){
                
    //         }
    //     })

    // }


}

module.exports = TempManager