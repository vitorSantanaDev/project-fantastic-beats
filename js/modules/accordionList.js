export default class AccordionList {
  constructor(list) {
    this.accordionItem = document.querySelectorAll(list);
    this.activeClass = 'ativo'
  }

  
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionItem.forEach((item) => {
      item.addEventListener("click", () => {
        this.toggleAccordion(item)
      });
    });
  }

  init() {
    if(this.accordionItem.length) {
      this.toggleAccordion(this.accordionItem[0])
      this.addAccordionEvent()
    }
  }
}