// (see 03-Evr_D3_Table)

// INPUTTING TABLE DATA
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js

// Loop Through `data` and console.log each ufo report object
data.forEach(element => {
    console.log(element);
    // Use d3 to append one table row 'tr' for each ufo report object
    var row = tbody.append("tr");
    // Use 'Object.entries' to console.log each ufo report value
    Object.entries(element).forEach(function([key, value]) {
        console.log(key, value);
        //Append a cell to the row for each value
        var cell = row.append("td");
        //Use d3 to update each cell's text with ufo report values
        cell.text(value);
    });
});

// (see 08_Ins_Forms)

// BUTTON

// Select the button
var button = d3.select("#button");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(selections) {

    console.log(selections);
    var row = tbody.append("tr")
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});