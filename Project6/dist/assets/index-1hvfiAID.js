(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();let a=document.getElementById("product-img"),r=document.getElementsByClassName("btn"),i=document.getElementById("price"),m=document.getElementById("small"),f=document.getElementById("medium"),g=document.getElementById("large"),L=document.getElementById("x-large"),p=document.getElementById("xx-large");function d(o){a.src=`assets/image${o}.png`;for(let n of r)n.classList.remove("active");r[o-1].classList.add("active")}r[0].addEventListener("click",function(){d(1)});r[1].addEventListener("click",function(){d(2)});r[2].addEventListener("click",function(){d(3)});const c=["$15.00","$20.00","$25.00","$30.00","$35.00"];m.addEventListener("click",()=>i.innerHTML=c[0]);f.addEventListener("click",()=>i.innerHTML=c[1]);g.addEventListener("click",()=>i.innerHTML=c[2]);L.addEventListener("click",()=>i.innerHTML=c[3]);p.addEventListener("click",()=>i.innerHTML=c[4]);document.getElementById("Buy-btn");
