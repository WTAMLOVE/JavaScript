function insertParagraph(text){
    var str = "<p>";
    str += text;
    str += "</p>";
    document.write(str);
}

addWindowOnload(rInnerHTML);
function rInnerHTML(){
    var testdiv = this.document.getElementById("testdiv");
    alert(testdiv.innerHTML);
}

addWindowOnload(wInnerHTML);
function wInnerHTML(){
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = "<p>This is <em>another</em> content.</p>";
}

function addWindowOnload(func){
    oldOnload = window.onload;
    if (typeof oldOnload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldOnload();
            func();
        }
    }
}