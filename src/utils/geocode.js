const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidnVsZTAyMiIsImEiOiJja2hvMHkzcDYwNTJvMnpwNXZxbGQ1ZmZrIn0.GniZAXkv9IMHlx2d1Q4mVw'

    request({
        url,
        json: true
    }, (error, { body } = {}) => {
        if (error) {
            callback('Something went wrong', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geocode