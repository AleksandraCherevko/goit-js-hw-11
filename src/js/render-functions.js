export function createMarkup(arr) {
  return arr
    .map(
      ({
        id,
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item" data-id='${id}'>
       <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"/>
            </div>
        </a>
        <div class="thumb-block">
          <div class="block">
            <h2 class="tittle">Likes</h2>
            <p class="amount">${likes}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Views</h2>
            <p class="amount">${views}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Comments</h2>
            <p class="amount">${comments}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Downloads</h2>
            <p class="amount">${downloads}</p>
          </div>

      </li> `
    )
    .join('');
}
