/* ----- axios ----- */
import axios from 'axios';

/* ----- iziToast ----- */
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* ----- SimpleLightbox ----- */
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

/* ----- JS ----- */
import { searchImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import Container from 'postcss/lib/container';

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-more');

let page = 1;
let per_page = 15;
let totalPage = 0;
let query = '';

//=============================================================

form.addEventListener('submit', handleSearch);
loadBtn.addEventListener('click', loadMore);

// loadBtn.classList.replace('load-more', 'load-more-hiden');

async function handleSearch(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  loadBtn.disabled = false;
  loadBtn.classList.replace('load-more', 'load-more-hidden');
  page = 1;

  query = event.target.elements.search.value.trim();
  // console.log('query', query);

  if (query.trim() === '') {
    loadBtn.disabled = true;
    loadBtn.classList.replace('load-more', 'load-more-hidden');
    showMessage('Search field cannot be empty!');
    return;
  }

  loader.style.display = 'block'; //Loader on

  searchImages(query, page)
    .then(data => {
      loader.style.display = 'none'; //Loader off
      // loadBtn.disabled = true;
      loadBtn.classList.replace('load-more-hidden', 'load-more');

      if (data.hits.length === 0) {
        showMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      form.reset();
      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      if (page === 1) totalPage = data.totalHits;
      console.log('totalPage', totalPage);

      if (page * 15 >= totalPage) {
        loadBtn.classList.replace('load-more-hidden', 'load-more');
      }
      console.log('page', page);

      lightbox.refresh();
      form.reset();
    })
    .catch(error => alert(error.message));

  gallery.innerHTML = '';
}

async function loadMore() {
  page += 1;
  console.log('page', page);
  loadBtn.disabled = true;

  try {
    const data = await searchImages(query, page);
    // console.log(data, 'page');
    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    lightbox.refresh();

    loadBtn.disabled = false;
    loader.style.display = 'none';

    const item = document.querySelector('.gallery-item');
    const itemHeight = item.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: itemHeight * 2,
      behavior: 'smooth',
    });

    if (page * 15 >= totalPage) {
      loadBtn.disabled = false;
      loadBtn.classList.replace('load-more', 'load-more-hidden');
      showMessage("We're sorry, but you've reached the end of search results.");
      // return;
    }
  } catch (error) {
    alert(error.message);
  } finally {
    loadBtn.disabled = false;
  }
}

/* ---------------------- iziToast ---------------------- */
function showMessage(message) {
  iziToast.show({
    message,
    // message: `Sorry, there are no images matching your search query. Please try again!`,
    titleSize: '16px',
    messageColor: '#fff',
    backgroundColor: '#ef4040',
    position: 'topRight',
    timeout: '3000',
    closeOnClick: 'true',
    progressBarColor: '#fff',
    transitionIn: 'bounceInDown',
    transitionOut: 'fadeOutRight',
  });
}
