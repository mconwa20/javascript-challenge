// (see 03-Evr_D3_Table)

// INPUTTING TABLE DATA
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

console.log(data);

// Loop Through `data` and console.log each ufo report object
data.forEach(element => {
    console.log(element);
    // Use d3 to append one table row 'tr' for each ufo report object
    var row = tbody.append("tr");
    // Use 'Object.entries' to console.log each ufo report value
    Object.entries(element).forEach(([key, value]) => {
    console.log(key, value);
    //Append a cell to the row for each value
    var cell = row.append("td");
    //Use d3 to update each cell's text with ufo report values
    cell.text(value);
    });
});

// click function

function runClick() {
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    if(date){
        filterData = filterData.filter(x => x.datetime === date)
    }
    console.log(filterData);
    buildTable(filterData);
}

// select filter button

d3.select("#filter-btn").on("click", runClick);

buildTable(tableData)