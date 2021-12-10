import debounce from "../debounce/debounce.js"

export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;
    this.checkedDistance = debounce(this.checkedDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;
     
      return {
        element: section,
        offset: Math.floor(sectionTop - this.windowHalf)
      }
    });
  }

  checkedDistance() {
    this.distance.forEach((section) => {
      if(window.pageYOffset > section.offset) {
        section.element.classList.add("ativo");
      } else if(section.element.classList.contains("ativo")){
        section.element.classList.remove("ativo");
      }
    })
  }

  init() {
    if(this.sections.length) {
      this.getDistance();
      this.checkedDistance();
      window.addEventListener("scroll", this.checkedDistance);
    }
    return this
  }

  stop() {
    window.removeEventListener("scroll", this.checkedDistance)
  }
}
