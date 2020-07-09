let parsed = [];

async function getData(url) {
    const response = await fetch(url);
    parsed = await response.json();
    console.log(parsed);
    displayData();
}

function displayData() {
    let events = parsed.events;
    events.map((value, index) => {

        let table = document.getElementById("myTable");
        let row = table.insertRow(index + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = value.date;
        cell2.innerHTML = value.place;
        cell3.innerHTML = '<a href="https://www.google.com/maps/place/'+value.lat+","+value.lon+"/@"+value.lat+","+value.lon+
        ","+"14z"+'"target="_blank"><i class="material-icons">place</i>';
        cell4.innerHTML = value.mag;
    });
}

function searchInRows() {
    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("myTable");
    let tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who do not match the search query
    for (let i = 1; i < tr.length; i++) {
        let td = tr[i];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

getData(url); 