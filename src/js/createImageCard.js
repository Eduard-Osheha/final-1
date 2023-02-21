export default function createMarkupForOneElement({webformatURL, largeImageURL, tags, comments, likes, views, downloads}) {    
  return `
  <div class="photo-card">
  <a href="${largeImageURL}"> 
  <img src="${webformatURL}" alt="${tags}"  loading="lazy" class="card-image" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads:  ${downloads}</b>
    </p>
  </div>
</div>
   `
 }
  
   
  