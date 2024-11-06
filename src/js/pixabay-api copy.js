const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43801311-7231ce11da623161c2dfbe05c';

/* функції для HTTP-запитів  -> */
function fetchData(encoderSearch = '') {
  const params = new URLSearchParams({
    key: API_KEY,
    q: encoderSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      // console.log('response', response);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => {
      // console.log('error', error);
    });
}
/* <- */

export { fetchData };
