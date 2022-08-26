
let reviewList = [];
let localStorageList;
let localStorageListLength;


const initialise = () => {
    
    localStorageList = (JSON.parse(localStorage.getItem('myReviewList')));
    console.log(localStorageList);

    if (localStorageList != null){
        localStorageListLength = localStorageList.length;
        for (var i in localStorageList){
            reviewList.push([localStorageList[i]]);
        }
    }

// console.log(reviewList[0][0]); // First review array 
// console.log(reviewList[1][0]); // Second review array
}

const resetStorage = () => {
    localStorage.setItem('myReviewList', null);
}

const printError = (foodString) => {
    console.log(`error no ${foodString}`);
    if(!(!!document.getElementById("elementTest"))){
        const element = document.createElement('p');
        element.innerHTML = "Error, missing inputs";
        element.id = "elementTest";
        document.getElementById("button-div").appendChild(element);
    }
    else{
        console.log("Div already exists");
    };
}

// Hard code to test
const checkRestaurantInput = () => {
    var restaurantInput = document.getElementById("restaurant-name");
    if (restaurantInput && restaurantInput.value) {
        restaurantVar = document.getElementById("restaurant-name").value;
        return(restaurantVar);
    }
    else{
        printError(`restaurant`);
    }
}

const checkFoodInput= () => {
    var foodInput = document.getElementById("food-name");
    if (foodInput && foodInput.value) {
        foodVar = document.getElementById("food-name").value;
        return(foodVar);
    }
    else{
        printError(`food`);
    }
}

const checkReviewInput = () => {
    var reviewInput = document.getElementById("review-notes");
    if (reviewInput && reviewInput.value) {
        reviewVar = document.getElementById("review-notes").value;
        return(reviewVar);
    }
    else{
        printError(`review`);
    }
}



const addReview = (event) => {
    event.preventDefault();
    let restaurantVar, ratingVar, foodVar, reviewVar;

    // Radio Button
    var check = (document.querySelector('input[name="review-rating-score"]:checked'))
    if(check != null){
        console.log("selected");
    }
    else {
        console.log("not selected");
    }



    let reviewItem = {
        restaurant: checkRestaurantInput(),
        rating: document.querySelector('input[name="review-rating-score"]:checked').value,
        food: checkFoodInput(),
        review: checkReviewInput()
        // food: document.getElementById("food-name").value,
        // notes: document.getElementById("review-notes").value
    }

    

    for (var [key, value] of Object.entries(reviewItem)){
        console.log(value);
        // if (Object.keys(i).length === 0){
        //     console.log("Invalid input");
        // }
    }

    console.log(reviewItem);
    reviewList.push(reviewItem);
    document.querySelector('form').reset();
    console.log(reviewList);
    
    localStorage.setItem('myReviewList', JSON.stringify(reviewList));

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submit-button").addEventListener('click', addReview);
    document.getElementById("reset-button").addEventListener('click', resetStorage);
})

initialise();
console.log("Hello World");
console.log("Test")