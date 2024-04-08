import{i as h,S as f}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(o){return o.map(({id:s,webformatURL:t,largeImageURL:i,tags:e,likes:r,views:a,comments:l,downloads:u})=>`<li class="gallery-item" data-id='${s}'>
       <a class="gallery-link" href="${i}">
     <img
            class="gallery-image"
            src="${t}"
            alt="${e}"
      
         
          /></div>
        </a>
        <div class="thumb-block">
          <div class="block">
            <h2 class="tittle">Likes</h2>
            <p class="amount">${r}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Views</h2>
            <p class="amount">${a}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Comments</h2>
            <p class="amount">${l}</p>
          </div>
          <div class="block">
            <h2 class="tittle">Downloads</h2>
            <p class="amount">${u}</p>
          </div>

      </li> `).join("")}function m(o){const s="https://pixabay.com/api/",t="43242855-c6b7005837cbd7f2bbf3eb2ae",i=new URLSearchParams({key:t,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const n=document.querySelector(".js-form"),c=document.querySelector(".gallery");n.addEventListener("submit",p);function p(o){o.preventDefault(),c.innerHTML="";const s=o.currentTarget.querySelector(".search-input").value;m(s).then(t=>(t.hits.length||h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),t)).then(t=>{console.log(t),c.innerHTML=d(t.hits),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),n.reset()}).catch(t=>{console.log(t)})}
//# sourceMappingURL=commonHelpers.js.map
