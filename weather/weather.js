const request = require('request');
var getWeather = (lat,lng,callback) => {
  request({
    url:`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2ebd3ab3f48e7fe2dde8768ed26cacee`,
    json:true
  },(error,response, body) =>{
    //console.log(body,undefined,2);
    if(error){
       callback('Unable to connect to forecast server');
    }//else if (body.cod ==200 ) {
       //callback('unable to fetch weather');
    //}
    else if (body.cod == 200){
      callback(undefined,{
        Temperature:(body.main.temp-273).toFixed(2),
        apparentTemperature:(body.main.feels_like-273).toFixed(2)
  });
}
});
};
module.exports.getWeather = getWeather;
