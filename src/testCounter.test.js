/**
* @jest-environment jsdom
*/

import pokeCounter from './cartsCounter.js';

const PokemonCards = (numCard) => {
  document.body.innerHTML = `
    <header>
    <nav>
      <a class="logo" href="#">
        <span>P<img src="./assets/images/pokeapp_logo.png">kéApp</span>
      </a>
      <ul>
        <li>
          <a  href="#">Pokemons<span class="home-c"></span></a>
        </li>
        <li>
          <a href="#">
            Habitats
          </a>
        </li>
        <li>
          <a href="#">
            Gyms
          </a>
        </li>
      </ul>
    </nav>
  </header>
    `;
  for (let i = 0; i < numCard; i += 1) {
    const pokemonDisplay = `
      <div class="pokecards">
      <p id="id">${i}</p>
      <p id="name">${i}</p>  
      <div class="imgContainer">
      <img id="image" src="${i}" alt="">
      <div class="shadow"></div>
      </div>
      <div class="footerImg">
      <p id="types">${i}</p>
      <p class="likes">
      <button class="iconLike" id="heart${i}" alt="heart">&#10084;</button>
      <span><span class="likeTxt" id="like${i}" > 0 </span> Likes </span>
      </p>
      </div>
      <button id="${i}" class="btnDescription" type="submit"> Description </button>
      <button class="reservebtn" id="btnReserve" type="submit" data-id="${i}"> reserve </button>
      </div>
      `;
    document.body.innerHTML += pokemonDisplay;
  }
};

describe('homePage-counter', () => {
  test('Count cards correctly first test', () => {
    const num = 16;
    PokemonCards(num);
    const count = pokeCounter();
    expect(count).toBe(16);
  });
  test('Count pokemons correctly second test', () => {
    const num = 21;
    PokemonCards(num);
    const count = pokeCounter();
    expect(count).toBe(21);
  });
  test('Count cards correctly thirdth test', () => {
    const num = 3;
    PokemonCards(num);
    const count = pokeCounter();
    expect(count).toBe(3);
  });
  test('Count cards in DOM correctly fourth test', () => {
    const num = 15;
    PokemonCards(num);
    const count = pokeCounter();
    expect(count).toBe(15);
  });
});