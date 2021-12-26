const request = require('request');


const geocode = (address,callback) =>{

    const url1='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FtNzY2IiwiYSI6ImNreDBqdG9wMzE4c3Ayd2xhMnBvaXVxYXoifQ.0JW648QpVrGyjqrWYwXLCw&limit=1';

request({url: url1,json: true},(error,response)=>{
    if(error)
    {
        callback("unable to connect!",undefined);
    }else if(response.body.features.length===0)
    {
        callback("unable to find place",undefined);
    }
    else
    {
        //console.log(response.body.features[0].center);
        
        callback(undefined,{
            latitude: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0],
            Place: response.body.features[0].place_name
        })
        
    }
    
})
}
module.exports= geocode