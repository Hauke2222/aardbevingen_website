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

    var events = parsedInduced.events;
    events.map((value, index) => {

        console.log(index, value);

        var table = document.getElementById("mytable");
        var row = table.insertRow(index + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = value.date;
        cell2.innerHTML = value.place;
        cell3.innerHTML = value.mag;


    });


    // for (let i = 0; i < parsedInduced["events"].length; i++) {
    //    let div = document.createElement('div');
    //   div.innerHTML = parsedInduced["events"][i].date +  parsedInduced["events"][i].place +  parsedInduced["events"][i].mag;
    //   document.body.appendChild(div);
    //}
}
getInduced(); 