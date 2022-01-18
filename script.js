const h1 = document.querySelector(".heading-primary");
const section1 = document.querySelector(".section-about");
const section2 = document.querySelector(".section-education");
const section3 = document.querySelector(".section-course-work");
const h1name = `<janita-røyseth/>`;
const h2about = `about.get()`;
const h1text = `education.get()`;

const animateLetters = function (element, string) {
  let i = 0;
  const interval = window.setInterval(function () {
    element.textContent = `${string.substring(0, i)}`;
    i++;
    if (i === string.length + 1) clearInterval(interval);
  }, 125);
};
animateLetters(h1, h1name);

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
  if (entry.target.classList.contains("section-about")) {
    animateLetters(section1.querySelector(".heading-secondary"), 'about.get()');
    setTimeout(function() {
      section1.querySelector(".heading-secondary").textContent = 'about';
      section1.querySelector(".heading-secondary").style.color = 'rgba(131, 208, 203, 0.7)';
      document.querySelector(".about-grid").classList.remove("hidden");
      console.log('hello');
    }, 2000)
  } else if (entry.target.classList.contains("section-education")) {
    animateLetters(section2.querySelector(".heading-secondary"), 'education.get()');
    setTimeout(function() {
      section2.querySelector(".heading-secondary").textContent = 'education';
      section2.querySelector(".heading-secondary").style.color = 'rgba(131, 208, 203, 0.7)';
      document.querySelector(".timeline-grid").classList.remove("hidden");
    }, 2500)
  } else if (entry.target.classList.contains("section-course-work")) {
    animateLetters(section3.querySelector(".heading-secondary"), 'courseWork.get()');
    setTimeout(function() {
      section3.querySelector(".heading-secondary").textContent = 'course work';
      section3.querySelector(".heading-secondary").style.color = 'rgba(131, 208, 203, 0.7)';
      document.querySelector(".courses").classList.remove("hidden");
    }, 2500)
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});