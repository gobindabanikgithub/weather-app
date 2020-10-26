const express = require('express')
const router = express.Router()
const WeatherController = require('../../controller/weatherController');

router.get('/',(req,res, next) => {
    res.send('From API route v1')
})

router.get('/getWeather/:place', WeatherController.getWeather);

module.exports = router