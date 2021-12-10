export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;
    this.animateScroll = this.animateScroll.bind(this);
  }

  animateScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowHalf < 0;

      if (isSectionVisible) section.classList.add("ativo");
      else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    this.animateScroll();
    window.addEventListener("scroll", this.animateScroll);
  }
}
