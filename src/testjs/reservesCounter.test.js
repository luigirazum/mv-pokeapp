/**
* @jest-environment jsdom
*/

import reservesCounter from '../modules/reservesCounter.js';

const generateListOfReserves = (qty) => {
  document.body.innerHTML = '';

  for (let i = 0; i < qty; i += 1) {
    const liReserveElement = document.createElement('li');

    liReserveElement.innerHTML = ` 
      <li class="popupres-reserveitem">
        <span class="reserveitem-date">2023/01/12</span>
        <span class="reserveitem-date">2023/01/18</span>
        <span class="reserveitem-username">pokeBOT</span>
      </li>`;

    document.body.appendChild(liReserveElement);
  }
};

describe('No reservations listed', () => {
  test('If the list of reservations is empty we get 0', () => {
    // Arrange
    generateListOfReserves(0);

    // Act
    const reserves = reservesCounter();

    // Assert
    expect(reserves).toBe(0);
  });

  test('An webpage with no content must return 0', () => {
    // Arrange
    document.body.innerHTML = '';

    // Act
    const reserves = reservesCounter();

    // Assert
    expect(reserves).toBe(0);
  });

  test('if we just have <li> elements without popupres-reserveitem classname must return 0', () => {
    // Arrange
    document.body.innerHTML = `
      <li class="popupres-menu"></li>
      <li class="popupres-menu"></li>
      <li class="popupres-menu"></li>
      <li class="popupres-menu"></li>
    `;

    // Act
    const reserves = reservesCounter();

    // Assert
    expect(reserves).toBe(0);
  });
});

describe('Counting reservations in the list', () => {
  test('For 1 listed reserve it must return 1', () => {
    // Arrange
    generateListOfReserves(1);

    // Act
    const reserves = reservesCounter();

    // Assert
    expect(reserves).toBe(1);
  });

  test('Having 5 reserves listed it must return 5', () => {
    // Arrange
    generateListOfReserves(5);

    // Act
    const reserves = reservesCounter();

    // Assert
    expect(reserves).toBe(5);
  });

  test('If we have 50 reserves it must return 50', () => {
    // Arrange
    generateListOfReserves(50);

    // Act
    const reserves = reservesCounter();

    // Assert
    expect(reserves).toBe(50);
  });
});
