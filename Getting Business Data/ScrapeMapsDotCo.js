// scraping function to be used in maps.co
// paste code into console and execute

// 2/8/21 NOTE: Maps.co has changed the way data is stored on the DOM, this function no longer works

const GOOGLE_API_KEY = '';

Object.keys(_LAYERS).forEach(function(key){
    const isCirle = _LAYERS[key].Circle;
 
    if (isCirle) {
       // console.log(`radius is ${_LAYERS[key].layerCircleRadius}`);
       // console.log(`lat is ${_LAYERS[key].Circle.center.lat}`);
       // console.log(`lng is ${_LAYERS[key].Circle.center.lng}`);
       console.log(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${_LAYERS[key].Circle.center.lat},%20${_LAYERS[key].Circle.center.lng}&radius=${_LAYERS[key].circleRadius}&key=${GOOGLE_API_KEY}`)
    }
 })