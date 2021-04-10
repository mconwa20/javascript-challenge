// from data.js
var tableData = data;
console.log(tableData)

// references to table body, input and button
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// inputing data
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);

// event listener for the button

button.on("click", () +> {

    d3.event.preventDefault();

    var inputDate = inputFieldDate.property("value").trim();
    // console.log(inputDate)
    // trim inputs
    var filterDate = tableData.filter(tableData +> tableData.datetime === inputDate);

    tbody.html("");

    let response = {
        filterDate
    }

    // if response is available... add data
    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // if response is NOT available... add note to user

    else {
        tbody.append("tr").append("td").text("No sightings. Try another search.")
    }


})