export default class TabNavigation {
  constructor(menu, content) {
     this.tabMenu = document.querySelectorAll(menu);
     this.tabContent = document.querySelectorAll(content);
     this.activeClass = 'ativo'
  }
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direction = this.tabContent[index].dataset.anima
    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  addTabEvents() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if(this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0)
      this.addTabEvents()
    }
  }
}