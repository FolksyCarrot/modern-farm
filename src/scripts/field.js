

const plantedSeeds =[]

export const addPlant= (seed) => {
    if (Array.isArray(seed)) {
        for (const irat of seed) {
            plantedSeeds.push(irat)
        } 
    } else {
        plantedSeeds.push(seed)
    }
    
}

export const usePlants = () => {
    return plantedSeeds
}