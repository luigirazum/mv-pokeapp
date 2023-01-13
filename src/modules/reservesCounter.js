const reservesCounter = () => {
  const countAllCurrentReserves = document.querySelectorAll('.popupres-reserveitem');

  return countAllCurrentReserves.length;
};

export { reservesCounter as default };