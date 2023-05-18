
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemonAttributes = (pokemonNumber) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;

    return fetch(URL)
                .then((response) => response.json())
                .then((data) => {
                    let stats = data.stats.map(stat => stat.base_stat);

                    const attributes = {
                        hp: stats[0],
                        attack: stats[1],
                        defense: stats[2],
                        specialAttack: stats[3],
                        specialDefense: stats[4],
                        speed: stats[5],
                        height: data.height,
                        weight: data.weight
                    };
                    const pokemonAttributes = [
                        `Pokemon: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`,
                        `HP: ${attributes.hp}`, 
                        `Ataque: ${attributes.attack}`,
                        `Defesa: ${attributes.defense}`,
                        `Ataque Especial: ${attributes.specialAttack}`,
                        `Defesa Especial: ${attributes.specialDefense}`,
                        `Velocidade: ${attributes.speed}`,
                        `Altura: ${attributes.height}`,
                        `Peso: ${attributes.weight}`
                    ]
                    alert(pokemonAttributes.join('\n'));
                })
                .catch((error) => console.log(error));
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}
