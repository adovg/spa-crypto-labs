import '../src/styles.scss';



window.onload = () => {
  console.log('hello world')
  const burgerBtn = document.querySelector(".burger__btn");
  const menuMobile = document.querySelector(".menu-mobile");
  const accordion = document.getElementsByClassName("tab");

  burgerBtn.onclick = function () {
    burgerBtn.classList.toggle("active");
    hideMenu();
  };

  menuMobile.onclick = function () {
    hideMenu();
    burgerBtn.classList.remove("active");
  };

  function hideMenu() {
    const menuMobile = document.querySelector(".menu-mobile");
    menuMobile.classList.toggle("hidden");
  }


function menuToTop () {


let scrollHight = window.pageYOffset;

    let navbar = document.querySelector('.navbar');
  if (scrollHight > 0 ) {
   navbar.classList.add('scrolled');
  } else if(scrollHight == 0) {
    navbar.classList.remove('scrolled');
  }
};

  window.addEventListener('scroll', menuToTop);
 
};








// menuToTop(scrollHight, navbar);