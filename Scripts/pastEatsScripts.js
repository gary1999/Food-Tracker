let localStorageList;


const initialise = () => {
    
    localStorageList = (JSON.parse(localStorage.getItem('myReviewList')));
    console.log(localStorageList);

// console.log(reviewList[0][0]); // First review array 
// console.log(reviewList[1][0]); // Second review array
}

initialise();