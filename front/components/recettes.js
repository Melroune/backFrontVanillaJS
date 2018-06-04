 export const recetteInject = (elementRecette) => {
    return `
    <div>
    <h3>${elementRecette.name}</h3>
    <p>${elementRecette.ingredient}</p>
    <span>${elementRecette.cuisson}</span>    
    </div>
    `
}