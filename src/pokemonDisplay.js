import PokeData from '../modules/pokeData.js';
import linkReserveBtns from './modules/reserve.js';
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
        <button class="reservebtn" id="btnReserve" type="submit" data-id="${pokemon.id}"> reserve </button>
        </div>
        `;
  });

  addeventComment();
  linkReserveBtns();
}

export default PokemonDisplay;
