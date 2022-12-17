window.addEventListener('load', () => {
  const scrollDown = document.querySelector('.scrollFullHeight');
  const a = window.innerHeight;
  

  function sidebar_toggle() {
    var x = document.getElementById('top_sidebar');
    if (x.className === "topnav") {
      x.classList.add("sidebar_active");
    } else {
      x.classList.remove("sidebar_active");
    }
  }


  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        // reveals[i].classList.remove("active");
      }
    }
  }


  window.addEventListener("scroll", reveal);

  // To check the scroll position on page load
  reveal();

  function scrollFullHeight() {
    document.body.scrollTop = a;
    document.documentElement.scrollTop = a;
  }

  scrollDown.addEventListener('click', scrollFullHeight);
})

