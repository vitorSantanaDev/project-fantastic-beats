import TabNavigation from "./modules/tabNavigate.js";
import initScrollAnimation from "./modules/scrollAnimation.js";
import ScrollSuave from "./modules/scrollSuave.js";
import AccordionList from "./modules/accordionList.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropMenu.js";
import initMenuMobile from "./modules/menuMobile.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";
import { SlideNav } from "./controller/controllerSlide.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init();

const accordionList = new AccordionList('[data-anima="accordion"] dt')
accordionList.init();

const tabNavigate = new TabNavigation('[data-tab="menu"] li', '[data-tab="content"] section')
tabNavigate.init()

initScrollAnimation();
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();


const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initDropDownMenu();
initMenuMobile();
initFetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
fetchAnimais('../../animais.api.json', '.numeros-grid');

const slide = new SlideNav(".slideWrapper", ".slideItems");
slide.init();
slide.addControll('.customControll');
