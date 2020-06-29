const urlInduced = 'http://cdn.knmi.nl/knmi/map/page/seismologie/all_induced.json';
const urlTectonic = 'http://cdn.knmi.nl/knmi/map/page/seismologie/all_tectonic.json';
parsedInduced = [];

async function getInduced() {
    const response = await fetch(urlInduced);
    parsedInduced = await response.json();
    console.log(parsedInduced);
    return parsedInduced;

}

function displayData() {
    for (let i = 0; i < parsedInduced.length; i++) {
        console.log(test);
        
        let inducedEvent = parsedInduced[i];
        let div = document.createElement('div');
        div.innerHTML = inducedEvent.date;
        document.body.appendChild(div);
    }
}
getInduced();
displayData();


//obj.events[0].date + " " + obj.events[0].place;