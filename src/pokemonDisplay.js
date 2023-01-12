import PokeData from '../modules/pokeData.js';
import addeventComment from './display-comment.js';
import { addLikes, likesGet } from './displayLikes.js';
import pokeCounter from './cartsCounter.js';

async function PokemonDisplay() {
  const api = new PokeData();
  const pokemons = await api.getpokemons(1, 21);

  const displayPokemon = document.getElementById('displayPokemon');
  pokemons.forEach((pokemon) => {
    displayPokemon.innerHTML += `
        <div class="pokecards">
        <p id="id">${pokemon.id}</p>
        <div class="cir"></div>
        <p id="name">${pokemon.name}</p>  
        <div class="imgContainer">
        <img id="image" src="${pokemon.image}" alt="">
        <div class="shadow"></div>
        </div>
        <div class="footerImg">
        <p id="types">${pokemon.pokemonTypes}</p>
        <p class="likes">
        <button class="iconLike" id="heart${pokemon.id}" alt="heart">&#10084;</button>
        <span><span class="likeTxt" id="like${pokemon.id}" > 0 </span> Likes </span>
        </p>
        </div>
        <button id="${pokemon.id}" class="btnDescription" type="submit"> Description </button>
        <button id="btnReserve" type="button"> reserve </button>
        </div>
        `;
  });
  addeventComment();
  addLikes();
  likesGet();
  pokeCounter();
}

export default PokemonDisplay;
