import outSideClick from "./outsideClick.js";

export default class DropDownMenu {
   constructor(dropDowMenus, events) {
    this.dropDownMenus = document.querySelectorAll(dropDowMenus);
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    this.activeClass = "ativo";
    
    if(events === undefined) this.events = ["click", "touchstart"]
    else this.events = events
   }

   
   activeDropDownMenu(event) {
     event.preventDefault();
     const element = event.currentTarget
     element.classList.add(this.activeClass);
     outSideClick(element, this.events, () => {
       element.classList.remove(this.activeClass);
      });
    }

    addDropDownMenusEvents() {
      this.dropDownMenus.forEach((menu) => {
        const events = this.events;
        events.forEach((userEvent) => {
          menu.addEventListener(userEvent, this.activeDropDownMenu);
        });
      });
    }

  init() {
    if(this.dropDownMenus.length) this.addDropDownMenusEvents()
    return this
  }
}
