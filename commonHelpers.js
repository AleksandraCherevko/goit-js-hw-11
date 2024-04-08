import{i as c,S as m}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(o){return o.map(({id:s,webformatURL:r,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:h})=>`<li class="gallery-item" data-id='${s}'>
       <a class="gallery-link" href="${a}">
     <img
            class="gallery-image"
            src="${r}"
            alt="${e}"
      
         
          /></div>
        </a>
        <div class="thumb-block">
          <div class="block">
            <h2 class="tittle">Likes</h2>
            <p class="amount">${t}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Views</h2>
            <p class="amount">${i}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Comments</h2>
            <p class="amount">${u}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Downloads</h2>
            <p class="amount">${h}</p>
          </div>

      </li> `).join("")}function f(o){const s="https://pixabay.com/api/",r="43242855-c6b7005837cbd7f2bbf3eb2ae",a=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const l=document.querySelector(".js-form"),n=document.querySelector(".gallery");l.addEventListener("submit",p);function p(o){o.preventDefault(),n.innerHTML="";const s=o.currentTarget.querySelector(".search-input").value;f(s).then(r=>(r.hits.length||c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),r)).then(r=>{n.innerHTML=d(r.hits),new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),l.reset()}).catch(r=>{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}
//# sourceMappingURL=commonHelpers.js.map
