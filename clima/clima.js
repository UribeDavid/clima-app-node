const axios = require('axios');


const getClima = async (lat, lon) => {
    
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=52eefde9a99c9c7534a5a7ad19adfd12`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}