function showPic(whichpic){
    // 修改 placeholder 图片
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");

    placeholder.setAttribute("src", source);
    // placeholder.src = source;

    // 修改 description 段落文本
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");

    description.firstChild.nodeValue = text;
}
