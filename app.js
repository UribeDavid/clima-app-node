const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;
//const axios = require('axios');


let getInfo = async (direccion) => {

    try {
        let coord = await lugar.getLugarLatLon(direccion);
        let temp = await clima.getClima(coord.lat, coord.lon);
        return `La temperatura en ${coord.direccion} es de ${temp}`;   
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));