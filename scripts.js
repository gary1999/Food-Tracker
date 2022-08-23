let reviews = [];

const addReview = (event) => {

    let reviewList = [];

    event.preventDefault();

    // let restaurantID = document.getElementById("restaurant-name");
    let restaurantNameInputValue = document.getElementById("restaurant-name").value;
    let restaurantFoodInputValue = document.getElementById("food-name").value;
    let restaurantReviewRatingValue;
    let restaurantReviewInputValue = document.getElementById("review-notes").value;

    let reviewItem = {
        name: restaurantNameInputValue,
        // rating: 
        food: restaurantFoodInputValue,
        notes: restaurantReviewInputValue
    }

    reviewList.push(reviewItem);
    document.forms[0].reset();
    
    console.warn('added', {reviewList});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(reviewList, '\t', 2);

}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("submit-button").addEventListener('click', addReview);
})

console.log("Hello World");
console.log("Test")