// JavaScript Document
//搜索引擎优化 tab切换
var a = function (o) { return document.getElementById(o); }
function showDiv(parm) {
    a('SEO_con').style.display = 'none';
    a('SEO_con2').style.display = 'none';
    a('SEO_con3').style.display = 'none';
    a(parm).style.display = '';
    document.getElementById("m2").style.borderRight = "none";
    if (parm == "SEO_con2") {
        document.getElementById("m1").style.borderRight = "none";
        document.getElementById("m2").style.borderLeft = "none";
        document.getElementById("m12").style.borderRight = "1px solid #CCC";
    } else {
        document.getElementById("m1").style.borderRight = "1px solid #CCC";
        document.getElementById("m2").style.borderLeft = "1px solid #CCC";
    }
    if (parm == "SEO_con3") {
        document.getElementById("m12").style.borderRight = "none";
        document.getElementById("m2").style.borderRight = "none";
        document.getElementById("m2").style.borderRight = "1px solid #CCC";
    }
    if (parm == "SEO_con") {
        document.getElementById("m2").style.borderLeft = "none";
    }
    for (var i in a('SEO_tab').getElementsByTagName('li')) {
        a('SEO_tab').getElementsByTagName('li')[i].className = 'Mouse_out';

    }
}

var a = function (o) { return document.getElementById(o); }
function showDiv2(parm) {
    a('Demo1').style.display = 'none';
    a('Demo2').style.display = 'none';
    a('Demo3').style.display = 'none';
    a('Demo4').style.display = 'none';
    a('Demo5').style.display = 'none';
    a('Demo6').style.display = 'none';
    a(parm).style.display = '';
    for (var i in a('Menu2').getElementsByTagName('LI')) {
        if (a('Menu2').getElementsByTagName('LI')[i].className == "Tab_spacing" || a('Menu2').getElementsByTagName('LI')[i].className == "Tab_spacing2") {

        } else {
            a('Menu2').getElementsByTagName('LI')[i].className = 'DemomouseOutMenu2';
        }
    }
}

//付款方式 tab切换
var a = function (o) { return document.getElementById(o); }
function Pm_way(parm) {
    a('Pm_m1').style.display = 'none';
    a('Pm_m2').style.display = 'none';
    a('Pm_m3').style.display = 'none';
    a('Pm_m4').style.display = 'none';
    a(parm).style.display = '';
    for (var i in a('Pmwaytab').getElementsByTagName('LI')) {
       a('Pmwaytab').getElementsByTagName('LI')[i].className = 'normal';
     }
}