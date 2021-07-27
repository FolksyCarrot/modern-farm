export const Catalog = (harvest) => {
    let mainHTML = ""
    for (const food of harvest) {
        mainHTML += `<section class= "plant"> ${food.type} </section> `
    }
   

    return mainHTML
}