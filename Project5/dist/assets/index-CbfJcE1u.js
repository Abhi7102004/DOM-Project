(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function v(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=v(e);fetch(e.href,r)}})();var o=document.getElementById("name-error"),l=document.getElementById("phone-error"),i=document.getElementById("email-error"),u=document.getElementById("message-error"),s=document.getElementById("submit-error");document.getElementById("contact-name").addEventListener("keyup",c);function c(){var t=document.getElementById("contact-name").value;return console.log(1),t.length==0?(o.innerHTML="Name is required",!1):t.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)?(o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500 "><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>',!0):(o.innerHTML="Enter full name",!1)}document.getElementById("contact-phone").addEventListener("keyup",m);function m(){var t=document.getElementById("contact-phone").value;return t.length==0?(l.innerHTML="Phone no. is required",!1):t.match(/^\d+$/)?t.length!=10?(l.innerHTML="Phone no. should be 10 digits",!1):(l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500 "><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>',!0):(l.innerHTML="Only digits allowed",!1)}document.getElementById("contact-email").addEventListener("keyup",g);function g(){let t=document.getElementById("contact-email").value;return t.length==0?(i.innerHTML="Email is required",!1):t.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)?(i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500 "><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>',!0):(i.innerHTML="Enter a valid email address",!1)}document.getElementById("contact-message").addEventListener("keyup",f);function f(){let n=30-document.getElementById("contact-message").value.length;return n>0?(u.innerHTML=n+" more words required",!1):(u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500 "><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>',!0)}document.getElementById("submit").addEventListener("click",function(t){return t.preventDefault(),!c()||!m()||!g()||!f()?(s.innerHTML='Please fix errors to submit <span style="vertical-align: middle; display: inline-block;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" /></svg></span>',setTimeout(function(){s.innerHTML=""},3e3),!1):(s.innerHTML='Form Submitted Successfully <span style="vertical-align: middle; display: inline-block;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg></span>',!0)});
