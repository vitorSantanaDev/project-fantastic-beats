const tabMenu = document.querySelectorAll(".js-tabMenu li");
const tabContent = document.querySelectorAll(".js-tabContent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");

  const activeTab = (index) => {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  };

  tabMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
