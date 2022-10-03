// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const renderedMurkup = render(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", renderedMurkup);

galleryContainer.addEventListener("click", openModal);

function render(element) {
  return element
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a");
lightbox.defaultOptions.captionsData = "alt";
lightbox.defaultOptions.captionDelay = "300";
lightbox.on("show.simplelightbox", function () {});

function openModal(event) {
  event.preventDefault();
}
