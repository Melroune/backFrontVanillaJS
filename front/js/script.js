// const yolo= "yolo"
import { recetteInject }  from '../components/recettes.js'
 
fetch(`http://localhost:3030`)
    .then(res => res.json())
    .then(result => {
        const recetteIn = document.getElementById("reccetteIn")
        // console.log(result)
        const tabRecettes = result
          .map(elem => recetteInject(elem))
          .join('')
        // console.log(tabRecettes)
        recetteIn.innerHTML = tabRecettes
    })
