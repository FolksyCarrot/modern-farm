import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
//console.log(yearlyPlan)



const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()

addPlant(potatoSeed)
console.log(usePlants())

//console.log(harvestPlants(usePlants()))

 console.log(Catalog(harvestPlants(usePlants())))