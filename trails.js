//const { trails } = require("./data.js")
const { database } = require("./database.js")

const myTrails = database.trails

const trailsLogo = () => {
    console.log('***************************************************')
    console.log('*****              T R A I L S                *****')
    console.log('***************************************************')
}

const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total = trail.length
    }

    return total
}

const shortestTrail = (trailArray) => {
    let shortest = trailArray.length
    for (const trail of trailArray) {
        if (trail.length < shortest) {
            shortest = trail.length
        }
    }

    return shortest
}

const longTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if (trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
}

const leastExpensiveLogo = () => {
    console.log('\n***************************************************')
    console.log('*****    The least expensive trails are:      *****')
    console.log('***************************************************')
}

const lowestPrice = (trails) => {
    for (const trail of trails) {
        if (trail.price === "$")
            console.log(`\t ${trail.trailName}`)
    }
}

const mostExpensiveTrailsLogo = () => {
    console.log('\n***************************************************')
    console.log('*****     The most expensive trails are:      *****')
    console.log('***************************************************')
}

const longestTrailPrice = (trails) => {
    for (const trail of trails) {
        if (trail.price === "$$$$" || trail.price === "$$$$$")
            console.log(`\t ${trail.trailName}`)
    }
}

const trailDetailsLogo = () => {
    console.log("\nTRAIL DETAILS:")
    console.log("---------------------------------------------------")
}

const trailDetails = (trail) => {
    console.log(`\n${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long.
    The highlighted plant for the trip is ${trail.plantHighlight}.`)
}

const lowestTrailPrices = (trail) => {
    if (trail.price.length < 2) {
        console.log(`\t ${trail.trailName}`)
    }
}

const highestTrailPrices = (trail) => {
    if (trail.price.length > 3) {
        console.log(`\t ${trail.trailName}`)
    }
}

const trailTotal = totalTrailMiles(myTrails)

const serviceDetails = `We service ${trailTotal} miles of wilderness trails across the US`

const shortTrail = shortestTrail(myTrails)

const shortestTrailDisplay = `The shortest trail is ${shortTrail} kilometers`

const longest = longTrail(myTrails)

const longestTrailDisplay = `The longest trail is ${longest} kilometers`

module.exports = {
    trailsLogo, serviceDetails, totalTrailMiles, trailTotal, shortestTrail, shortestTrailDisplay,
    longTrail, longestTrailDisplay, leastExpensiveLogo, mostExpensiveTrailsLogo, trailDetailsLogo,
    lowestPrice, longestTrailPrice, trailDetails, myTrails, lowestTrailPrices, highestTrailPrices
}