import{S as d,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",m="43801311-7231ce11da623161c2dfbe05c";function g(s=""){const i=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${y}?${i}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).catch(r=>{})}function h(s){return s.map(({webformatURL:i,largeImageURL:r,tags:l,likes:e,views:t,comments:o,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img src="${i}" alt="${l}" width="360">
          </a>
          <ul class="gallery-description-list">
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Likes</p>
              <p class="gallery-description-quantity">${e}</p>
            </li>
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Views</p>
              <p class="gallery-description-quantity">${t}</p>
            </li>
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Comments</p>
              <p class="gallery-description-quantity">${o}</p>
            </li>
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Downloads</p>
              <p class="gallery-description-quantity">${u}</p>
            </li>
          </ul>
        </li>
        `).join("")}const n=new d(".gallery-link",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),c=document.querySelector(".loader");p.addEventListener("submit",L);function L(s){s.preventDefault();const i=s.target.elements.search.value.trim();i.trim()!==""&&(c.style.display="block",g(i).then(r=>{if(c.style.display="none",r.hits.length===0){S();return}a.innerHTML=h(r.hits),n&&n.refresh()}),p.reset(),a.innerHTML="")}function S(){f.show({message:"Sorry, there are no images matching your search query. Please try again!",titleSize:"16px",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",timeout:"3000",closeOnClick:"true",progressBarColor:"#fff",transitionIn:"bounceInDown",transitionOut:"flipOutX"})}
//# sourceMappingURL=index.js.map
