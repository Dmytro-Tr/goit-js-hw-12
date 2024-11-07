import{a as d,S as f,i as y}from"./assets/vendor-Qob_5Ba8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",m="43801311-7231ce11da623161c2dfbe05c";async function h(s,r){const{data:i}=await d(`${g}`,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r}});return console.log("data",i),i}function L(s){return s.map(({webformatURL:r,largeImageURL:i,tags:l,likes:e,views:t,comments:o,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img src="${r}" alt="${l}" width="360">
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
        `).join("")}const a=new f(".gallery-link",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),c=document.querySelector(".loader");p.addEventListener("submit",b);function b(s){s.preventDefault();const r=s.target.elements.search.value.trim();r.trim()!==""&&(c.style.display="block",h(r).then(i=>{if(c.style.display="none",i.hits.length===0){S();return}n.innerHTML=L(i.hits),a&&a.refresh()}),p.reset(),n.innerHTML="")}function S(){y.show({message:"Sorry, there are no images matching your search query. Please try again!",titleSize:"16px",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",timeout:"3000",closeOnClick:"true",progressBarColor:"#fff",transitionIn:"bounceInDown",transitionOut:"fadeOutLeft"})}
//# sourceMappingURL=index.js.map
