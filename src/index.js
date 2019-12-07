import '../node_modules/fullpage.js/dist/fullpage.css';
import './styles/main.scss';

import $ from 'jquery';
import barba from '@barba/core';
import '../node_modules/fullpage.js/vendors/scrolloverflow'
import fullpage from "fullpage.js";
import { gsap } from "gsap";

$(document).ready(_ => {

    barba.init({});

    new fullpage("#fullpage", {
        licenseKey: 'FMvhgUP&p6',
    });

    fullpage_api.setAllowScrolling(true);

});