/**
* @jest-environment jsdom
*/

import counterCheck from '../popup-counter.js';

const commentsListmock = (numComments) => {
  document.body.innerHTML = '';
  for (let i = 0; i < numComments; i += 1) {
    const newComment = document.createElement('li');
    newComment.innerHTML = ` 
        <p class="popup-comment-date">Hello</p>`;
    newComment.classList = 'popup-comment-item';
    document.body.appendChild(newComment);
  }
};

describe('comments-counter', () => {
  test('Correctly count the num of comments', () => {
    const num = 0;
    commentsListmock(num);
    const count = counterCheck('popup-comment-item');
    expect(count).toBe(0);
  });

  test('Check if class exist', () => {
    const num = 10;
    commentsListmock(num);
    const count = counterCheck('clase-inexistente');
    expect(count).toBe(0);
  });

  test('Correctly count', () => {
    const num = 100;
    commentsListmock(num);
    const count = counterCheck('popup-comment-item');
    expect(count).toBe(num);
  });

  test('if the parameters of the class do not exist', () => {
    const num = 2;
    commentsListmock(num);
    const count = counterCheck();
    expect(count).toBe(0);
  });
});