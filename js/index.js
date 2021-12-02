import TabNavigation from "./modules/tabNavigate.js";
import initScrollAnimation from "./modules/scrollAnimation.js";
import ScrollSuave from "./modules/scrollSuave.js";
import AccordionList from "./modules/accordionList.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropMenu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";
import { SlideNav } from "./controller/controllerSlide.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init();

const accordionList = new AccordionList('[data-anima="accordion"] dt')
accordionList.init();

const tabNavigate = new TabNavigation('[data-tab="menu"] li', '[data-tab="content"] section')
tabNavigate.init()

initScrollAnimation();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFetchAnimais();
initFetchBitcoin();

const slide = new SlideNav(".slideWrapper", ".slideItems");
slide.init();
slide.addControll('.customControll');
