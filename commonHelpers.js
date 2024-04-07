import{i as u,S as d}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(i){return i.map(({webformatURL:s,largeImageURL:r,tags:l,likes:e,views:t,comments:o,downloads:n})=>` <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${l}"
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
            <p class="amount">${o}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Downloads</h2>
            <p class="amount">${n}</p>
          </div>
        </div>
      </li>`).join("")}const a=document.querySelector(".js-form"),c=document.querySelector(".gallery");a.addEventListener("submit",f);function f(i){i.preventDefaul(),c.innerHTML="";const s=i.target.elements.search.value.trim();getPicture(s).then(r=>{r.hits.length||u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=m(r.hits),new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),a.reset()}).catch(r=>{console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
