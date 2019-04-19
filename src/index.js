import './styles/main.scss';

import $ from 'jquery';
import barba from '@barba/core';
import '../node_modules/fullpage.js/vendors/scrolloverflow'
import fullpage from "fullpage.js";

$(document).ready(_ => {

    barba.init({});

    new fullpage("#fullpage", {
        verticalCentered: true,
        scrollOverflow: true,
        navigation: true,
        navigationPosition: 'right',
        sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
    });

    fullpage_api.setAllowScrolling(true);

});