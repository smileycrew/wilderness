//const { rivers } = require("./data.js")
const { database } = require("./database.js")

const myRivers = database.rivers

const riversLogo = () => {
    console.log('\n***************************************************')
    console.log('*****              R I V E R S                *****')
    console.log('***************************************************')
}

const totalRiverMiles = (rivers) => {
    let total = 0
    for (const river of rivers) {
        total = river.length
    }
    return total
}

const shortestRiver = (rivers) => {
    let shortest = rivers.length
    for (const river of rivers) {
        if (river.length < shortest) {
            shortest = river.length
        }
    }
    return shortest
}

const longRiver = (rivers) => {
    let longest = 0
    for (const river of rivers) {
        if (river.length > longest) {
            longest = river.length
        }
    }

    return longest
}

const lowestRiverPrice = (river) => {
    if (river.price.length < 2) {
        console.log(`\t ${river.river}`)
    }
}

const highestRiverPrice = (river) => {
    if (river.price.length > 3) {
        console.log(`\t ${river.river}`)
    }
}

const leastExpensiveRiverLogo = () => {
    console.log('\n***************************************************')
    console.log('*****  The least expensive river tours are:  *****')
    console.log('***************************************************')
}

const mostExpensiveRiversLogo = () => {
    console.log('\n***************************************************')
    console.log('*****  The most expensive river tours are:   *****')
    console.log('***************************************************')
}

const riverDetailsLogo = () => {
    console.log("\nRIVER DETAILS:")
    console.log("---------------------------------------------------")
}

const riverDetails = (river) => {
    console.log(`\n${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.length} kilometers long.
    The unique fish for the trip is ${river.uniqueFish}.`)
}

const riverTotal = totalRiverMiles(myRivers)

const riverServiceDetails = `We service ${riverTotal} kilometers of scenic rivers across the US`

const shortRiver = shortestRiver(myRivers)

const longestRiver = longRiver(myRivers)

module.exports = {
    riversLogo, totalRiverMiles, riverServiceDetails, riverTotal, shortestRiver, longRiver, shortRiver,
    longestRiver, lowestRiverPrice, highestRiverPrice, leastExpensiveRiverLogo, mostExpensiveRiversLogo,
    riverDetailsLogo, riverDetails, myRivers
}