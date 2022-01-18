const h1 = document.querySelector(".heading-primary");
const section1 = document.querySelector(".section-about");
const h1name = `<janita-røyseth/>`;
const h2about = `about.get()`;
const h1text = `education.get()`;

const animateLetters = function (element, string) {
  let i = 0;
  window.setInterval(function () {
    element.textContent = `${string.substring(0, i)}`;
    i++;
    if (i === string.length) clearInterval(this);
  }, 125);
};
animateLetters(h1, h1name);

const allSections = document.querySelectorAll(".section");

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
  if (entry.target.classList.contains("section-about"))
    animateLetters(section1.querySelector(".heading-secondary"), h2about);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
});
