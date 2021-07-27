import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"



export const plantSeeds= (plan) => {
    for (const column of plan) {
        for (const plant of column) {
            if (plant === "Asparagus") {
                addPlant(createAsparagus()) 
            } else if(plant=== "Corn") {
                addPlant(createCorn())
            } else if(plant=== "Wheat") {
                addPlant(createWheat())
            } else if(plant=== "Potato") {
                addPlant(createPotato())
            } else if(plant=== "Soybean") {
                addPlant(createSoybean())
            } else if (plant=== "Sunflower") {
                addPlant(createSunflower())
            } else {
                console.log("null")
            }
        }
    }
}