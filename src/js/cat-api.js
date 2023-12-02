import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  "live_fcdyt8YrFZOZ5aTPKJ7zw7Pi1zuuCOi0kTqLe0LB44ST5hrr0Fp4jOwI8rWkofTd"


// const url1 = 'https://api.thecatapi.com/v1/breeds';
// const url2 = 'https://api.thecatapi.com/v1/images';

// //Унікальний ключ доступу до Cat API
// const KEY =
//   "live_fcdyt8YrFZOZ5aTPKJ7zw7Pi1zuuCOi0kTqLe0LB44ST5hrr0Fp4jOwI8rWkofTd";

// //Функція, що фетчить список усіх порід котів
// fetchBreeds = ("https://api.thecatapi.com/v1/images/0XYvRd7oD")
//   .then(response => {
//     return response.json();
//   })
//   .then(cat => {
//     console.log(cat);
//   });
// //Функція, що фетчить опис конкретної породи кота по breedId
// const fetchCatByBreed = breedId => {
//   return fetch(`${url2}/${breedId}?api_key=${KEY}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// };

// //Іменований експорт функцій
// export { fetchBreeds, fetchCatByBreed };