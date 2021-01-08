(()=>{"use strict";const e=()=>{const e=document.querySelector('input[name="pesquisarPor"]:checked');return e?{Título:"",Autor:"inauthor:",Editora:"inpublisher:",Gênero:"subject:"}[e.id]:""},o=e=>{const o=document.createElement("div");o.className="cartao",o.id=e.id,o.addEventListener("click",(async e=>{(e=>{document.querySelector("#tituloDisplay").innerHTML=e.volumeInfo.title;const o=document.querySelector("#imgLivroDisplay");o.innerHTML="";const t=document.createElement("img"),n=e.volumeInfo.imageLinks;t.src=n?n.thumbnail:"https://via.placeholder.com/150x180",o.appendChild(t);const l=document.querySelector("#autorLivro");l.innerHTML="",e.volumeInfo.authors.forEach((o=>{l.innerHTML+=o,e.volumeInfo.authors.length>1&&(l.innerHTML+=", ")})),document.querySelector("#editoraLivro").innerHTML=e.volumeInfo.publisher;const r=document.querySelector("#subtituloLivro");r.innerHTML="",e.volumeInfo.subtitle?r.innerHTML=e.volumeInfo.subtitle:r.innerHTML+="<span style='color: red'>O livro não possúi subtítulo.</span>";const i=document.querySelector("#generosLivro");i.innerHTML="",e.volumeInfo.categories?e.volumeInfo.categories.forEach((e=>{i.innerHTML+=e+", "})):i.innerHTML+="<span style='color: red'>Nenhum gênero encontrado para o livro.</span>";const c=document.querySelector("#displayDescription");c.innerHTML="";let a=750,s=e.volumeInfo.description;if(s){s.length<=a&&(a=s.length),s=s.replace(/<br>/gi,"\n"),s=s.replace(/<br\s\/>/gi,"\n"),s=s.replace(/<br\/>/gi,"\n"),s=s.replace(/<b>/gi,""),s=s.replace(/<b\/>/gi,""),s=s.replace(/<\/b>/gi,""),s=s.replace(/<i>/gi,""),s=s.replace(/<\/i>/gi,"");for(let e=0;e<a;e++)c.innerHTML+=s[e];s.length>=750&&(c.innerHTML+="...")}const d=document.querySelector("#linkDoLivro");e.volumeInfo.infoLink?(d.style.display="block",d.href=e.volumeInfo.infoLink):d.style.display="none";const u=document.querySelector(".modalLivro");u.style.display="flex",setTimeout((()=>{u.style.opacity="1"}),250)})(await(async e=>{if(e){const o=await fetch("https://www.googleapis.com/books/v1/volumes/"+e,{method:"get"});return await o.json()}alert("Erro ao abrir o livro, recarregue a página ou tente novamente !")})(e.currentTarget.id))}));const t=document.createElement("div"),n=document.createElement("img"),l=e.volumeInfo.imageLinks;n.src=l?l.thumbnail:"https://via.placeholder.com/150x180",t.className="card_imagem",t.appendChild(n);const r=document.createElement("div");r.style.width="100%";const i=document.createElement("div"),c=document.createElement("p");let a="";if(e.volumeInfo.title){let o=e.volumeInfo.title.length;o>55&&(o=55);for(let t=0;t<o;t++)void 0!==e.volumeInfo.title[t]&&(a+=e.volumeInfo.title[t]);55===o&&(a+="...")}else a="Livro sem Título";c.innerHTML=a,e.volumeInfo.title.length>26&&i.classList.add("longtitle"),i.classList.add("card_titulo"),i.appendChild(c);const s=document.createElement("div"),d=document.createElement("p");s.className="card_descricao",s.appendChild(d);let u="";if(e.volumeInfo.description){for(let o=0;o<90;o++)void 0!==e.volumeInfo.description[o]&&(u+=e.volumeInfo.description[o]);e.volumeInfo.description.length>90&&(u+="...")}else u=e.volumeInfo.title+", não possúi descrição.";d.innerHTML=u,r.appendChild(i),r.appendChild(s),o.appendChild(t),o.appendChild(r),document.querySelector("#displayCards").appendChild(o)};document.cookie="none",window.onload=()=>{fetch("./src/indicacoes.json").then((async e=>{t("Escolhas da Plataforma"),(e=await e.json()).forEach((e=>{o(e)}))})).catch((e=>{console.log(e)}))};const t=e=>{document.querySelector("#displayHeader").firstElementChild.innerHTML=e,document.querySelector("#displayCards").innerHTML=""};document.querySelector("#searchBtn").addEventListener("click",(n=>{n.preventDefault();const l=document.querySelector("#searchInput").value;let r=document.querySelector('input[name="pesquisarPor"]:checked').id;(async(o,t)=>{if(e(),""===o||null===o)alert("Campo de pesquisa vazio !");else{const t=await new Promise((t=>{let n="https://www.googleapis.com/books/v1/volumes?q="+e()+o;n+="&maxResults=15",t(n)}));try{const e=await fetch(t,{method:"get"}),o=await e.json();return 0===o.totalItems?(alert("Nenhum Resultado !"),null):o.items}catch(e){console.error(e)}}})(l).then((e=>{e&&(t("Resultados da Pesquisa: "+r+" = "+l),e.forEach((e=>{o(e)})))}))})),document.querySelectorAll(".radiobtn").forEach((e=>{e.addEventListener("click",(()=>{e.firstElementChild.checked=!0}))})),document.querySelector(".fechar").addEventListener("click",(()=>{let e=document.querySelector(".modalLivro");e.style.opacity="0",setTimeout((()=>{e.style.display="none"}),400)}))})();