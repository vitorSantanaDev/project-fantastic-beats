export default function initAccordionList() {
  const activeClass = "ativo";
  const accordionItem = document.querySelectorAll('[data-anima="accordion"] dt');

  if (accordionItem.length) {
    accordionItem[0].classList.add(activeClass);
    accordionItem[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionItem.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}