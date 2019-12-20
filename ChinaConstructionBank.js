// ==UserScript==
// @name         CCB Commemorative Coins Helper
// @namespace    Kn0wh0:bawyshen@gmail.com
// @version      0.1
// @description  an assistant helping commemorative coins subscription through CCB's website
// @author       kn0wh0
// @match        *://jinianbi.ccb.com/tran/WCCMainPlatV5*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    // // According to the risk control rules, you'd better not to use ONE phone number for subscriptions more than 5 times.
    // 按照风控规则，同一手机号不得预约超过5人次
    var info = [{
        "name": '李玉兰',
        "id": '110102192504032368',
        "phone": '13661132898'
    }, {
        "name": '李建华',
        "id": '61020019520409828X',
        "phone": '13661132898'
    }, {
        "name": '何俊',
        "id": '441581196801048270',
        "phone": '13661132898'
    }, {
        "name": '张萍',
        "id": '510903197708198666',
        "phone": '13661132898'
    }, {
        "name": '王秀云',
        "id": '310117199101202629',
        "phone": '13661132898'
    }, {
        "name": '江峰',
        "id": '650000194003039373',
        "phone": '14517285124'
    }, {
        "name": '邓海燕',
        "id": '420602199507047161',
        "phone": '14517285124'
    }];
    var $ = $ || window.$;
    var html = "<div id='people_info'style='display:flex;flex-direction:column;position:fixed;right:0;top:0;width:120px;background:white;z-index:9999'><ul>";
    info.forEach((e, i) => {
        html += "<li style='padding:5px;cursor:pointer;text-align:center;background-color:#336699;font-style:微软雅黑;color:white;font-size:14px;border: double 1px #E1E5EE'>" + e.name + "</li>";
    });
    html += "</ul><input id='time' type='date' style='background-color:#99CCFF' onchange=\"doChangeDate();\"></div>";
    html+='<script src="https://cdn.bootcss.com/js-cookie/latest/js.cookie.js"></script>';
    $('body').append(html);

    $('#people_info').find('li').click(function () {
        let index = $(this).index('#people_info li');
        let p = info[index];
        console.log(p);
        $('#USR_NM').val(p.name);
        $('#CRDT_NO').val(p.id);
        $('#MBLPH_NO').val(p.phone);
    });
    $('#BOOKING_DATE').val('2020-01-18');
    window.doChangeDate=function() {
        $('#BOOKING_DATE').val($('#time').val());
    };
})();