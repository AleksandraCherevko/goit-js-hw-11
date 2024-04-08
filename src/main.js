import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './js/render-functions';
import { fetchRequest } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.js-form');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', heandleSubmit);

function heandleSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  const inputValue = event.currentTarget.querySelector('.search-input').value;

  fetchRequest(inputValue)
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      return data;
    })

    .then(data => {
      console.log(data);

      gallery.innerHTML = ('beforeend', createMarkup(data.hits));

      const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });

      lightbox.refresh();
      searchForm.reset();
    })

    .catch(error => {
      console.log(error);
    });
}
