import getPokemon, { getDescription } from './pokeapi.js';
import { addReserve, getReserves } from './involapi.js';

// Global reservePokemon object with pokemon details for the Reservations popup.

const createPokemon = (values) => {
  const attString = 'id, name, height, weight, exp, moves, image, description, reserves';
  const attributes = attString.replace(/\s/gi, '').split(',');

  const customPokemon = {};

  attributes.forEach((key, index) => {
    customPokemon[key] = values[index];
  });

  return customPokemon;
};

const createReserve = (id, formData) => {
  const user = formData.get('username');
  const dateStart = formData.get('date_start');
  const dateEnd = formData.get('date_end');

  const customReserve = {
    item_id: id,
    username: user,
    date_start: dateStart,
    date_end: dateEnd,
  };

  return customReserve;
};

const getReservesList = (reserves) => {
  let allReserves = '';

  reserves.forEach((reserve) => {
    const reserveTemplate = `
            <li class="popupres-reserveitem">
              <span class="reserveitem-date">${reserve.date_start.replace(/-/gi, '/')}</span>
              <span class="reserveitem-date">${reserve.date_end.replace(/-/gi, '/')}</span>
              <span class="reserveitem-username">${reserve.username}</span>
            </li>`;
    allReserves += reserveTemplate;
  });

  return allReserves;
};

const addFakeReserves = async (id) => {
  const users = ['pokeBOT', 'pokeApp', 'pokeDEX'];
  const startDates = ['2023-01-12', '2023-01-13', '2023-01-15'];
  const endDates = ['2023-01-18', '2023-01-17', '2023-01-19'];

  const res0 = {
    item_id: id,
    username: users[0],
    date_start: startDates[0],
    date_end: endDates[0],
  };

  const res1 = {
    item_id: id,
    username: users[1],
    date_start: startDates[1],
    date_end: endDates[1],
  };

  const res2 = {
    item_id: id,
    username: users[2],
    date_start: startDates[2],
    date_end: endDates[2],
  };

  await addReserve(res0);
  await addReserve(res1);
  await addReserve(res2);
};

const refreshReservesList = async (id) => {
  const reserves = JSON.parse(await getReserves(id));
  console.log(reserves);
  const refreshedReservesList = getReservesList(reserves);

  const reservesList = document.getElementById('popupres-reservelist');
  reservesList.innerHTML = refreshedReservesList;
};

const validReserve = (form, formData) => {
  const dateStart = new Date(formData.get('date_start'));
  const dateEnd = new Date(formData.get('date_end'));

  const { elements: { date_start: start } } = form;

  if (dateStart <= dateEnd) {
    start.setCustomValidity('');
  } else {
    start.setCustomValidity('Start date can\'t be after end date.');
  }

  return form.checkValidity();
};

const addNewReserve = async (e) => {
  e.preventDefault();
  const { target: { dataset: { id } }, target: form } = e;

  const formData = new FormData(form);

  if (validReserve(form, formData)) {
    const newReserve = createReserve(id, formData);

    const result = await addReserve(newReserve);

    if (result) {
      refreshReservesList(id);
      form.reset();
    }
  } else {
    form.reportValidity();
  }
};

const linkAddNewReserve = () => {
  const formNewReserve = document.forms.newreserve;

  formNewReserve.addEventListener('submit', addNewReserve);
};

const showReserve = async (id) => {
  const pokemonDetails = JSON.parse(await getPokemon(id));
  const pokemonDescription = JSON.parse(await getDescription(id));
  const reserves = JSON.parse(await getReserves(id));

  const { descriptions } = pokemonDescription;
  const englishDescription = descriptions.find((description) => description.language.name === 'en');
  const { description } = englishDescription;
  const {
    name, height, weight, base_experience: exp, moves: { length: moves },
  } = pokemonDetails;
  const { sprites: { other: { dream_world: { front_default: image } } } } = pokemonDetails;

  const values = [Number(id), name, height, weight, exp, moves, image, description, reserves];

  const reservePokemon = createPokemon(values);

  return reservePokemon;
};

const getReserveTemplate = (pokemon) => {
  const reserves = getReservesList(pokemon.reserves);

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
      <div class="popupres-reserves">
        <h3>Reservations (#)</h3>
        <ul id="popupres-reservelist">
          ${reserves}
        </ul>
      </div>
      <div class="popupres-newreserve">
        <h3>Add a reservation</h3>
        <form id="newreserve" data-id="${pokemon.id}" novalidate>
          <ul>
            <li>
              <input type="text" name="username" placeholder="Your name" required>
            </li>
            <li>
              <input type="text" name="date_start" placeholder="Start date" required
                onblur="(this.type='text')">
            </li>
            <li>
              <input type="text" name="date_end" placeholder="End date" required
                onblur="(this.type='text')">
            </li>
            <li>
              <button type="submit">Reserve</button>
            </li>
          </ul>
        </form>
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

  return pokemon;
};

const setInputsAsDate = () => {
  const setDate = (e) => {
    e.target.type = 'date';
    const today = new Date();
    const minDate = today.toJSON().split('T')[0];

    e.target.min = minDate;
    e.target.showPicker();
  };

  const startDate = document.forms.newreserve.elements.date_start;
  const endDate = document.forms.newreserve.elements.date_end;

  startDate.addEventListener('focus', setDate);
  endDate.addEventListener('focus', setDate);
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
        .then(() => linkCloseReserveBtn())
        .then(() => setInputsAsDate())
        .then(() => linkAddNewReserve());
    });
  });
};

export { linkReserveBtns as default };
export { addFakeReserves };