import PokeData from '../modules/pokeData.js';
import linkReserveBtns from './modules/displayreserve.js';
import addeventComment from './display-comment.js';
import { addLikes, likesGet } from './displayLikes.js';
import pokeCounter from './cartsCounter.js';
import './assets/bug.svg';
import './assets/dark.svg';
import './assets/dragon.svg';
import './assets/electric.svg';
import './assets/fairy.svg';
import './assets/fighting.svg';
import './assets/fire.svg';
import './assets/flying.svg';
import './assets/ghost.svg';
import './assets/grass.svg';
import './assets/ground.svg';
import './assets/ice.svg';
import './assets/normal.svg';
import './assets/poison.svg';
import './assets/psychic.svg';
import './assets/rock.svg';
import './assets/steel.svg';
import './assets/water.svg';

const typeIcon = (types) => {
  let iconsHtml = '';
  types.forEach((type) => {
    iconsHtml += `<div class="habilityIcon"><img class="habilityIconImg" src="./assets/${type}.svg"></div>`;
  });
  return iconsHtml;
};

async function PokemonDisplay() {
  const api = new PokeData();
  const pokemons = await api.getpokemons(1, 30);

  const displayPokemon = document.getElementById('displayPokemon');
  pokemons.forEach((pokemon) => {
    displayPokemon.innerHTML += `
        <div class="pokecards">
        <p id="id">${pokemon.id}</p>
        <p id="name">${pokemon.name}</p>  
        <div class="imgContainer">
        <img id="image" src="${pokemon.image}" alt="">
        <div class="shadow"></div>
        </div>
        <div class="footerImg">
        <div id="types">${typeIcon(pokemon.pokemonTypes)}</div>
        <p class="likes"> 
        <button class="iconLike" id="heart${pokemon.id}" alt="heart">&#10084;</button>
        <span><span class="likeTxt" id="like${pokemon.id}" > 0 </span> Likes </span>
        </p>
        </div>
        <button id="${pokemon.id}" class="btnDescription" type="submit"> Description </button>
        <button class="reservebtn" id="btnReserve" type="submit" data-id="${pokemon.id}"> Reserve </button>
        </div>
        `;
  });
  addeventComment();
  linkReserveBtns();
  addLikes();
  likesGet();
  pokeCounter();
}

export default PokemonDisplay;
