
function buscarListaDeComidas (query) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    return fetch (apiUrl) 
        .then (response => response.json())
        .catch (error => console.log (error))
}

function renderListaDeComidas (data){

    const resultadosContainer = document.getElementById("contenedor");
    resultadosContainer.innerHTML="";

    data.meals.forEach(meal => {
        console.log(meal);
        const imageUrl = meal.strMealThumb;
        const titulo = meal.strMeal;
        const receta = meal.strInstructions;

        const imagen = document.createElement ("img");
        imagen.src = imageUrl;
        
        const tituloElement = document.createElement("h2");
        tituloElement.textContent = titulo;

        const recetaElement = document.createElement ("p");
        recetaElement.textContent = receta;

        const divResultado = document.createElement ("div");
        divResultado.appendChild(imagen);
        divResultado.appendChild(tituloElement);
        divResultado.appendChild(recetaElement);
        resultadosContainer.appendChild(divResultado);
    });
    
}

const botonBuscar = document.getElementById("buscar");
const campoDeTexto = document.getElementById("buscador");

botonBuscar.addEventListener("click", function (){
    nombreReceta = campoDeTexto.value;
    buscarListaDeComidas(nombreReceta)
        .then (dataReceta => renderListaDeComidas(dataReceta));
})