import Swal from 'sweetalert2';
import './style.css';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const publisher = document.querySelector('#publisher');
const race = document.querySelector('#race');
const button = document.querySelector('#button');

const ACESS_TOKEN = '2363297807178112';
const BASE_URL = `https://superheroapi.com/api.php/${ACESS_TOKEN}`;
const MAX_HEROES = 1000;

const randomID = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomID();

  fetch(`${BASE_URL}/${id}`)
    .then((result) => result.json())
    .then((data) => {
      img.src = data.image.url;
      name.innerHTML = `Nome do Herói: ${data.name}`;
      publisher.innerHTML = `Aparece em ${data.biography.publisher}`;
      race.innerHTML = `Raça do Herói: ${data.appearance.race}`;
      if (data.appearance.race === 'null') {
        race.innerHTML = 'Sua raça é desconhecida';
      }
      if (data.biography.publisher === 'null') {
        publisher.innerHTML = '';
      }
    })
    .catch((error) => Swal.fire({
      title: 'Herói não encontrado',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Legal',
    }));
});
