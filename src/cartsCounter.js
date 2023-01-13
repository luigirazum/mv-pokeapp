const pokeCounter = () => {
  const pokecard = document.querySelectorAll('.pokecards').length;
  const home = document.querySelector('.home-c');
  home.innerHTML = `(${pokecard})`;
  return pokecard;
};

export default pokeCounter;
