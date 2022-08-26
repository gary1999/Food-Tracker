// console.log(JSON.parse(foods)[0].restaurant);

const fs = require('fs');

const newRestaurant = {
    restaurant: "Carl's Jr",
    rating: 4,
    review: "Average",
};

function addRestaurant(){

    const newRestaurant = {
        restaurant: "Carl's Jr",
        rating: 4,
        review: "Average",
    };

    fs.readFile('./Foods.json', 'utf-8', (err, jsonString) => {
        if(err) {
            console.log("File read failed:", err);
            return;
        }
        else {
            try {
                const foodsData = JSON.parse(jsonString);
                //console.log(foodsData);
                foodsData['restaurants'].push(newRestaurant);
                fs.writeFile('./Foods.json', JSON.stringify(foodsData, null, 4), err => {
                    if (err) {
                        console.log("Error writing to file", err);
                    }
                    else{
                        console.log('Success');
                    }
                })
                //console.log(foodsData);
            }
            catch (err) {
                console.log('Error parsing JSON', err);
            }
            
        }
    })
    
}

addRestaurant();
// const newRestaurant = {
//     restaurant: "Carl's Jr",
//     rating: 4,
//     review: "Average",
// };

// const addTojson = JSON.stringify(newRestaurant);

// fs.writeFile('./Foods.json'[0], addTojson, err => {
//     if (err) {
//         console.log("Error writing to file", err);
//     }
//     else{
//         console.log('Success');
//     }
// });

// console.log(addTojson);