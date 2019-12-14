
import { type } from "os"


class TempManager {
    constructor(cityData, ){
        this.cityData = [],


    }

    getDataFromDB(res){
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

    removeCity(cityName){
        $.ajax({
            url: '/city'
            type: 'DELETE'
            success: function(cityName){
                
            }
        })

    }


}