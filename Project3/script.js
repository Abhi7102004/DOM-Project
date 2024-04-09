let scrollCont=document.querySelector(".gallery");
let nextbtn=document.getElementById("nextbtn");
let backbtn=document.getElementById("backbtn");
let itemWidth = scrollCont.querySelector("img").clientWidth + 13;
 

nextbtn.addEventListener("click",()=>{
  scrollCont.scrollLeft += itemWidth;
  if(scrollCont.scrollLeft + scrollCont.offsetWidth >= scrollCont.scrollWidth){
    let gallery=document.querySelector(".gallery");
    let firstChildGallery=gallery.firstElementChild;
    let lastChildGallery=gallery.lastElementChild;
    firstChildGallery.removeChild(firstChildGallery.firstElementChild);
    firstChildGallery.appendChild(lastChildGallery.firstElementChild.cloneNode(true));
    lastChildGallery.removeChild(lastChildGallery.firstElementChild);
    lastChildGallery.appendChild(firstChildGallery.firstElementChild.cloneNode(true));
  } 
})

backbtn.addEventListener("click", () => {
  scrollCont.scrollLeft -= itemWidth; 
  if (scrollCont.scrollLeft === 0) {
    let gallery = document.querySelector(".gallery");
    let firstChildGallery = gallery.firstElementChild;
    let lastChildGallery = gallery.lastElementChild;
    lastChildGallery.insertBefore(firstChildGallery.lastElementChild.cloneNode(true), lastChildGallery.firstElementChild);
    firstChildGallery.removeChild(firstChildGallery.lastElementChild);
    firstChildGallery.insertBefore(lastChildGallery.lastElementChild.cloneNode(true), firstChildGallery.firstElementChild);
    lastChildGallery.removeChild(lastChildGallery.lastElementChild);
  }
});

