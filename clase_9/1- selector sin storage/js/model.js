function Pokemon(id, name, thumbnail, types, stats) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
    this.types = types;
    this.stats = stats;

    this.render = (clase) => {
        return  `<article pokemonId=${this.id} class="${clase}">
                    <img
                    src=${this.thumbnail}
                    class="icon-type"
                    alt="icon type"
                    />
                    <p>
                        ${this.name}
                    </p>
                </article>
                `
    };
}
