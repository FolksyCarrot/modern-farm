export const harvestPlants= (plantsArray) => {
    const seedArray = []
    for (const plant of plantsArray) {
        if(plant.type === "Corn") {
            for(let c= 0; c <plant.output; c+=2) {
                seedArray.push(plant)
            }
        } else {
       for (let i =0; i < plant.output; i++) {
        seedArray.push(plant)
       }
        
                }
    }
    return seedArray
}