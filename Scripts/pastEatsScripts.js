let localStorageList;
let userSearch = [];

const initialise = () => {

    localStorageList = (JSON.parse(localStorage.getItem('myReviewList')));
    console.log(typeof localStorageList);

    // console.log(reviewList[0][0]); // First review array 
    // console.log(reviewList[1][0]); // Second review array


    console.log(localStorageList);
    displayCards(localStorageList);
    searchReview(localStorageList);
}



const displayCards = (reviewList) => {

    for (let i = 0; i < reviewList.length; i++) {
        console.log(reviewList[i]);

        //Get names of keys
        //console.log(Object.keys(reviewList[i]));
        //Get values of keys
        //console.log(Object.values(reviewList[i]));

        //Create Card
        const restaurantCard = document.createElement('div');
        restaurantCard.classList = 'card';

        //Create card title
        const restaurantCardTitle = document.createElement('div');
        restaurantCardTitle.classList = 'cardTitle';
        restaurantCardTitle.innerHTML = (`${reviewList[i].Restaurant}`);
        restaurantCard.appendChild(restaurantCardTitle);

        //Create card food names
        const restaurantCardFood = document.createElement('div');
        restaurantCardFood.classList = 'cardFood';
        restaurantCardFood.innerHTML = (`${reviewList[i].Food}`);
        restaurantCard.appendChild(restaurantCardFood);

        //Create card ratings
        const restaurantCardRating = document.createElement('div');
        restaurantCardRating.classList = 'cardRating';
        restaurantCardRating.innerHTML = (`Your Rating: ${reviewList[i].Rating}`);
        restaurantCard.appendChild(restaurantCardRating);

        //Create card reviews
        const restaurantCardReview = document.createElement('div');
        restaurantCardReview.classList = 'cardReview';
        restaurantCardReview.innerHTML = (`${reviewList[i].Review}`);
        restaurantCard.appendChild(restaurantCardReview);


        //Append to container div in HTML
        document.getElementById("past-eats-container").appendChild(restaurantCard);

    }

}


const searchReview = (reviewList) => {

    console.log("test");
    for (let i = 0; i < reviewList.length; i++) {
        console.log(Object.values(reviewList[i]));
        if (Object.values(reviewList[i]).includes("1")) {
            console.log("found");
        }
        else {
            console.log("not found");
        }

    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("searchSubmitButton").addEventListener('click', searchReview);
})

initialise();
