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
    // Evaluar según si el pokemon en el listado
    // es par o impar, determinar con un operador ternario
    // su clase css    
    const clase = pokemonPar? "par": "impar";
    pokemonPar = !pokemonPar;

    // renderizar
    accumulator += pokemon.render(clase);
};

const section = document.querySelector("section");
section.innerHTML = accumulator;

/* Agregar eventos */
addPokemonMouseEvents();

