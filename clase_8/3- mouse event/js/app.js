"use strict";

const popup = document.querySelector('#popupContainer');
const pokeName = document.querySelector('#pokeName');
const pokeNum = document.querySelector('#pokeNum');
const pokeImg = document.querySelector('#pokeImg');
const type1 = document.querySelector('#type1');
const type2 = document.querySelector('#type2');

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
    let clase = type2clase(pokemon.types[0]);

    // renderizar
    accumulator += pokemon.render(clase);
};

const section = document.querySelector("section");
section.innerHTML = accumulator;

/* Agregar eventos */
addPokemonMouseEvents(pokemons);
