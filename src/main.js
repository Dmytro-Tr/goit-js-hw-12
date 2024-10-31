// Список параметрів рядка запиту, які тобі обов'язково необхідно вказати:

//     key — твій унікальний ключ доступу до API.
//     q — слово для пошуку. Те, що буде вводити користувач.
//     image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
//     orientation — орієнтація фотографії. Постав значення horizontal.
//     safesearch — фільтр за віком. Постав значення true.

// У відповіді буде об’єкт із декількома властивостями, в одному з яких буде масив зображень, що задовольнили критерії параметрів запиту.

// Якщо бекенд повертає порожній масив, значить, нічого підходящого не було знайдено. У такому разі показуй повідомлення з текстом "Sorry, there are no images matching your search query. Please try again!". Для повідомлень використовуй бібліотеку iziToast.

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { list } from 'postcss';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43801311-7231ce11da623161c2dfbe05c';

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');

// form.addEventListener('submit', handleSearch);

// function handleSearch(event) {
//   event.preventDefault();
// }

const params = new URLSearchParams({
  key: API_KEY,
  // q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});

fetch(`https://pixabay.com/api/?${params}`)
  .then(response => {
    // console.log('response', response);

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('data', data);
    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
  })
  .catch(error => {
    console.log('error', error);
  });

function createMarkup(arr) {
  return arr
    .map(
      ({ previewURL, tags }) => `
        <li class="gallery-item">
        <img src="${previewURL}" alt="${tags}" width="360">
        </li>
      `
    )
    .join('');
}
