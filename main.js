const urlInduced = 'http://cdn.knmi.nl/knmi/map/page/seismologie/all_induced.json';
const urlTectonic = 'http://cdn.knmi.nl/knmi/map/page/seismologie/all_tectonic.json';
parsedInduced = [];

async function getInduced() {
    const response = await fetch(urlInduced);
    parsedInduced = await response.json();
    console.log(parsedInduced);
    displayData()
}

function displayData() {
    for (let i = 0; i < parsedInduced["events"].length; i++) {
        let div = document.createElement('div');
        div.innerHTML = parsedInduced["events"][i].date +  parsedInduced["events"][i].place +  parsedInduced["events"][i].mag;
        document.body.appendChild(div);
    }
}
getInduced();
