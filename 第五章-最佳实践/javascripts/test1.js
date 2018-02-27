function popUP(winURL){
    window.open(winURL, "popup", "width=320,height=480");
}

// window.onload = prepareLinks;
// function prepareLinks(){
//     var links = document.getElementsByClassName("popup");
//     for (var i = 0; i < links.length; i++){
//         links[i].onclick = function(){
//             popUp(this.getAttribute("href"));
//             return false;
//         }
//     }
// }

window.onload = prepareLinks;
function prepareLinks(){
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++){
        if (links[i].getAttribute("class") == "popup"){
            links[i].onclick = function(){
                popUP(this.getAttribute("href"));
                return false;
            }
        }
    }
}
