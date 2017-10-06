'use strict';

$(document).ready(function() {
    $('.mg-container-social').height($('article').height());
    $('#mg-panel-social').stick_in_parent({offset_top: 35});
});

function rot13(str) {
    var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var index     = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}

$(document).ready(function() {
    if ($('.myemail')[0]) {
        $('.myemail')[0].href = "mailto:" + rot13($('.myemail')[0].href.substr(7));
        $('.myemail')[0].innerText = rot13($('.myemail')[0].innerText);
    }
});

