// This module is made to handle the Involvement Api Requests.

// involapiUrl = Base Url
const involapiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

// These IDs are for testing purposes.
// const idApp = '1nKEgSDFUEKqARuhDNsk';
// const idApp = '01g8zOGHAMdlxh7XvGhS';
const idApp = '0CG34aiKZpxDXV0UfZ4U';
// const idApp = 'ZYPqezmGTKMkv14Q0GGV'; // failed

// Next ID is for production.
// const idApp = '7N9OQ8SKImUJfeBFIgcg';

// EndPoints
// apps/ POST to create a new App >> return :appid
const involapiApps = 'apps/';
const involapiFetchUrl = `${involapiUrl}${involapiApps}`;

// RESERVATIONS
// :app_id/reservations/
//  GET retrieve the reservations for a Pokemon
//     /apps/:app_id/reservations?item_id=item1
//   result:
//     Array of objects
const getReserves = (itemId) => {
  const endPoint = `${involapiFetchUrl}${idApp}/reservations/?item_id=${itemId}`;

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

// POST new reservation
const addReserve = (reserve) => {
  const endPoint = `${involapiFetchUrl}${idApp}/reservations/`;

  const request = new Request(
    endPoint,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          item_id: reserve.item_id,
          username: reserve.username,
          date_start: reserve.date_start,
          date_end: reserve.date_end,
        },
      ),
    },
  );

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

// :app_id/likes/ - EndPoint to add likes
const addLike = (id) => {
  const endPoint = `${involapiFetchUrl}${idApp}/likes/`;

  const request = new Request(
    endPoint,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: id }),
    },
  );

  const result = fetch(request)
    .then((response) => response.ok);

  return result;
};

// GET and ID for our App
const getAppID = async () => {
  const data = await fetch(`${involapiFetchUrl}`,
    { method: 'POST' })
    .then((response) => response.text());

  return data; // the appID
};

export { getAppID as default };
export { addLike };
export { getReserves, addReserve };