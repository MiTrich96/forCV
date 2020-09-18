
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("header_slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000);
}

$(".header_slider-left").click(function(){
   if (slideIndex != 1) slideIndex--; 
   else slideIndex = 5;
   var i;
  var slides = document.getElementsByClassName("header_slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
});

$(".header_slider-right").click(function(){
   if (slideIndex != 5) slideIndex++; 
    else slideIndex = 1;
   var i;
  var slides = document.getElementsByClassName("header_slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
});

$(".point1").click(function(){
  var i;
  var slides = document.getElementsByClassName("header_slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[0].style.display = "block";
  slideIndex = 1;
});

$(".point2").click(function(){
  var i;
  var slides = document.getElementsByClassName("header_slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[1].style.display = "block";
  slideIndex = 2;
});

$(".point3").click(function(){
  var i;
  var slides = document.getElementsByClassName("header_slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[2].style.display = "block";
  slideIndex = 3;
});

$(".point4").click(function(){
  var i;
  var slides = document.getElementsByClassName("header_slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[3].style.display = "block";
  slideIndex = 4;
});

$(".point5").click(function(){
  var i;
  var slides = document.getElementsByClassName("header_slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[4].style.display = "block";
  slideIndex = 5;
});