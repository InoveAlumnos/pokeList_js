"use strict";

const data = [
    {
        id: 1,
        name: "Bulbasaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png",
    },
    {
        id: 2,
        name: "Ivysaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png",
    },
    {
        id: 3,
        name: "Venusaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/003.png",
    }
]

/* Enunciado
1) Utilice el array data para completar la página de pokemones,
como ejemplo se puede guiar por el siguiente "article", deberá
utilizar un bucle para recorrer data y armar el HTML que introducirá
en "section".

      <article>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          class="icon-type"
          alt="icon type"
        />
        <p>
          Pokemon algo1
        </p>
      </article>

2) Luego de que haya podido generar el contenido dinamicamente, agregar
    a todas las tarjetas de pokemons la propiedades "planta"
    al pasar el mouse por encima (mouseover).

*/

/* Comienza a escribir su código aquí */
let accumulator = ""
for(const pokemon of data){
    accumulator+=    
    `
    <article>
        <img
        src=${pokemon.thumbnail}
        class="icon-type"
        alt="icon type"
        />
        <p>
            ${pokemon.name}
        </p>
    </article>
    `
};

const section = document.querySelector("section");
section.innerHTML = accumulator;

// Apuntar a todas las tarjetas de pokemons (article)
const tarjetas = document.querySelectorAll("article");

for (const tarjeta of tarjetas) {
    tarjeta.addEventListener("mouseover", function () {
    // Agregar la clase planta
        tarjeta.classList.add("planta");
    });

    tarjeta.addEventListener("mouseout", function () {
        // Removemos la clase planta
        tarjeta.classList.remove("planta");
    });
}
