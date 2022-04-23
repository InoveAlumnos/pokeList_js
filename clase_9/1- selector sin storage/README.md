# PokeList

## Release notes
Cambios y mejoras incorporadas en este release:
- Se agregó el HTML para filtrar por tipo.
- Encapsular las diferentes funcionalidades que realiza la aplicación app.js en funciones flecha:
- * pokeLoad --> Encargada de transformar datos a objetos pokemons.
- * pokeFilter --> Encargada de seleccionar los pokemons a mostrar por su tipo (filtrarlos).
- * pokeRender --> Encargada de generar el HTML para renderizar los pokemons filtrados.
- Se agregó a events.js el evento de cambio de selector.
