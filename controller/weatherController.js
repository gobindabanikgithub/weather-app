const geocode= require('../utills/geocode')
const forecast= require('../utills/forecast') 

const getWeather = (req, res) => {
    console.log(req.body.name);
    try{ //try block
        let address = req.params.place;
        console.log(address);
        if(!address){
            console.log('Please enter address');
            
        }else{
            geocode(address, (error, {latitude,longitude,location}= {}) => {
                if (error) {
                    return console.log(error)
                }
            
                forecast(latitude,longitude, (error, forecastData) => {
                    if (error) {
                        return  res.status(401).json({status:false, message: 'ERROR', forecastData});
                    }
                    console.log("");
                    console.log(location)
                    console.log(forecastData)
                    res.status(201).json({status:true, message: 'WEATHER_FORECAST_DATA', forecastData});
                })
            })
        }
    }catch (e) { //catch block of try
        console.log(e);
        res.status(500).json({status:false, message: 'ERROR', e});
    }
} 

module.exports = {
    getWeather
}