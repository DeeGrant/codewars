// https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details

// Problem
// Given a list of developer objects,
//  returns a list of developers with a missing, 'null', property values
//  each developer will also have a property added, 'question', with:
//      Hi, could you please provide your <property name>.
//  as the value

// Pseudo code
    // list of devs with null properties
    // forEach dev
    //  find the <property name> with null value
        // iterate through every property on dev
        // when find property equal to null, set a variable to the key
        // or set question property and escape
    //  add question property with property name

// Code
function askForMissingDetails(list) {
    let ret = list.filter(dev => Object.values(dev).some(v => v === null))

    ret.forEach(dev => {
        for (const key in dev) {
            if (dev[key] === null)
                dev.question = `Hi, could you please provide your ${key}.`
        }
    })
    return ret
}

// Code 2
function askForMissingDetails2(list) {
    return list.filter(dev => {
        for (const key in dev) {
            if (dev[key] === null) {
                dev.question = `Hi, could you please provide your ${key}.`
                return dev
            }
        }
    })
}

// Code 3
function askForMissingDetails3(list) {
    return list.filter(dev =>
        Object.keys(dev)
            .some(key =>
                dev[key] === null &&
                (dev.question = `Hi, could you please provide your ${key}.`)
            )
    )
}