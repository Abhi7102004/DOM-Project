(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();let i=document.querySelector(".gallery"),c=document.getElementById("nextbtn"),f=document.getElementById("backbtn"),s=i.querySelector("img").clientWidth+13;c.addEventListener("click",()=>{if(i.scrollLeft+=s,i.scrollLeft+i.offsetWidth>=i.scrollWidth){let o=document.querySelector(".gallery"),t=o.firstElementChild,l=o.lastElementChild;t.removeChild(t.firstElementChild),t.appendChild(l.firstElementChild.cloneNode(!0)),l.removeChild(l.firstElementChild),l.appendChild(t.firstElementChild.cloneNode(!0))}});f.addEventListener("click",()=>{if(i.scrollLeft-=s,i.scrollLeft===0){let o=document.querySelector(".gallery"),t=o.firstElementChild,l=o.lastElementChild;l.insertBefore(t.lastElementChild.cloneNode(!0),l.firstElementChild),t.removeChild(t.lastElementChild),t.insertBefore(l.lastElementChild.cloneNode(!0),t.firstElementChild),l.removeChild(l.lastElementChild)}});