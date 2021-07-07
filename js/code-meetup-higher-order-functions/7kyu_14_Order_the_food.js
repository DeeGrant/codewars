// https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food

// Problem
// Given a list of developer objects, return an object containing the count of food choices

// Code
function orderFood(list) {
    return list.reduce((order, {meal}) => ({
        ...order,
        [meal]: (order[meal] || 0) + 1
    }), {})
}

// Code 2
function orderFood2(list) {
    return list.reduce((order, {meal}) => {
        order[meal] = (order[meal] || 0) + 1
        return order
    }, {})
}