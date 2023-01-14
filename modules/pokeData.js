class PokeData {
    getpokemonInfo = async (idPokemon) => {
      const dataPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then((response) => response.json());
      const {
        id, name, sprites, types,
      } = dataPokemon;
      const pokemonTypes = [];
      types.forEach((element) => {
        pokemonTypes.push(element.type.name);
      });
      const image = sprites.other.dream_world.front_default;
      return {
        id, name, pokemonTypes, image,
      };
    }

      getpokemons = async (minidPokemon, maxidPokemon) => {
        const listPokemon = [];
        let dataList;
        for (let i = minidPokemon; i <= maxidPokemon; i += 1) {
          dataList = this.getpokemonInfo(i);
          listPokemon.push(dataList);
        }
        return Promise.all(listPokemon);
      }
}

export default PokeData;
