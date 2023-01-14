import {
  popup, showPopup, getComments, getCommentID,
} from './popup-comment.js';

const buttonPressed = async (e) => {
  const sid = Number(e.target.id);
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${sid}/`;
  await fetch(pokemonUrl)
    .then((response) => response.json())
    .then((json) => {
      const pokemons = json;
      const { name } = pokemons;
      const image = pokemons.sprites.other.dream_world.front_default;
      const info = `
        <p class="popup-detail-item">Height : ${pokemons.height}</p>
        <p class="popup-detail-item">Weight : ${pokemons.weight}</p>
        <p class="popup-detail-item">Base Experience : ${pokemons.base_experience}</p>
        <p class="popup-detail-item">Moves : ${pokemons.moves.length}</p> `;
      showPopup(name, image, info);
      getComments(sid);
      getCommentID(sid);
      popup.classList.toggle('display');
    });
};

const addeventComment = () => {
  const commentButtons = document.querySelectorAll('.btnDescription');
  commentButtons.forEach((button) => {
    button.addEventListener('click', buttonPressed);
  });
};

export default addeventComment;
