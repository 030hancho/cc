var myswiper = new Swiper(".swiper-container", {

    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    parallax: true,
  });

  //swiper click event

  $('.swiper-stop').on('click', function(){

    myswiper.autoplay.stop();

  });

  $('.swiper-start').on('click', function(){

    myswiper.autoplay.start();

  });

  // swiper 슬라이드를 여러개 사용할 때 정지 / 재생 기능을 쓰려면 변수명을 myswiper 이런 식으로 바꿔줘야한다.

  var swiper = new Swiper(".kc_swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    parallax: true,
  });

var upswiper = new Swiper(".up_swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});