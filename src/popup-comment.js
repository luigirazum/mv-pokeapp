import './popup.css';
import pokemonImg from './assets/pokemonImg.png';
import involvementApi from './baseApis.js';
import CounterCheck from './popup-counter';

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
popupCommentHeader.innerHTML = 'Comments (4)'; /// /////// for test
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

// popup-new-comment
const popupNewComment = document.createElement('div');
popupNewComment.classList = 'popup-new-comment';
engage.appendChild(popupNewComment);

// popup-comment-input name
const popupCommentInputName = document.createElement('input');
popupCommentInputName.id = 'popupCommentInputName';
popupCommentInputName.classList = 'popup-comment-input';
popupCommentInputName.type = 'text';
popupCommentInputName.placeholder = 'Your name...';
popupNewComment.appendChild(popupCommentInputName);

// popup-comment-input comment
const popupCommentInputComment = document.createElement('textarea');
popupCommentInputComment.id = 'popupCommentInputComment';
popupCommentInputComment.classList = 'popup-comment-input popup-new-comment-text';
popupCommentInputComment.cols = '15';
popupCommentInputComment.rows = '4';
popupCommentInputComment.placeholder = 'Your Comment...';
popupNewComment.appendChild(popupCommentInputComment);

// popup-comment-btn
export const popupCommentBtn = document.createElement('a');
popupCommentBtn.id = 'popupCommentBtn';
popupCommentBtn.classList = 'popup-comment-btn';
popupCommentBtn.innerHTML = 'Comment';
popupNewComment.appendChild(popupCommentBtn);


/// get comments
export const getComments = async (itemId) => {
    const commentsAPI = `${involvementApi}/comments?item_id=${itemId}`;
    await fetch(commentsAPI).then((response) => response.json()).then((json) => {
        if (json.length === undefined) {
            popupCommentHeader.innerHTML = 'Comments (0)';
            popupCommentList.innerHTML = '';
        } else {
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
    const qtyComments = CounterCheck('popup-comment-item');
    popupCommentHeader.innerHTML = `Comments (${qtyComments})`;
};
  
  //  add new comment
  
export const addComment = async (itemId) => {
    const commentsAPI = `${involvementApi}/comments`;
    const id = itemId;
    const name = document.getElementById('popupCommentInputName').value;
    const comment = document.getElementById('popupCommentInputComment').value;
    if (name === '' || comment === '') return;
  
    await fetch(commentsAPI, {
        method: 'POST',
        body: JSON.stringify({
            item_id: id,
            username: name,
            comment,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => {
        getComments(itemId);
        document.getElementById('popupCommentInputName').value = '';
        document.getElementById('popupCommentInputComment').value = '';
        return response.json();
    }).catch((e) => e);
};
  
let commentID = 0;
export function getCommentID(id) {
    commentID = id;
}
  
// -- comment button eventlistener
popupCommentBtn.addEventListener('click', () => {
    addComment(commentID);
});
  