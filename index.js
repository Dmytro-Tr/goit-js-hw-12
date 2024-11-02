import{S as p,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",g="43801311-7231ce11da623161c2dfbe05c";function m(s=""){const i=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${y}?${i}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).catch(r=>{})}function h(s){return s.map(({webformatURL:i,largeImageURL:r,tags:o,likes:e,views:t,comments:l,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img src="${i}" alt="${o}" width="360">
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
              <p class="gallery-description-quantity">${l}</p>
            </li>
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Downloads</p>
              <p class="gallery-description-quantity">${d}</p>
            </li>
          </ul>
        </li>
        `).join("")}const a=new p(".gallery-link",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),c=document.querySelector(".loader");u.addEventListener("submit",w);function w(s){s.preventDefault();const i=s.target.elements.search.value.trim();i.trim()!==""&&(c.style.display="block",m(i).then(r=>{if(c.style.display="none",r.hits.length===0){L();return}n.innerHTML=h(r.hits),a?a.refresh():a=new p(".gallery .galleries a",{captionsData:"alt",captionDelay:250})}),u.reset(),n.innerHTML="")}function L(){f.show({message:"Sorry, there are no images matching your search query. Please try again!",titleSize:"16px",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",timeout:"3000",closeOnClick:"true",progressBarColor:"#fff",transitionIn:"bounceInDown",transitionOut:"flipOutX"})}
//# sourceMappingURL=index.js.map
