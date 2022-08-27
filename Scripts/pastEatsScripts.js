let localStorageList;


const initialise = () => {
    
    localStorageList = (JSON.parse(localStorage.getItem('myReviewList')));
    console.log(localStorageList);

// console.log(reviewList[0][0]); // First review array 
// console.log(reviewList[1][0]); // Second review array


    console.log(localStorageList);

    // for (var key in localStorageList){
    //     if (!localStorageList.hasOwnProperty(key)){
    //         continue;
    //     }

    //     var obj = localStorageList[key];

    //     for (var prop in obj) {
    //         if (!obj.hasOwnProperty(prop)) {
    //             continue;
    //         }
    //     }
    //     console.log(prop + " = " + obj[prop]);
    // }

    for (let i = 0; i < localStorageList.length; i++){
        console.log(localStorageList[i]);

    }

}

initialise();