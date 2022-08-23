// let reviewList = localStorage.getItem('myReviewList');
// console.log(reviewList);

let reviewList = [];
let localStorageList = localStorage.getItem('myReviewList');
console.log(JSON.parse(localStorage.getItem('myReviewList')));

// for (var i in localStorageList){
//     reviewList.push([i, localStorageList[i]]);
// }

// console.log(reviewList);

const addReview = (event) => {

    event.preventDefault();

    let reviewItem = {
        name: document.getElementById("restaurant-name").value,
        // rating: 
        food: document.getElementById("food-name").value,
        notes: document.getElementById("review-notes").value
    }

    reviewList.push(reviewItem);
    // document.forms[0].reset();
    document.querySelector('form').reset();
    
    console.log(reviewList);

    console.warn('added', {reviewList});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(reviewList, '\t', 2);

    localStorage.setItem('myReviewList', JSON.stringify(reviewList));


}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("submit-button").addEventListener('click', addReview);
})

console.log("Hello World");
console.log("Test")