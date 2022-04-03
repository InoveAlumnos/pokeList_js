"use strict";

/* Crear los objetos pokemon */
let pokemons = [];
for(const pokeData of data) {
    // Tomar de los datos el nombre de cada
    // tipo de pokemon que aplica
    let types = [];
    for(const typeInfo of pokeData.types) {
        types.push(typeInfo.type.name);
    }

    pokemons.push(new Pokemon(
                    pokeData.id,
                    pokeData.name,
                    pokeData.thumbnail,
                    types,
                    pokeData.stats
                        )
                );
}

/* Renderizar datos */
let accumulator = ""
let pokemonPar = true;
for(const pokemon of pokemons) {
    // Evaluar según el tipo de pokemon que
    // clase css asociar, suando switch
    let clase = "";
    switch (pokemon.types[0]) {
        case "normal":
             clase = "normal";
             break;
         case "grass":
            clase = "planta";
             break;
        case "fire":
            clase = "fuego";
             break;
        case "water":
            clase = "agua";
            break;
        case "electric":
            clase = "electricidad";
            break;
        case "poison":
            clase = "veneno";
            break;
        default:
            break;
    }

    // renderizar
    accumulator += pokemon.render(clase);
};

const section = document.querySelector("section");
section.innerHTML = accumulator;

/* Agregar eventos */
addPokemonMouseEvents();

