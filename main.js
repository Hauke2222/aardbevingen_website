const urlInduced = 'http://cdn.knmi.nl/knmi/map/page/seismologie/all_induced.json';
const urlTectonic = 'http://cdn.knmi.nl/knmi/map/page/seismologie/all_tectonic.json';

async function getInduced() {
    const response = await fetch(urlInduced);
    const parsedInduced = await response.json();
    console.log(parsedInduced);

}


getInduced();
  
function displayData() {

}

obj.events[0].date + " " + obj.events[0].place;