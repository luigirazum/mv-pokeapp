const showReserve = (id) => {
  console.log(`I'm pokemon ${id}`);
};

const linkReserveBtns = () => {
  const reserveBtns = document.querySelectorAll('.reservebtn');

  reserveBtns.forEach((reserveBtn) => {
    reserveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const { currentTarget: ct, currentTarget: { dataset: { id } } } = e;

      showReserve(id);
    });
  });
};

export { linkReserveBtns as default };