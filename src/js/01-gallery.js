// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

galleryContainer.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return;
      } 
    
})

const lightbox = 
    new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    }); 
    
console.log(galleryItems);
