const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=427ef19605866d4579319366ff332f6c&query=' + longitude + ',' + latitude

    request({
        url,
        json: true
    }, (error, { body } = {}) => {
        if (error) {
            callback("Something Went Wrong", undefined)
        } else if (body.error) {
            callback("Something Else Went Wrong", undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                desc: body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast