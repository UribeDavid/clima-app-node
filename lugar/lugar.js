const axios = require('axios');



const getLugarLatLon = async (direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ encodedUrl }&units=metric&APPID=52eefde9a99c9c7534a5a7ad19adfd12`);
        
    if (resp.data.cod === '404' || resp.data.message === 'city not found') {
        throw new Error(`No se encontraron resultados para la ciudad ${direccion}`);
    }
    
    return {
        direccion: resp.data.name,
        lat: resp.data.coord.lat,
        lon: resp.data.coord.lon
    }
}

module.exports = {
    getLugarLatLon
}

