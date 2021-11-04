function initTabNavigation() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  console.log(tabContent)

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
initTabNavigation();

function initAccordionList() {
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
initAccordionList();

function initScrollSuave() {
  const internalLinks = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  const scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    //  Forma alternativa
    //  const top = section.offsetTop
    //  window.scrollTo({
    //   top: top,
    //   behavior: 'smooth',
    // })
  };

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anima="scroll"]');
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    const animateScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;

        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    };
    animateScroll();
    window.addEventListener("scroll", animateScroll);
  }
}
initScrollAnimation()