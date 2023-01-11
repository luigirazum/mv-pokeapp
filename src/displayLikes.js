const apiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/01g8zOGHAMdlxh7XvGhS/likes/';

const show = (data) => {
  const likeTxt = document.querySelectorAll('.likeTxt');
  for (let i = 0; i < likeTxt.length; i += 1) {
    const nLike = data.find((like) => like.item_id === (i + 1));
    if (nLike) {
      likeTxt[i].innerHTML = nLike.likes;
    }
  }
};

const likesGet = () => {
  fetch(apiLikes, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      show(data);
    });
};

const likePost = (id) => {
  fetch(apiLikes, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: id }),
  });
  const likeElement = document.querySelector(`#like${id}`);
  const likesNum = parseInt(likeElement.innerHTML, 10);
  likeElement.innerHTML = likesNum + 1;
};

const addLikes = () => {
  const iconLike = document.querySelectorAll('.iconLike');
  iconLike.forEach((like) => {
    like.addEventListener('click', (e) => {
      const { id } = e.target;
      likePost(parseInt(id.substring(5), 10));
    });
  });
};

export { addLikes, likesGet };