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