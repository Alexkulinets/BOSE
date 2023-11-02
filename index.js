function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  

  let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})



myButton.addEventListener("click", function () {
  myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup) {
      myPopup.classList.remove("show");
  }
})

$(function(){
  $('#div1').click(function(){
  if($(this).hasClass("che0")){
      $(this).toggleClass("che1");
  }
  else{
      $(this).toggleClass("che1");
  }
});
});

$(document).ready(function () {
  $('.bar').hover(function () {
    $('.bar').addClass('hovered');
  }, function () {
    $('.bar').removeClass('hovered');
  });
});