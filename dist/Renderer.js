class Renderer {
    constructor(){

    }
    renderData(allCityData) {
            $('#container').empty()
            const source = $("#weather-block").html()
            const template = Handlebars.compile(source)
            const newHTML = template({allCityData})
            $("#container").append(newHTML)
        }
    }
    }
}