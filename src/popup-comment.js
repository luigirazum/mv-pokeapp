import './popup.css';
import pokemonImg from './assets/pokemonImg.png';
import involvementApi from './baseApis.js';

//  popup
export const popup = document.createElement('div');
popup.id = 'popup';
popup.classList = 'popup';
document.body.appendChild(popup);

// popup-window
const popupWindow = document.createElement('div');
popupWindow.classList = 'popup-window';
popup.appendChild(popupWindow);

// popup-header
const popupHeader = document.createElement('div');
popupHeader.classList = 'popup-header';
popupWindow.appendChild(popupHeader);

// popup-header text
const popupHeaderText = document.createElement('h2');
popupHeaderText.id = 'popupHeaderText';
popupHeaderText.classList = 'popup-header-text';
popupHeaderText.innerHTML = 'Test'; /// /// for test
popupHeader.appendChild(popupHeaderText);

// popup-header X-btn
const xBtn = document.createElement('p');
xBtn.id = 'xBtn';
xBtn.classList = 'x-btn';
xBtn.innerHTML = 'X';
popupHeader.appendChild(xBtn);

// popup-image
const popupImage = document.createElement('img');
popupImage.id = 'popupImage';
popupImage.classList = 'popup-image';
popupImage.src = pokemonImg; /// ////////// for test
popupImage.alt = 'pokemon';

// div prube
const div = document.createElement('div');
div.classList = 'div-container';
div.appendChild(popupImage);
popupWindow.appendChild(div);

// popup-image-details
const popupDetail = document.createElement('div');
popupDetail.id = 'popupDetail';
popupDetail.classList = 'popup-image-detail d-grid-2col';
/// /////////////// for test
popupDetail.innerHTML = `
                <p class="popup-detail-item">Color : Green</p>
                <p class="popup-detail-item">Age : 6 years</p>
                <p class="popup-detail-item">Power : 132</p>
                <p class="popup-detail-item">Speed : 42 KM/h</p>
`;
popupWindow.appendChild(popupDetail);

xBtn.addEventListener('click', () => {
  popup.classList.remove('display');
});

export const showPopup = (name, image, info) => {
  popupHeaderText.innerHTML = name;
  popupImage.src = image;
  popupDetail.innerHTML = info;
};

// popup-comment-header
const popupCommentHeader = document.createElement('h3');
popupCommentHeader.classList = 'popup-comment-header';
popupCommentHeader.innerHTML = 'Comments (0)'; /// /////// for test
popupWindow.appendChild(popupCommentHeader);

// popup-engage section
const engage = document.createElement('div');
engage.classList = 'd-grid-2col';
popupWindow.appendChild(engage);

// popup-comment-record
const popupCommentRecord = document.createElement('div');
popupCommentRecord.classList = 'popup-comment-record';
engage.appendChild(popupCommentRecord);

// popup-comment-list
const popupCommentList = document.createElement('ul');
popupCommentList.id = 'popupCommentList';
popupCommentList.classList = 'popup-comment-list';
popupCommentRecord.appendChild(popupCommentList);

/// get comments
export const getComments = async (itemId) => {
  const commentsAPI = `${involvementApi}/comments?item_id=${itemId}`;
  await fetch(commentsAPI).then((response) => response.json()).then((json) => {
    if (json.length === undefined) {
      popupCommentHeader.innerHTML = 'Comments (0)';
      popupCommentList.innerHTML = '';
    } else {
      popupCommentHeader.innerHTML = `Comments (${json.length})`;
      popupCommentList.innerHTML = '';
      json.forEach((element) => {
        const newComment = document.createElement('li');
        newComment.classList = 'popup-comment-item';
        newComment.innerHTML = ` 
              <label class="popup-comment-author">${element.username}</label>
              <p class="popup-comment-text">${element.comment}</p>
              <p class="popup-comment-date">${element.creation_date}</p>`;
        popupCommentList.appendChild(newComment);
      });
    }
  }).catch((e) => e);
};
