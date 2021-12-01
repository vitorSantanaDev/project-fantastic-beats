import outSideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  if (menuButton) {
    const openMenu = (event) => {
      event.preventDefault()
      menuList.classList.add("ativo");
      menuButton.classList.add("ativo");

      outSideClick(menuList, events, () => {
        menuList.classList.remove("ativo");
        menuButton.classList.remove("ativo");
      });
    };

    events.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}
