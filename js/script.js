// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan hamburger menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//script slide testi
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//toggle (hide/show) FAQ payment
function myPayment() {
  var button = document.getElementById('myPayment');
  if(button.style.display === 'none') {
    button.style.display = 'block';
  }else{
    button.style.display = 'none';
  }
}

//Area
function myArea() {
  var area = document.getElementById('myArea');
  if(area.style.display === 'none') {
    area.style.display = 'block';
  } else {
    area.style.display = 'none';
  }
}

//Alat
function myAlat() {
  var area = document.getElementById('myAlat');
  if(area.style.display === 'none') {
    area.style.display = 'block';
  } else {
    area.style.display = 'none';
  }
}

//Order
function myOrder() {
  var area = document.getElementById('myOrder');
  if(area.style.display === 'none') {
    area.style.display = 'block';
  } else {
    area.style.display = 'none';
  }
}
