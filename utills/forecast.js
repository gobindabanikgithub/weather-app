const request = require('request')

    const forecast = (latitude,longitude, callback) => {

        const url='http://api.weatherstack.com/current?access_key=277bfe9876e7570eae179c4651130f24&query='+latitude+','+longitude+'&units=m'

        request({ url, json: true }, (error, {body}) => {
            if (error) {
                callback('Unable to connect to Weather services!', undefined)
            } else if (body.error) {
                callback('Unable to find location. Try another search.',undefined)
            } else {
                callback(undefined, 
                    body.current.weather_descriptions[0] + ' It is currently ' +
                    body.current.temperature + ' degrees out. And Feels like ' +
                    body.current.feelslike + ' degrees out.'
                )
            }
        })
    }

module.exports = forecast