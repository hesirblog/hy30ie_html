// JavaScript Document
var a = function (o) { return document.getElementById(o); }
function showDiv(parm) {
    a('tab_div1').style.display = 'none';
    a('tab_div2').style.display = 'none';
    a(parm).style.display = '';
    for (var i in a('tab_menu').getElementsByTagName('li')) {
        if (a('tab_menu').getElementsByTagName('li')[i].className == "Spacing") {

        } else {
            a('tab_menu').getElementsByTagName('li')[i].className = 'MouseoutMenu';
        }
    }
}