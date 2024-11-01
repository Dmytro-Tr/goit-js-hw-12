/* ----- iziToast ----- */
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* ----- iziToast ----- */
import { fetchData } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const input = document.querySelector('.submit-input');

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const encoderSearch = event.target.elements.search.value.trim();
  console.log('encoderSearch', encoderSearch);

  fetchData(encoderSearch)
    .then(data => {
      console.log('then', data);

      if (data.hits.length === 0) {
        showMessage();
        return;
      }

      gallery.innerHTML = createMarkup(data.hits);
    })
    .catch(error => {
      console.log('catch', error);
      showMessage();
    });
  input.value = '';
}

function showMessage() {
  iziToast.show({
    message: `Sorry, there are no images matching your search query. Please try again!`,
    titleSize: '16px',
    messageColor: '#fff',
    backgroundColor: '#ef4040',
    position: 'topRight',
    timeout: '3000',
    closeOnClick: 'true',
    progressBarColor: '#fff',
    transitionIn: 'bounceInDown',
    transitionOut: 'flipOutX',
  });
}

/* функції для HTTP-запитів  -> */
// function fetchData(encoderSearch = '') {
//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: encoderSearch,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//   });

//   return fetch(`${BASE_URL}/?${params}`)
//     .then(response => {
//       // console.log('response', response);

//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.log('error', error);
//     });
// }
/* <- */

/* функції для відображення елементів інтерфейсу -> */
// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ previewURL, tags }) => `
//         <li class="gallery-item">
//           <img src="${previewURL}" alt="${tags}" width="360">
//         </li>
//       `
//     )
//     .join('');
// }
/* <- */
