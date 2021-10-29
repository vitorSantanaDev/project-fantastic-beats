function initTabNavigation() {
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
}
initTabNavigation();

function initAccordionList() {
  const activeClass = "ativo";
  const accordionItem = document.querySelectorAll(".js-accordion dt");

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
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  const scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
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

function initScrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");
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
