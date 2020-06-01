const request = require('request');

var geocodeAddress = (address,callback)=>{
  var encodeAddress = encodeURIComponent(address);
    //console.log(`https:api.mapbox.com/geocoding/v5/mapbox.places/${encodeAddress}.json?types=address&&access_token=pk.eyJ1IjoibWFuZ2FsbXVkaXQiLCJhIjoiY2thczhsYm9kMDZybTMwcnNjdzE0NXIzdiJ9.Q8LN2r898_fnACAjMAs28w`);
    request({
    url:`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeAddress}.json?types=address&access_token=pk.eyJ1IjoibWFuZ2FsbXVkaXQiLCJhIjoiY2thczhsYm9kMDZybTMwcnNjdzE0NXIzdiJ9.Q8LN2r898_fnACAjMAs28w`,
    json: true
    },(error, response, body) =>{
      if(error){
        callback('Unable to connect to google server');
      }
    callback(undefined,
    {
      address: body.features[0].place_name,
      Laltitude:body.features[0].center[1],
      Longitude:body.features[0].center[0],
    });
  });
}
module.exports.geocodeAddress = geocodeAddress;
