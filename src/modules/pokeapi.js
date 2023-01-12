const getPokemon = (id) => {
  const endPoint = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  const request = new Request(endPoint);

  const result = fetch(request)
    .then((response) => {
      if (response.status !== 201) {
        return response.text();
      }

      return response.json();
    })
    .catch((error) => typeof error);

  return result;
};

const getDescription = (id) => {
  const endPoint = `https://pokeapi.co/api/v2/characteristic/${id}/`;

  const request = new Request(endPoint);

  const result = fetch(request)
    .then((response) => {
      if (response.status !== 201) {
        return response.text();
      }

      return response.json();
    })
    .catch((error) => typeof error);

  return result;
};

export { getPokemon as default };
export { getDescription };