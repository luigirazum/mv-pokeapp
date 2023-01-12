import getPokemon, { getDescription } from './pokeapi.js';

// Global reservePokemon object with pokemon details for the Reservations popup.

const createPokemon = (values) => {
  const attString = 'id, name, height, weight, exp, moves, image, description';
  const attributes = attString.replace(/\s/gi, '').split(',');

  const customPokemon = {};

  attributes.forEach((key, index) => {
    customPokemon[key] = values[index];
  });

  return customPokemon;
};

const showReserve = async (id) => {
  const pokemonDetails = JSON.parse(await getPokemon(id));
  const pokemonDescription = JSON.parse(await getDescription(id));
  const { descriptions } = pokemonDescription;
  const englishDescription = descriptions.find((description) => description.language.name === 'en');
  const { description } = englishDescription;
  const {
    name, height, weight, base_experience: exp, moves: { length: moves },
  } = pokemonDetails;
  const { sprites: { other: { dream_world: { front_default: image } } } } = pokemonDetails;

  const values = [Number(id), name, height, weight, exp, moves, image, description];

  const reservePokemon = createPokemon(values);

  return reservePokemon;
};

const getReserveTemplate = (pokemon) => {
  const template = `
    <div class="popupres-window">
      <div class="popupres-header">
        <h2>${pokemon.id} - ${pokemon.name}</h2>
        <p id="xpopupres" class="x-btn">X</p>
      </div>
      <div class="popupres-img">
        <img class="popupres-image" src="${pokemon.image}" alt="pokemon" />
        <p class="popupres-description">${pokemon.description}</p>
      </div>
      <div class="popupres-info">
        <p><b>Height</b><span>${pokemon.height}</span></p>
        <p><b>Weight</b><span>${pokemon.weight}</span></p>
        <p><b>Base Experience</b><span>${pokemon.exp}</span></p>
        <p><b>Moves</b><span>${pokemon.moves}</span></p>
      </div>
    </div>`;

  return template;
};

const displayReserve = (pokemon) => {
  const body = document.querySelector('body');
  const pokemonPopupReserve = getReserveTemplate(pokemon);
  const div = document.createElement('div');
  div.classList.add('popupres');
  div.classList.add('show');
  div.id = 'popupres';

  div.innerHTML = pokemonPopupReserve;

  body.appendChild(div);
};

const linkCloseReserveBtn = () => {
  const closeReserveBtn = document.getElementById('xpopupres');

  closeReserveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const { target: { parentElement: { parentElement: { parentElement: popupres } } } } = e;
    const { parentNode: body } = popupres;

    body.removeChild(popupres);
  });
};

const linkReserveBtns = () => {
  const reserveBtns = document.querySelectorAll('.reservebtn');

  reserveBtns.forEach((reserveBtn) => {
    reserveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const { currentTarget: { dataset: { id } } } = e;

      showReserve(id)
        .then((popedPokemnon) => displayReserve(popedPokemnon))
        .then(() => linkCloseReserveBtn());
    });
  });
};

export { linkReserveBtns as default };