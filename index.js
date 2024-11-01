import{S as c,i as u}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",d="43801311-7231ce11da623161c2dfbe05c";function f(o=""){const i=new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}?${i}`).then(t=>{if(console.log("response",t),!t.ok)throw new Error(t.statusText);return t.json()}).catch(t=>{console.log("error",t)})}new c(".gallery-link",{captionsData:"alt",captionDelay:250});function g(o){return o.map(({webformatURL:i,largeImageURL:t,tags:l,likes:e,views:r,comments:s,downloads:a})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img src="${i}" alt="${l}" width="360">
          </a>
          <ul class="gallery-description-list">
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Likes</p>
              <p class="gallery-description-quantity">${e}</p>
            </li>
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Views</p>
              <p class="gallery-description-quantity">${r}</p>
            </li>
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Comments</p>
              <p class="gallery-description-quantity">${s}</p>
            </li>
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Downloads</p>
              <p class="gallery-description-quantity">${a}</p>
            </li>
          </ul>
        </li>
      `).join("")}const h=document.querySelector(".js-search-form"),y=document.querySelector(".js-gallery"),m=document.querySelector(".submit-input");h.addEventListener("submit",S);function S(o){o.preventDefault();const i=o.target.elements.search.value.trim();console.log("encoderSearch",i),f(i).then(t=>{if(console.log("then",t),t.hits.length===0){n();return}y.innerHTML=g(t.hits)}).catch(t=>{console.log("catch",t),n()}),m.value=""}function n(){u.show({message:"Sorry, there are no images matching your search query. Please try again!",titleSize:"16px",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",timeout:"3000",closeOnClick:"true",progressBarColor:"#fff",transitionIn:"bounceInDown",transitionOut:"flipOutX"})}
//# sourceMappingURL=index.js.map
