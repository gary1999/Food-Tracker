let foods = `[
    {
        "restaurant":"McDonalds",
        "rating": 1,
        "review-notes": "HOT TRASH"
    },
    {
        "restaurant":"Burger King",
        "rating": 1000000,
        "review-notes": "GOOD"
    }
]`

console.log(JSON.parse(foods)[0].restaurant);