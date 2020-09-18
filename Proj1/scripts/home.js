(function() {
const options = {
  threshold: [0.5]
};

const observer = new IntersectionObserver(entry => {
  entry.forEach(change => {
    console.log(change.isIntersecting);

    if (change.isIntersecting) {
      change.target.classList.add("visible");
    }
  });
}, options);

[...document.querySelectorAll(".about__title")].forEach(elm => observer.observe(elm));

[...document.querySelectorAll(".about__description")].forEach(elm => observer.observe(elm));
    
[...document.querySelectorAll(".services__top")].forEach(elm => observer.observe(elm));
    
[...document.querySelectorAll(".workers__text")].forEach(elm => observer.observe(elm));
    
[...document.querySelectorAll(".feature__top")].forEach(elm => observer.observe(elm));


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("about__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  changeColor(slideIndex);
  setTimeout(showSlides, 5000);
}

function changeColor(index) {
  $(".point1").css('background-color', '#d0d0d0');
  $(".point2").css('background-color', '#d0d0d0');
  $(".point3").css('background-color', '#d0d0d0');
  $(".point4").css('background-color', '#d0d0d0');

  if (index == 1) {
    $('.point1').css('background-color', 'black');
  }
  else if (index == 2) {
    $(".point2").css('background-color', 'black');
  }
  else if (index == 3) {
    $(".point3").css('background-color', 'black');
  } 
  else if (index == 4) {
    $(".point4").css('background-color', 'black');
  }
}    
    
$(".point1").click(function(){
  var i;
  var slides = document.getElementsByClassName("about__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[0].style.display = "block";
  changeColor(1);
  slideIndex = 1;
});

$(".point2").click(function(){
  var i;
  var slides = document.getElementsByClassName("about__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[1].style.display = "block";
    changeColor(2);
  slideIndex = 2;
});
    
$(".point3").click(function(){
  var i;
  var slides = document.getElementsByClassName("about__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[2].style.display = "block";
    changeColor(3);
  slideIndex = 3;
});
    
$(".point4").click(function(){
  var i;
  var slides = document.getElementsByClassName("about__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[3].style.display = "block";
    changeColor(4);
  slideIndex = 4;
});
    
var slideInd = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("about__item2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideInd++;
  if (slideInd > slides.length) {slideInd = 1}
  slides[slideInd-1].style.display = "block";
  setTimeout(showSlides2, 5000);
}

var slideI = 0;
showSlides3();

$('.change__left>a').click(function() {
  var i;
  var slides = document.getElementsByClassName("review__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideI--;
  if (slideI == 0) {slideI = 4}
  slides[slideI-1].style.display = "block";
    
  slides = document.getElementsByClassName("about__item2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideInd--;
  if (slideInd == 0) {slideInd = 4}
  slides[slideInd-1].style.display = "block"; 
  changeColor(slideInd);
});

$('.change__right>a').click(function() {
  var i;
  var slides = document.getElementsByClassName("review__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideI++;
  if (slideI > slides.length) {slideI = 1}
  slides[slideI-1].style.display = "block";
  
  slides = document.getElementsByClassName("about__item2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideInd++;
  if (slideInd > slides.length) {slideInd = 1}
  slides[slideInd-1].style.display = "block";
  changeColor(slideInd);
});
    
function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("review__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideI++;
  if (slideI > slides.length) {slideI = 1}
  slides[slideI-1].style.display = "block";
  setTimeout(showSlides3, 5000);
}

  $(".menu__button").click(function() {
    $(".menu__list").css("display", "block");
  });
    
$(".point1").click(function(){
  var i;
  var slides = document.getElementsByClassName("about__item2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[0].style.display = "block";
  slides = document.getElementsByClassName("review__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[0].style.display = "block";
    slideI = 1;
    slideInd = 1;
});

$(".point2").click(function(){
  var i;
  var slides = document.getElementsByClassName("about__item2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[1].style.display = "block";
  slides = document.getElementsByClassName("review__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[1].style.display = "block";
    slideI = 2;
    slideInd = 2;
});
    
$(".point3").click(function(){
  var i;
  var slides = document.getElementsByClassName("about__item2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[2].style.display = "block";
  slides = document.getElementsByClassName("review__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[2].style.display = "block";
    slideI = 3;
    slideInd = 3;
});
    
$(".point4").click(function(){
  var i;
  var slides = document.getElementsByClassName("about__item2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[3].style.display = "block";
  slides = document.getElementsByClassName("review__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[3].style.display = "block";
    slideI = 4;
    slideInd = 4;
});
})()
