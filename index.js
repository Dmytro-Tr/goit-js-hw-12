import{a as L,S,i as q}from"./assets/vendor-G7KkPL-b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const w="https://pixabay.com/api/",O="43801311-7231ce11da623161c2dfbe05c";async function y(r,t=1,a=15){const i=new URLSearchParams({key:O,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:a,page:t}),{data:e}=await L.get(`${w}?${i}`);return console.log("data",e),e}function g(r){return r.map(({webformatURL:t,largeImageURL:a,tags:i,likes:e,views:s,comments:n,downloads:b})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img src="${t}" alt="${i}" width="360">
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
        `).join("")}const h=new S(".gallery-link",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),m=document.querySelector(".loader"),l=document.querySelector(".load-more");let o=1,d=0,p="";u.addEventListener("submit",P);l.addEventListener("click",$);async function P(r){if(r.preventDefault(),c.innerHTML="",l.disabled=!1,l.classList.replace("load-more","load-more-hidden"),o=1,p=r.target.elements.search.value.trim(),p.trim()===""){l.disabled=!0,l.classList.replace("load-more","load-more-hidden"),f("Search field cannot be empty!");return}m.style.display="block",y(p,o).then(t=>{if(m.style.display="none",l.classList.replace("load-more-hidden","load-more"),t.hits.length===0){f("Sorry, there are no images matching your search query. Please try again!");return}u.reset(),c.insertAdjacentHTML("beforeend",g(t.hits)),o===1&&(d=t.totalHits),console.log("totalPage",d),o*15>=d&&l.classList.replace("load-more-hidden","load-more"),console.log("page",o),h.refresh(),u.reset()}).catch(t=>alert(t.message)),c.innerHTML=""}async function $(){o+=1,console.log("page",o),l.disabled=!0;try{const r=await y(p,o);c.insertAdjacentHTML("beforeend",g(r.hits)),h.refresh(),l.disabled=!1,m.style.display="none";const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"}),o*15>=d&&(l.disabled=!1,l.classList.replace("load-more","load-more-hidden"),f("We're sorry, but you've reached the end of search results."))}catch(r){alert(r.message)}finally{l.disabled=!1}}function f(r){q.show({message:r,titleSize:"16px",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",timeout:"3000",closeOnClick:"true",progressBarColor:"#fff",transitionIn:"bounceInDown",transitionOut:"fadeOutRight"})}
//# sourceMappingURL=index.js.map
