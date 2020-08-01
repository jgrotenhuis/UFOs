function buildTable(data) {
    // Clear out any existing data in the table
    tbody.html("");

    // Create the for loop and function dataRow
    // Add code to append a row to the table body
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value to a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData; 

    // Check to see if the date was entered and filte the data using that date
    if (date) {
        // Apply "filte" to the table data to only keep the rows 
        // where the datetime calue matches the filte value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @note: if no date was entered, the filteredData will
    // just be the original data
    buildTable(filteredData);
}

// Code to listen for an event
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);