

const request = require('request')



var url = 'https://api.darksky.net/forecast/5abf12e75f7516f76fe1069a6eae5cec/29.8183,-95.5250?units=us'




   var req = () => {
    request({url: url, json:true} , (error, response) => {
    
        var temp = response.body.currently
        var newTemp = Object.keys(temp).map((key, index) => {
            return console.log(temp[key])
        })
        
     document.getElementById("houston").innerHTML = "hey"
 })
   }
  




// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamFja2llc2FudGFuYSIsImEiOiJjazQ4dXczd2IxOXd6M2VuNjliamhrZXg2In0.f1mca-KowMtSV757I8TrDQ'

// request({url: geocodeURL, json:true} , (error, response) => {
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(`${latitude} ${longitude}`)
// }) 