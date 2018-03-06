function test(){
    var para = document.createElement("p");
    var info = "nodeName: ";
    info += para.nodeName;
    info += " ; nodeType: ";
    info += para.nodeType;
    alert(info);
}

addWindowOnload(addPara);
function addPara(){
    var para = document.createElement("p");
    var text = document.createTextNode("Hello world");
    para.appendChild(text);

    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}

addWindowOnload(addMorePara);
function addMorePara(){
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is ");
    para.appendChild(txt1);

    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("my");
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);

    var txt3 = document.createTextNode(" content.");
    para.appendChild(txt3);

    var testdiv2 = document.getElementById("testdiv2");
    testdiv2.appendChild(para);
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