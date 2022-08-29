let localStorageList;


const initialise = () => {
    
    localStorageList = (JSON.parse(localStorage.getItem('myReviewList')));
    console.log(localStorageList);

// console.log(reviewList[0][0]); // First review array 
// console.log(reviewList[1][0]); // Second review array


    console.log(localStorageList);

}



const displayCards = () => {
    
    for (let i = 0; i < localStorageList.length; i++){
        // console.log(localStorageList[i].Rating);

        //Get names of keys
        console.log(Object.keys(localStorageList[i]));

        //Create Card
        const restaurantCard = document.createElement('div');
        restaurantCard.classList = 'card';

        //Create card title
        const restaurantCardTitle = document.createElement('div');
        restaurantCardTitle.classList = 'cardTitle';
        restaurantCardTitle.innerHTML = (`${localStorageList[i].Restaurant}`);
        restaurantCard.appendChild(restaurantCardTitle);

        //Create card food names
        const restaurantCardFood = document.createElement('div');
        restaurantCardFood.classList = 'cardFood';
        restaurantCardFood.innerHTML = (`${localStorageList[i].Food}`);
        restaurantCard.appendChild(restaurantCardFood);
        
        //Create card ratings
        const restaurantCardRating = document.createElement('div');
        restaurantCardRating.classList = 'cardRating';
        restaurantCardRating.innerHTML = (`Your Rating: ${localStorageList[i].Rating}`);
        restaurantCard.appendChild(restaurantCardRating);

        //Create card reviews
        const restaurantCardReview = document.createElement('div');
        restaurantCardReview.classList = 'cardReview';
        restaurantCardReview.innerHTML = (`${localStorageList[i].Review}`);
        restaurantCard.appendChild(restaurantCardReview);
        

        //Append to container div in HTML
        document.getElementById("past-eats-container").appendChild(restaurantCard);

    }

}


initialise();
displayCards();