
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

const printError = () => {
    console.log("error no value");
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

const addReview = (event) => {


    // Radio Button
    var check = (document.querySelector('input[name="review-rating-score"]:checked'))
    if(check != null){
        console.log("selected");
    }
    else {
        console.log("not selected");
        printError();
    }


    
    var nameInput = document.getElementById("restaurant-name");
    if (nameInput && nameInput.value) {
        console.log("value exists");
    }



    event.preventDefault();

    let reviewItem = {
        name: document.getElementById("restaurant-name").value,
        rating: document.querySelector('input[name="review-rating-score"]:checked').value,
        food: document.getElementById("food-name").value,
        notes: document.getElementById("review-notes").value
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