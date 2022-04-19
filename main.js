let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById("boat6");
let text = document.querySelector(".text");



window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value +"px";
    moon.style.top = value * 2 +"px";
    mountains3.style.top = value *1.2 + 'px';
    mountains4.style.top = value * 1.5 +  'px';
    river5.style.top = value * 1.2 +  'px';
    boat6.style.left = value * 3 +  'px';
    boat6.style.top = value +  'px';
    text.style.fontSize = value + "px";
    if (scrollY >= 80) {
        text.style.fontSize = "80px";
        text.style.position = "fixed";
    }
    if (scrollY >= 229) {
        document.querySelector(".main").style.background = '#00001c';
    }else{
        document.querySelector(".main").style.background = '';
    }
    // if (scrollY >=)
};