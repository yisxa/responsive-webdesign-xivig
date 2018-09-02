import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal.js';
import $ from 'jquery';
var mobileMenu = new MobileMenu();
var modal = new Modal();

new RevealOnScroll($(".service-item"), "70%");
new RevealOnScroll($(".testimonial"), "85%");