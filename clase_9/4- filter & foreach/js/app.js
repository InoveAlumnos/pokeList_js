"use strict";

const popup = document.querySelector('#popupContainer');
const pokeName = document.querySelector('#pokeName');
const pokeNum = document.querySelector('#pokeNum');
const pokeImg = document.querySelector('#pokeImg');
const type1 = document.querySelector('#type1');
const type2 = document.querySelector('#type2');

const typeSelect = document.querySelector('#typeSelected');

// Leer el último valor de typeSelect almacenado en memoria
const typeSelectValue = sessionStorage.typeSelectValue? sessionStorage.typeSelectValue : ""
// Cambiar el selector para que utilice este valor
typeSelect.value = typeSelectValue;

// Lectura de datos
const data = JSON.parse(jsonData);

const pokeLoad = () => {
    const pokemons = data.map(pokeData => {
        let types = [];
        for(const typeInfo of pokeData.types) {
            types.push(typeInfo.type.name);
        }

        return new Pokemon(
                        pokeData.id,
                        pokeData.name,
                        types,
                        pokeData.stats
                        );
    })
    return pokemons;
}

const pokeFilter = (pokemons) => {
    const typeFilter = typeSelect.value
    if (typeFilter == "") {
        // No hay nada por filtrar
        return pokemons
    }

    // Si el pokemon pasa el filtro
    // se agrega a la lista de pokemons filtrados
    const pokemonsFilter = pokemons.filter(pokemon =>        
        pokemon.types[0] == typeFilter
    );
    return pokemonsFilter;
};

const pokeRender = (pokemons) => {
    let accumulator = ""
    pokemons.forEach(pokemon => {
        // Evaluar según el tipo de pokemon que
        // clase css asociar, usando switch
        accumulator += pokemon.render(type2clase(pokemon.types[0]))
    })
    const section = document.querySelector("section");
    section.innerHTML = accumulator;
};

/* Crear los objetos pokemon */
const pokemons = pokeLoad();

/* Filtrar datos */
let pokemonsFiltrados = pokeFilter(pokemons);

/* Renderizar datos */
pokeRender(pokemonsFiltrados);

/* Agregar eventos */
addPokemonEvents(pokemonsFiltrados);
