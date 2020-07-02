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

    let events = parsedInduced.events;
    events.map((value, index) => {
    

        let table = document.getElementById("myTable");
        let row = table.insertRow(index + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = value.date;
        cell2.innerHTML = value.place;
        cell3.innerHTML = value.mag;


    });
}

function myFunction() {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    console.log(tr);
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

getInduced(); 