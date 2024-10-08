function sayHi() {
    for (let i = 0; i < 5; i++) {
        let row = '';  // Initialize an empty string for each row
        for (let j = 0; j <= i; j++) {
            row += j + ' ';  // Append each number and a space
        }
        console.log(row.trim());  // Print the accumulated string
    }
}
sayHi();
