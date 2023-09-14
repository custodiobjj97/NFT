import Menu from "./module/menuMobile.js";
import SlideNav from "./module/slide/slidenav.js";
import ScrollAnimation from "./module/scrollAnimation.js";
// here is menu mobile
const menu = new Menu('.list-menu', '.toggle')
menu.init()

// slide touch 
const slide = new SlideNav('.slide', '.slide-wrapper')

slide.init()
slide.addControl('.custom-controls')
// scroll animation
const scroll = new ScrollAnimation('.scroll')

scroll.init()

