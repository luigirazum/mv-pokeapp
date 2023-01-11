import PokeData from '../modules/pokeData.js';
import addeventComment from './display-comment.js';

async function PokemonDisplay() {
  const api = new PokeData();
  const pokemons = await api.getpokemons(1, 21);

  const displayPokemon = document.getElementById('displayPokemon');
  pokemons.forEach((pokemon) => {
    displayPokemon.innerHTML += `
        <div id="pokecards">
        <p id="id">${pokemon.id}</p>
        <div class="imgContainer">
        <img id="image" src="${pokemon.image}" alt="">
        <div class="shadow"></div>
        </div>
        <div class="footerImg">
        <p id="types">${pokemon.pokemonTypes}</p>
        <p id="name">${pokemon.name}</p>
        </div>
        <button id="${pokemon.id}" class="btnDescription" type="submit"> Description </button>
        <button id="btnReserve" type="submit"> reserve </button>
        </div>
        `;
  });
  addeventComment();
}

export default PokemonDisplay;
