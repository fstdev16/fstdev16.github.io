let choosen = 0;

const homePage = document.querySelector("#home");
const aboutPage = document.querySelector("#about");
const skillPage = document.querySelector("#skill");
const projectPage = document.querySelector("#project");
const prevBtn = document.querySelector("#left-btn");
const nextBtn = document.querySelector("#right-btn");
const allDots = document.querySelectorAll(".fa-circle");

const allPages = [homePage, aboutPage, skillPage, projectPage];

prevBtn.addEventListener("click", () => {
  if (choosen > 0) {
    allDots[choosen].style.color = "white";
    allPages[choosen].classList.add("slide-to-left");
    allPages[choosen].classList.remove("fade-in");
    choosen--;
    window.setTimeout(function () {
      allPages[choosen].classList.remove("slide-to-right");
      allPages[choosen].classList.add("fade-in");
      allDots[choosen].style.color = "#d63a5f";
    }, 50);
  } else {
  }
});

nextBtn.addEventListener("click", () => {
  if (choosen < 3) {
    allDots[choosen].style.color = "white";
    allPages[choosen].classList.add("slide-to-right");
    allPages[choosen].classList.remove("fade-in");
    choosen++;
    window.setTimeout(function () {
      allPages[choosen].classList.remove("slide-to-left");
      allPages[choosen].classList.add("fade-in");
      allDots[choosen].style.color = "#d63a5f";
    }, 50);
  } else {
  }
});

window.setTimeout(function () {
  allPages[0].classList.add("fade-in");
}, 50);

allDots[0].style.color = "#d63a5f";
