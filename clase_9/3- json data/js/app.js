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
    const pokemons = [];
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
                        types,
                        pokeData.stats
                            )
                    );
    }
    return pokemons;
}

const pokeFilter = (pokemons) => {
    const pokemonsFilter = [];
    const typeFilter = typeSelect.value
    for(const pokemon of pokemons) {
        // Evaluar si debe mostrarse el pokemon
        // según su tipo
        if (typeFilter != "" && pokemon.types[0] != typeFilter) {
            continue;
        }

        // Si el pokemon pasa el filtro
        // se agrega a la lista de pokemons filtrados
        pokemonsFilter.push(pokemon);
    };
    return pokemonsFilter;
};

const pokeRender = (pokemons) => {
    let accumulator = ""
    for(const pokemon of pokemons) {
        // Evaluar según el tipo de pokemon que
        // clase css asociar, suando switch
        let clase = type2clase(pokemon.types[0]);

        // renderizar
        accumulator += pokemon.render(clase);
    };
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
