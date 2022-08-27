let localStorageList;


const initialise = () => {
    
    localStorageList = (JSON.parse(localStorage.getItem('myReviewList')));
    console.log(localStorageList);

// console.log(reviewList[0][0]); // First review array 
// console.log(reviewList[1][0]); // Second review array


    console.log(localStorageList);


    for (let i = 0; i < localStorageList.length; i++){
        console.log(localStorageList[i]);
        
        const restaurantCard = document.createElement('div');
        restaurantCard.classList = 'card';
        document.getElementById("past-eats-container").appendChild(restaurantCard);

    }

}

initialise();