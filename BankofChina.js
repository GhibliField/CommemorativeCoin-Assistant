javascript:(function(){
    var info = [{
        "name": '魏海云',
        "id": '32010619740503121X',
        "phone": '15588596119'
    }, {
        "name": '蒋群立',
        "id": '130636197710075411',
        "phone": '13820407366'
    }, {
        "name": '李志龙',
        "id": '511121198207133439',
        "phone": '13812102057'
    }, {
        "name": '郑体操',
        "id": '370687198805284776',
        "phone": '18668357728'
    }, {
        "name": '俞新华',
        "id": '330102199211211816',
        "phone": '13916054638'
    }];
    let name_input=document.querySelector("#txt_name_1956714");
    let phone_input=document.querySelector("#txt_mobile_1956715");
    let id_input=document.querySelector("#txt_identitynumber_1956717");
    let reset_btn=document.querySelector("#btn_reset_1956723");
    let next_input=document.querySelector("#btn_nextstep_1956722");
    var html = "<div id='people_info'style='display:flex;flex-direction:column;position:fixed;right:0;top:0;width:100px;background:white;z-index:9999'><ul>";
    var $ = $ || window.$;
    window.insertInfo=function(name,id,phone){
        console.log(id);
        name_input.value=name;
        phone_input.value=phone;
        id_input.value=id;
    };
    info.forEach((e, i) => {
        html += "<li style='padding:6px;cursor:pointer;text-align:center;background:#990033;color:white;border: double 1px #E1E5EE;' onclick='insertInfo(";
        html+="\""+e.name+"\",\""+e.id+"\",\""+e.phone+"\");'>" + e.name + "</li>";
    });
    $('body').append(html);
})();
