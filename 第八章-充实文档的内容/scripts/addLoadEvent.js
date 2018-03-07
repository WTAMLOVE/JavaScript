function addLoadEvent(func){
    var oldOnload = window.onload;
    if (typeof oldOnload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldOnload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement){
    var parentElement = targetElement.parentNode;
    if (targetElement == parentElement.lastChild){
        parentElement.appendChild(newElement);
    }else{
        parentElement.insertBefore(newElement, targetElement.nextSibling);
    }
}