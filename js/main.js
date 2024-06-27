(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

//Floating button
var isAnimating = false;
var isOpen = false;
var button = document.querySelector(".sticky-menu-container .outer-button");
var menu = document.querySelector(".sticky-menu-container .inner-menu");
var closeIcon = document.querySelector(".sticky-menu-container .outer-button .close-icon");
var arrowIcon = document.querySelector(".sticky-menu-container .outer-button .arrow-icon");
var menuItems = document.querySelectorAll(".sticky-menu-container .inner-menu > .menu-list > .menu-item");

var itemTexts = document.querySelectorAll(".sticky-menu-container .inner-menu > .menu-list > .menu-item > .item-text");

button.addEventListener("click", function(){
  if(isAnimating) return;
  this.classList.add("clicked");
  menu.classList.toggle("closed");
  
  if(isOpen){
    closeIcon.classList.remove("show");
    closeIcon.classList.add("hide");
    arrowIcon.classList.remove("hide");
    arrowIcon.classList.add("show");
    menuItems.forEach(function(item){
      console.log(item);
       item.classList.add("text-hides");
    });
    itemTexts.forEach(function(text, index){
        setTimeout(function(){
          text.classList.remove("text-in");
        });
    });
    isOpen = false;
  }
  else{
    closeIcon.classList.remove("hide");
    closeIcon.classList.add("show");
    arrowIcon.classList.remove("show");
    arrowIcon.classList.add("hide");
    menuItems.forEach(function(item){
      console.log(item);
       item.classList.remove("text-hides");
    });
    itemTexts.forEach(function(text, index){
        setTimeout(function(){
          text.classList.add("text-in");
        }, index*150);
    });
    isOpen = true;
  }
  
});

button.addEventListener("animationstart", function(event){
  isAnimating = true;
});

button.addEventListener("animationend", function(event){
  isAnimating = false;
  this.classList.remove("clicked");
});

menuItems.forEach(function(item){
  item.addEventListener("click", function(){
      closeFloatButton(); // Close the menu when a menu item is clicked
  });
});

function closeFloatButton() {
  menu.classList.add("closed");
  closeIcon.classList.remove("show");
  closeIcon.classList.add("hide");
  arrowIcon.classList.remove("hide");
  arrowIcon.classList.add("show");
  menuItems.forEach(function(item){
      item.classList.add("text-hides");
  });
  itemTexts.forEach(function(text, index){
      setTimeout(function(){
          text.classList.remove("text-in");
      });
  });
  isOpen = false;
}

document.getElementById('phone').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

// Add event listener to close the menu when clicking outside of it
window.addEventListener("click", function(event) {
  if (isOpen && !menu.contains(event.target) && !button.contains(event.target)) {
      closeModal();
  }
});

document.getElementById('phone').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

//Modal
// // Get the modal
// var modal = document.getElementById("myModal");

// // When the user clicks on the button, open the modal
// window.onload = function () {
//     modal.style.display = "block";
//  }

const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
let isOpened = false;

const buttonClasses = [
  ".item-text.quote",
  ".btn.btn-primary.px-3.d-none.d-lg-block.quote",
  ".btn.btn-primary.py-3.px-5.quote"
];

const openModal = () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
  isOpened = true;
};

buttonClasses.forEach(className => {
  const buttons = document.querySelectorAll(className);
  buttons.forEach(button => {
      button.addEventListener("click", openModal);
  });
});


const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
  isOpened = false;
};

closeButton.addEventListener("click", closeModal);

// Add event listener to close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (isOpened && event.target === modal) {
    closeModal();
  }
});

// Imagenes aleatorias
window.onload = function() {
  // Array con las rutas de las imágenes de fondo
  var backgrounds = [
    './img/check_desierto.png',
    './img/banner_check_1.png'
    // Agrega más URLs de imágenes según sea necesario
  ];

  var randomIndex = Math.floor(Math.random() * backgrounds.length);
      var pageHeaders = document.getElementsByClassName('page-header');
      for (var i = 0; i < pageHeaders.length; i++) {
        pageHeaders[i].style.backgroundImage = 'url("' + backgrounds[randomIndex] + '")';
      }
    };


// Modal Life
const bodyLife = document.querySelector("body");
const modalLife = document.querySelector(".modalLife");
const modalButtonLife = document.getElementById('life');
const closeButtonLife = document.querySelector(".close-buttonLife");
let isOpenedLife = false;

const openModalLife = () => {
  modalLife.classList.add("is-openLife");
  bodyLife.style.overflow = "hidden";
  isOpenedLife = true;
};

const closeModalLife = () => {
  modalLife.classList.remove("is-openLife");
  bodyLife.style.overflow = "initial";
  isOpenedLife = false;
};

modalButtonLife.addEventListener("click", openModalLife);
closeButtonLife.addEventListener("click", closeModalLife);

// Add event listener to close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (isOpenedLife && event.target === modalLife) {
    closeModalLife();
  }
});

// Modal Health
const bodyHealth = document.querySelector("body");
const modalHealth = document.querySelector(".modalHealth");
const modalButtonHealth = document.getElementById('health');
const closeButtonHealth = document.querySelector(".close-buttonHealth");
let isOpenedHealth = false;

const openModalHealth = () => {
  modalHealth.classList.add("is-openHealth");
  bodyHealth.style.overflow = "hidden";
  isOpenedHealth = true;
};

const closeModalHealth = () => {
  modalHealth.classList.remove("is-openHealth");
  bodyHealth.style.overflow = "initial";
  isOpenedHealth = false;
};

modalButtonHealth.addEventListener("click", openModalHealth);
closeButtonHealth.addEventListener("click", closeModalHealth);

// Add event listener to close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (isOpenedHealth && event.target === modalHealth) {
    closeModalHealth();
  }
});

// Modal Home
const bodyHome = document.querySelector("body");
const modalHome = document.querySelector(".modalHome");
const modalButtonHome = document.getElementById('home');
const closeButtonHome = document.querySelector(".close-buttonHome");
let isOpenedHome = false;

const openModalHome = () => {
  modalHome.classList.add("is-openHome");
  bodyHome.style.overflow = "hidden";
  isOpenedHome = true;
};

const closeModalHome = () => {
  modalHome.classList.remove("is-openHome");
  bodyHome.style.overflow = "initial";
  isOpenedHome = false;
};

modalButtonHome.addEventListener("click", openModalHome);
closeButtonHome.addEventListener("click", closeModalHome);

// Add event listener to close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (isOpenedHome && event.target === modalHome) {
    closeModalHome();
  }
});

// Modal Car
const bodyCar = document.querySelector("body");
const modalCar = document.querySelector(".modalCar");
const modalButtonCar = document.getElementById('car');
const closeButtonCar = document.querySelector(".close-buttonCar");
let isOpenedCar = false;

const openModalCar = () => {
  modalCar.classList.add("is-openCar");
  bodyCar.style.overflow = "hidden";
  isOpenedCar = true;
};

const closeModalCar = () => {
  modalCar.classList.remove("is-openCar");
  bodyCar.style.overflow = "initial";
  isOpenedCar = false;
};

modalButtonCar.addEventListener("click", openModalCar);
closeButtonCar.addEventListener("click", closeModalCar);

// Add event listener to close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (isOpenedCar && event.target === modalCar) {
    closeModalCar();
  }
});

// Modal Business
const bodyBusiness = document.querySelector("body");
const modalBusiness = document.querySelector(".modalBusiness");
const modalButtonBusiness = document.getElementById('business');
const closeButtonBusiness = document.querySelector(".close-buttonBusiness");
let isOpenedBusiness = false;

const openModalBusiness = () => {
  modalBusiness.classList.add("is-openBusiness");
  bodyBusiness.style.overflow = "hidden";
  isOpenedBusiness = true;
};

const closeModalBusiness = () => {
  modalBusiness.classList.remove("is-openBusiness");
  bodyBusiness.style.overflow = "initial";
  isOpenedBusiness = false;
};

modalButtonBusiness.addEventListener("click", openModalBusiness);
closeButtonBusiness.addEventListener("click", closeModalBusiness);

// Add event listener to close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (isOpenedBusiness && event.target === modalBusiness) {
    closeModalBusiness();
  }
});

// Modal Bonds
const bodyBonds = document.querySelector("body");
const modalBonds = document.querySelector(".modalBonds");
const modalButtonBonds = document.getElementById('bonds');
const closeButtonBonds = document.querySelector(".close-buttonBonds");
let isOpenedBonds = false;

const openModalBonds = () => {
  modalBonds.classList.add("is-openBonds");
  bodyBonds.style.overflow = "hidden";
  isOpenedBonds = true;
};

const closeModalBonds = () => {
  modalBonds.classList.remove("is-openBonds");
  bodyBonds.style.overflow = "initial";
  isOpenedBonds = false;
};

modalButtonBonds.addEventListener("click", openModalBonds);
closeButtonBonds.addEventListener("click", closeModalBonds);

// Add event listener to close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (isOpenedBonds && event.target === modalBonds) {
    closeModalBonds();
  }
});

//Language switcher
function openLink() {
  window.location.href = './index_esp.html';
}

function openLinkEsp() {
  window.location.href = './index.html';
}