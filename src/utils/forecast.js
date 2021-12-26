const request = require('request');

const forecast = (latitude,longitude,callback) =>{

    const url='http://api.weatherstack.com/current?access_key=4c3abc6d4fa391bb31f478525047be7c&query='+latitude+','+longitude+'&units=f';
    
    request({url: url,json: true},(error,response)=>{
        if(error)
        {
            callback("unable to connect!",undefined);
        }else if(response.body.error)
        {
            callback("unable to find place",undefined);
        }
        else
        {
            //console.log(response.body.features[0].center);
            //((response.body.current.temperature-32)*5/9).toFixed(2)
            callback(undefined, `It is currently  ${response.body.current.temperature} F degress out. There is a ${response.body.current.precip}% chance of rain.`)
            // callback(undefined,{
            //     Temperature: response.body.current.temperature,
            //     Precip: response.body.current.precip
                
            // })
            
        }
        
    })
}
module.exports=forecast
