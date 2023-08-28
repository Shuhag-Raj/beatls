// Menu Part And Back to top button
$('.back_to_top').click(function(){
    $('html, body').animate({
        scrollTop: 0,
    },800);
});
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 450) {
      $('.menu_part').addClass('ami');
    } else {
      $('.menu_part').removeClass('ami');
    }
    if (scrollTop >= 500) {
      $('.back_to_top').fadeIn('slow');
    } else {
      $('.back_to_top').fadeOut('slow');
    }
  }); 
// Start VenoBox
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane',
    
});
new VenoBox({
    selector: '.my-video-links',
});
// End VenoBox


// CountDown
$(document).ready(function() {
    function countdownTimer() {
      var deadline = new Date("2023-12-31T23:59:59"); // Specify your deadline here
  
      var daysElement = $(".days .number");
      var hoursElement = $(".hours .number");
      var minutesElement = $(".minutes .number");
      var secondsElement = $(".seconds .number");
  
      function updateCountdown() {
        var currentTime = new Date();
        var timeRemaining = deadline - currentTime;
  
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        daysElement.text(days);
        hoursElement.text(hours);
        minutesElement.text(minutes);
        secondsElement.text(seconds);
  
        if (timeRemaining < 0) {
          daysElement.text("0");
          hoursElement.text("0");
          minutesElement.text("0");
          secondsElement.text("0");
        }
      }
  
      updateCountdown();
      setInterval(updateCountdown, 1000);
    }
  
    countdownTimer();
  });

//CounterUp
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
  
// Wow
new WOW().init();
  
// Aos 
AOS.init();
// Swiper 
const swiper = new Swiper('.swiper', {
  // Slide preview
  slidesPerView: 2,
  spaceBetween: 30,
  // Autoplay
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Optional parameters 
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
}); 