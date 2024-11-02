/* ----- iziToast ----- */
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* ----- SimpleLightbox ----- */
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

/* ----- JS ----- */
import { fetchData } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
// const input = document.querySelector('.submit-input');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const encoderSearch = event.target.elements.search.value.trim();
  // console.log('encoderSearch', encoderSearch);

  if (encoderSearch.trim() === '') {
    return;
  }

  loader.style.display = 'block'; //Loader on

  fetchData(encoderSearch).then(data => {
    // console.log('then', data);
    loader.style.display = 'none'; //Loader off

    if (data.hits.length === 0) {
      showMessage();
      return;
    }

    gallery.innerHTML = createMarkup(data.hits);

    if (lightbox) {
      lightbox.refresh();
    }
  });

  form.reset();
  gallery.innerHTML = '';
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
