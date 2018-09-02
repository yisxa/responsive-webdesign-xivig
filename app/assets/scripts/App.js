import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal.js';
import $ from 'jquery';
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".service-item"), "70%");
new RevealOnScroll($(".testimonial"), "85%");

var stickyHeader = new StickyHeader();
var modal = new Modal();

