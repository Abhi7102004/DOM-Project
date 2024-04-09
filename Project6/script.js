let productImg = document.getElementById("product-img");
let btn = document.getElementsByClassName("btn");
let price=document.getElementById("price");
let small=document.getElementById("small");
let medium=document.getElementById("medium");
let large=document.getElementById("large");
let xLarge=document.getElementById("x-large");
let xxLarge=document.getElementById("xx-large");
function changeColor(e) {
  productImg.src = `images/image${e}.png`;
  for (let bt of btn) {
    bt.classList.remove("active");
  }
  btn[e-1].classList.add("active");
}

btn[0].addEventListener("click", function() {
  changeColor(1);
});

btn[1].addEventListener("click", function() {
  changeColor(2);
});

btn[2].addEventListener("click", function() {
  changeColor(3);
});

const priceArray=[`$${15}.00`,`$${20}.00`,`$${25}.00`,`$${30}.00`,`$${35}.00`];
small.addEventListener("click",()=> price.innerHTML=priceArray[0]);
medium.addEventListener("click",()=> price.innerHTML=priceArray[1]);
large.addEventListener("click",()=> price.innerHTML=priceArray[2]);
xLarge.addEventListener("click",()=> price.innerHTML=priceArray[3]);
xxLarge.addEventListener("click",()=> price.innerHTML=priceArray[4]);

let buyBtn=document.getElementById("Buy-btn");
