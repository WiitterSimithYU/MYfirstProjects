/**
 * Created by miaomiaokeji on 2017/9/13.
 */
var txt = "";
function message() {
    try {
        alert("返回正确")
    }catch(err) {
        txt = "本页有一个错误。"+"\n\n";
        txt += "错误描述:"+err.message+"\n\n";
        txt +="点击继续。\n\n";
        alert(txt);
    }
}


function validateForm() {
    alert("alert");
    var x=document.forms["myForm"]["fname"].value;
    if (x == null||x == "")return false;
}

function myEmailForm() {
    alert("myemail");
    var x =document.forms["Myemail"]["myemails"].value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        alert("不是一个有效的 e-mail 地址");
        return false;
    }else {

        return true;
    }
}