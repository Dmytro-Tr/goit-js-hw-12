import{a as w,S,i as f}from"./assets/vendor-G7KkPL-b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const q="https://pixabay.com/api/",O="43801311-7231ce11da623161c2dfbe05c";async function g(r,t=1,i=15){const l=new URLSearchParams({key:O,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:i,page:t}),{data:e}=await w.get(`${q}?${l}`);return e}function h(r){return r.map(({webformatURL:t,largeImageURL:i,tags:l,likes:e,views:s,comments:n,downloads:b})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img src="${t}" alt="${l}" width="360">
          </a>
          <ul class="gallery-description-list">
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Likes</p>
              <p class="gallery-description-quantity">${e}</p>
            </li>
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Views</p>
              <p class="gallery-description-quantity">${s}</p>
            </li>
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Comments</p>
              <p class="gallery-description-quantity">${n}</p>
            </li>
            <li class="gallery-description-item">
              <p class="gallery-description-headline">Downloads</p>
              <p class="gallery-description-quantity">${b}</p>
            </li>
          </ul>
        </li>
        `).join("")}const y=new S(".gallery-link",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),c=document.querySelector(".loader"),a=document.querySelector(".load-more");let o=1,L=15,m=0,u="";p.addEventListener("submit",M);a.addEventListener("click",$);async function M(r){if(r.preventDefault(),d.innerHTML="",a.disabled=!1,a.classList.replace("load-more","load-more-hidden"),o=1,u=r.target.elements.search.value.trim(),u.trim()===""){a.disabled=!0,a.classList.replace("load-more","load-more-hidden"),C();return}c.classList.replace("loader-on","loader"),g(u,o).then(t=>{if(c.classList.replace("loader","loader-on"),a.classList.replace("load-more-hidden","load-more"),t.hits.length===0){showMessage("Sorry, there are no images matching your search query. Please try again!");return}p.reset(),d.insertAdjacentHTML("beforeend",h(t.hits)),o===1&&(m=t.totalHits),o*L>=m&&a.classList.replace("load-more-hidden","load-more"),y.refresh(),p.reset()}).catch(t=>alert(t.message)),d.innerHTML=""}async function $(){o+=1,a.disabled=!0,c.classList.replace("loader","loader-on");try{const r=await g(u,o);d.insertAdjacentHTML("beforeend",h(r.hits)),y.refresh(),a.disabled=!1;const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:i*2,left:0,behavior:"smooth"}),o*L>=m&&(a.disabled=!1,a.classList.replace("load-more","load-more-hidden"),v("We're sorry, but you've reached the end of search results.")),c.classList.replace("loader-on","loader")}catch(r){alert(r.message)}finally{a.disabled=!1,c.classList.replace("loader","loader-on")}}function v(r){f.info({title:"We are sorry, ",message:"but you've reached the end of search results.",titleSize:"16px",position:"topRight",timeout:"5000",closeOnClick:"true",progressBarColor:"#fff",transitionIn:"bounceInDown",transitionOut:"fadeOutRight"})}function C(r){f.warning({title:"Caution",message:"Search field cannot be empty!",titleSize:"16px",position:"topRight",timeout:"5000",closeOnClick:"true",progressBarColor:"#fff",transitionIn:"bounceInDown",transitionOut:"fadeOutRight"})}
//# sourceMappingURL=index.js.map
