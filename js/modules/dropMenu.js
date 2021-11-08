import outSideClick from "./outsideClick.js";

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  dropDownMenus.forEach((menu) => {
    const events = ["click", "touchstart"];
    events.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outSideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }
}
