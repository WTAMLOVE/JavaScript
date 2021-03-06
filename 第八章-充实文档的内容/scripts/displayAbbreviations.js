addLoadEvent(displayAbbreviations);
// 书上抄的：
function displayAbbreviations(){
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;

    // 取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations < 1) return false;

    var defs = new Array();
    // 遍历这些缩略词
    for (var i = 0; i < abbreviations.length; i++){
        var current_abbr = abbreviations[i];
        // 如果当前元素没有子节点，就立刻开始下一次循环
        if (current_abbr.childNodes < 1) continue; 
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }

    // 创建定义列表
    var dlist = document.createElement("dl");
    // 遍历定义
    for (key in defs){
        var definition = defs[key];
        
        // 创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        // 创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);

        // 把它们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) return false;

    // 创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);

    // 把标题添加到页面主体
    document.body.appendChild(header);
    // 把定义列表添加到页面主体
    document.body.appendChild(dlist);
}

// 自己写的：
// function displayAbbreviations(){
//     if (!document.getElementsByTagName) return false;
//     if (!document.createElement) return false;
//     if (!document.createTextNode) return false;

//     var abbrList = document.getElementsByTagName("abbr");
//     if (abbrList.length < 1) return false;
//     var dl = document.createElement("dl");
//     for (var i = 0; i < abbrList.length; i++){
//         var abbrTitle = abbrList[i].getAttribute("title");
//         var abbrText = abbrList[i].lastChild.nodeValue;

//         var dt = document.createElement("dt");
//         var dttxt = document.createTextNode(abbrText);
//         dt.appendChild(dttxt);

//         var dd = document.createElement("dd");
//         var ddtxt = document.createTextNode(abbrTitle);
//         dd.appendChild(ddtxt);

//         dl.appendChild(dt);
//         dl.appendChild(dd);
//     }
//     document.getElementsByTagName("body")[0].appendChild(dl);
// }
