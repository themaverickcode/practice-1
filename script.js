const btnHamburger = document.getElementById("btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElms = document.querySelectorAll(".has-fade")

btnHamburger.addEventListener("click",function(){
    if(header.classList.contains('open')){
        body.classList.remove("noscroll");
        header.classList.remove("open")
        fadeElms.forEach(function(elems){
            elems.classList.remove("fade-in");
            elems.classList.add("fade-out");
        })
    }else{
        body.classList.add("noscroll");
        header.classList.add("open");
        fadeElms.forEach(function(elems){
            elems.classList.remove("fade-out");
            elems.classList.add("fade-in");
        })
    }
})