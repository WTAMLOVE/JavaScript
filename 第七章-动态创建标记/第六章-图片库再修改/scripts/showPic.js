addLoadFunction(exampleGallery);
function exampleGallery(){
    if (!document.createTextNode) return false;
    if (!document.createElement) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/example.jpg");
    placeholder.setAttribute("alt", "my image gallery");

    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var txt = document.createTextNode("This is a example.");
    description.appendChild(txt);

    var imagegallery = document.getElementById("imagegallery");
    // imagegallery.parentNode.insertBefore(placeholder, imagegallery);
    // imagegallery.parentNode.insertBefore(description, imagegallery);
    insertAfter(description, imagegallery);
    insertAfter(placeholder, imagegallery);
}

function showPic(whichpic){
    // 修改 placeholder 图片
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");

    placeholder.setAttribute("src", source);
    // placeholder.src = source;

    // 修改 description 段落文本
    if (document.getElementById("description")){
        var text = whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
        var description = document.getElementById("description");

        description.firstChild.nodeValue = text;
    }
    return true;
}

addLoadFunction(prepareGallery);
function prepareGallery(){
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            return !showPic(this);
        }
    }
}

function addLoadFunction(func){
    oldonload = window.onload;
    if (typeof oldonload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
