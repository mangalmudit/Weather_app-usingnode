const weather = require('./weather/weather');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs
   .options({
     a: {
       demand: true,
       alias: 'address',
       describe: 'addess to fetch weather for',
       string: true
     }
   })
   .help()
   .alias('help','h')
   .argv;

//geocode.geocodeAddress(argv.address);
geocode.geocodeAddress(argv.address,(errorMessage,results) =>{
  if(errorMessage){
    console.log(errorMessage);
  }
  else{
    console.log(results.address);
    weather.getWeather(results.Laltitude,results.Longitude,(errorMessage,weatherResults) =>{
    //console.log(`the Laltitude and Longitude are ${results.Laltitude} , ${results.Longitude}`);
      if(errorMessage){
        console.log(errorMessage);
      } else {
        console.log(`Its currently ${weatherResults.Temperature}.It feels like ${weatherResults.apparentTemperature} `);
      }
    });
  }
});
