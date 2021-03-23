import $ from '../local_modules/jquery/dist/jquery.min'
import init_swiper from './swiper'
import init_datepicker from './datepicker'
import init_burger from './burger'
import init_language_menu from './language-menu'
import init_aos from './aos'
import init_sticky_header from './sticky_header'






$(document).ready(() => {
    init_swiper('.swiper-container')
    init_datepicker(`#form-subscribe__client-date`)
    init_burger('.burger', `.header__menu`)
    init_language_menu(`.menu__action`)
    init_aos()
    init_sticky_header()
})
