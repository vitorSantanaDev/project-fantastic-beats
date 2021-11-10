export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anima="scroll"]');
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    const animateScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;

        if (isSectionVisible) section.classList.add("ativo");
        else if(section.classList.contains("ativo")) {
          section.classList.remove("ativo")
        };
      });
    };
    animateScroll();
    window.addEventListener("scroll", animateScroll);
  }
}