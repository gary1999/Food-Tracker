
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

const addReview = (event) => {

    event.preventDefault();

    let reviewItem = {
        name: document.getElementById("restaurant-name").value,
        // rating: 
        food: document.getElementById("food-name").value,
        notes: document.getElementById("review-notes").value
    }

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