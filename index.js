import{a as d,S as m,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="50870146-6f4da653a0080d03ee3a8a589",g="https://pixabay.com/api/";async function h(s){const r={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30};return(await d.get(g,{params:r})).data}function v(s){return`
    <ul class="gallery">
      ${s.map(({webformatURL:r,largeImageURL:o,tags:a,likes:e,views:t,comments:i,downloads:u})=>`
          <li class='gallery-item'>
            <a class="gallery-link" href="${o}">
              <img class='gallery-image' src="${r}" alt="${a}" data-source="${o}" />
              <div class="info">
                <div class="info-item">
                  <p>Likes</p>
                  <p>${e}</p>
                </div>
                <div class="info-item">
                  <p>Views</p>
                  <p>${t}</p>
                </div>
                <div class="info-item">
                  <p>Comments</p>
                  <p>${i}</p>
                </div>
                <div class="info-item">
                  <p>Downloads</p>
                  <p>${u}</p>
                </div>
              </div>
            </a>
          </li>
        `).join("")}
    </ul>
  `}const l=document.querySelector("form"),c=document.querySelector(".gallery"),p=document.querySelector(".loader"),b=new m(".gallery a",{captions:!0,captionPosition:"bottom",captionsData:"alt",captionDelay:250,overlayOpacity:.8}),f={backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",titleColor:"#fff",iconColor:"#fff",timeout:5e3,progressBarColor:"rgba(181, 27, 27, 1)"};l.addEventListener("submit",async s=>{s.preventDefault();const r=l.elements.query.value.trim();if(!r){n.warning({message:"Please enter a search term",position:"topRight"});return}c.innerHTML="",p.style.display="block";try{const{hits:o}=await h(r);o.length?(c.innerHTML=v(o),b.refresh()):n.error({message:"Sorry, there are no images matching your search query.",position:"topRight",...f})}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight",...f})}finally{p.style.display="none"}});
//# sourceMappingURL=index.js.map
