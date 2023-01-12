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

// bodyPOST - stringifies the body of the POST
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

// GET likes for all items - Array of objects.

// :app_id/reservations/
//  GET retrieve the reservations for
//     /apps/abc234/reservations?item_id=item1
// POST new reservation

const getAppID = async () => {
  const data = await fetch(`${involapiFetchUrl}`,
    { method: 'POST' })
    .then((response) => response.text());

  return data; // the appID
};

export { addLike as default };
export { getAppID };