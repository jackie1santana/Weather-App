const request = require('request')

const url = 'https://api.darksky.net/forecast/5abf12e75f7516f76fe1069a6eae5cec/29.8183,-95.5250'

request({url: url, json:true} , (error, response) => {
    console.log(response.body.currently)
})
