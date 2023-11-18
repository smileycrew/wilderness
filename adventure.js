//const { trails, rivers, wildlife } = require("./data.js")
const {
    trailsLogo, serviceDetails, totalTrailMiles, trailTotal, shortestTrail, shortestTrailDisplay,
    longTrail, longestTrailDisplay, leastExpensiveLogo, mostExpensiveTrailsLogo, trailDetailsLogo,
    lowestPrice, longestTrailPrice, trailDetails, myTrails, lowestTrailPrices, highestTrailPrices
} = require("./trails.js")

const {
    riversLogo, totalRiverMiles, riverServiceDetails, riverTotal, shortestRiver, longRiver, shortRiver,
    longestRiver, lowestRiverPrice, highestRiverPrice, leastExpensiveRiverLogo, mostExpensiveRiversLogo,
    riverDetailsLogo, riverDetails, myRivers
} = require("./rivers.js")

const { database } = require("./database.js")

console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)

trailsLogo()

console.log(serviceDetails)

console.log(shortestTrailDisplay)

console.log(longestTrailDisplay)

leastExpensiveLogo()

database.trails.find(lowestTrailPrices)

mostExpensiveTrailsLogo()

database.trails.find(highestTrailPrices)

trailDetailsLogo()

database.trails.filter(trailDetails)

riversLogo()

console.log(riverServiceDetails)

console.log(`The shortest river tour is ${shortRiver} kilometers`)

console.log(`The longest river tour is ${longestRiver} kilometers`)

leastExpensiveRiverLogo()

database.rivers.filter(lowestRiverPrice)

mostExpensiveRiversLogo()

database.rivers.filter(highestRiverPrice)

riverDetailsLogo()

database.rivers.filter(riverDetails)