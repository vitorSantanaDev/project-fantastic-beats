export default class Tooltip {
  constructor(tooltips) {
   this.tooltips = document.querySelectorAll(tooltips);
   this.onMouseLeave = this.onMouseLeave.bind(this)
   this.onMouseMove = this.onMouseMove.bind(this)
   this.onMouseover = this.onMouseover.bind(this)
  }

  onMouseMove(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      if(event.pageX + 190 > window.innerWidth) {
        this.tooltipBox.style.left = event.pageX - 240 + "px";
      } else {
        this.tooltipBox.style.left = event.pageX + 20 + "px";
      }
  };

  onMouseLeave ({ currentTarget }) {
      this.tooltipBox.remove();
      currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
      currentTarget.removeEventListener("mousemove", this.onMouseMove);
  };

  onMouseover({ currentTarget }) {
    this.createTooltip(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  createTooltip = (element) => {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;

    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  };

  addTooltipEvents() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseover);
    });
  }

  init() {
    if(this.tooltips.length) {
      this.addTooltipEvents();
    }
    return this
  }

}
