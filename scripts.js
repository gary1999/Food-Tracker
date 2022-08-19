// console.log(JSON.parse(foods)[0].restaurant);

const fs = require('fs');

fs.readFile('./Foods.json', 'utf-8', (err, jsonString) => {
    if(err) {
        console.log("File read failed:", err);
        return;
    }
    else {
        try {
            const data = JSON.parse(jsonString);
            console.log(data[0].restaurant);
        }
        catch (err) {
            console.log('Error parsing JSON', err);
        }

    }
})