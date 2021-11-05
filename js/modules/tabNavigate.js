export default function initTabNavigation() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo", "show-right");

    const activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direction = tabContent[index].dataset.anima
      tabContent[index].classList.add("ativo", direction);
    };

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}