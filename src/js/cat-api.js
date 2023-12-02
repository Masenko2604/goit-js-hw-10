import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_fcdyt8YrFZOZ5aTPKJ7zw7Pi1zuuCOi0kTqLe0LB44ST5hrr0Fp4jOwI8rWkofTd';

function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

export { fetchBreeds, fetchCatByBreed };