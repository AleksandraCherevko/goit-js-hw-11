import{i as f,S as h}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(s){return s.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:u})=>` <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${i}"
            width="360"
          />
        </a>
        <div class="thumb-block">
          <div class="block">
            <h2 class="tittle">Likes</h2>
            <p class="amount">${e}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Views</h2>
            <p class="amount">${t}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Comments</h2>
            <p class="amount">${a}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Downloads</h2>
            <p class="amount">${u}</p>
          </div>
        </div>
      </li>`).join("")}function c(s){const o="https://pixabay.com/api/",r="43242855-c6b7005837cbd7f2bbf3eb2ae";s.includes(" ")&&s.replace(/\s+/g,"+");const i=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()})}const n=document.querySelector(".js-form"),l=document.querySelector(".gallery");n.addEventListener("submit",m);function m(s){s.preventDefaul(),l.innerHTML="";const o=s.target.elements.search.value.trim();c(o).then(r=>{r.hits.length||f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML=d(r.hits),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),c.refresh(),n.reset()}).catch(r=>{console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
