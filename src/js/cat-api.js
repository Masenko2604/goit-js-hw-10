// import SlimSelect from 'slim-select';
// import css from "file.css";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import '../css/styles.css';

// fetch('https://pixabay.com/api/').then( response => {
//   console.log(response.json());
//   return response.json();
// })
//   .then(cat => {
//     console.log(cat);
//  });
const url1 = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';

//Унікальний ключ доступу до Cat API
const KEY =
  "live_fcdyt8YrFZOZ5aTPKJ7zw7Pi1zuuCOi0kTqLe0LB44ST5hrr0Fp4jOwI8rWkofTd";

//Функція, що фетчить список усіх порід котів
const fetchBreeds = () => {
  return fetch(`${url1}?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

//Функція, що фетчить опис конкретної породи кота по breedId
const fetchCatByBreed = breedId => {
  return fetch(`${url2}/${breedId}?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

//Іменований експорт функцій
export { fetchBreeds, fetchCatByBreed };