import outSideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
     this.menuButton = document.querySelector(menuButton);
     this.menuList = document.querySelector(menuList);
     
     if(events === undefined) this.events = ["click", "touchstart"];
     else this.events = events

     this.activeClass = "ativo"
  }

    openMenu = (event) => {
      event.preventDefault()
      this.menuList.classList.add(this.activeClass);
      this.menuButton.classList.add(this.activeClass);

      outSideClick(this.menuList, this.events, () => {
        this.menuList.classList.remove(this.activeClass);
        this.menuButton.classList.remove(this.activeClass);
      });
    };

    addMenuMobileEvents() {
      this.events.forEach((userEvent) => {
        this.menuButton.addEventListener(userEvent, this.openMenu);
      });
    }

    init() {
      if(this.menuButton && this.menuList) this.addMenuMobileEvents();
      return this
    }

}
