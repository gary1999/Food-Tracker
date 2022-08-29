
let reviewList = [];
let localStorageList;
let localStorageListLength;


const initialise = () => {
    
    localStorageList = (JSON.parse(localStorage.getItem('myReviewList')));
    console.log(localStorageList);

    if (localStorageList == null){
        console.log("yes");
    }
    if (localStorageList != null){
        localStorageListLength = localStorageList.length;
        for (var i in localStorageList){
            reviewList.push(localStorageList[i]);
        }
    }

    

// console.log(reviewList[0][0]); // First review array 
// console.log(reviewList[1][0]); // Second review array
}

const resetStorage = () => {
    localStorage.setItem('myReviewList', null);
}

const printError = (foodString) => {
    console.log(`Error there is no ${foodString} input`);
    if(!(!!document.getElementById("elementTest"))){
        const element = document.createElement('p');
        element.innerHTML = "Error, missing inputs";
        element.id = "elementTest";
        document.getElementById("button-div").appendChild(element);
    }
    // else{
    //     console.log("Div already exists");
    // };
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
const checkRatingInput = () => {
    // Radio Button
    var check = (document.querySelector('input[name="review-rating-score"]:checked'))
    if(check != null){
        return(document.querySelector('input[name="review-rating-score"]:checked').value);
        console.log("selected");
    }
    else {
        console.log("Rating not selected");
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
    // let restaurantVar, ratingVar, foodVar, reviewVar;

    let reviewItem = {
        Restaurant: checkRestaurantInput(),
        Food: checkFoodInput(),
        Rating: checkRatingInput(),
        Review: checkReviewInput()
        // food: document.getElementById("food-name").value,
        // notes: document.getElementById("review-notes").value
    }

    
    let allInputVerified = true;

    for (var [key, value] of Object.entries(reviewItem)){
        if (typeof value === "undefined"){
            allInputVerified = false;
            break;
        }
    }

    if (allInputVerified){
        reviewList.push(reviewItem);
        console.log(reviewItem);
        localStorage.setItem('myReviewList', JSON.stringify(reviewList));
    }
    else {
        console.log("input missing");
    }

    //reviewList.push(reviewItem);

    //console.log(reviewItem);

    document.querySelector('form').reset();
    localStorageList = (JSON.parse(localStorage.getItem('myReviewList')));
    console.log(localStorageList);
    // console.log(localStorageList);


}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submit-button").addEventListener('click', addReview);
    document.getElementById("reset-button").addEventListener('click', resetStorage);
})

initialise();