const sections = document.querySelectorAll("section");

const revealSection = () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      section.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealSection);

revealSection();
