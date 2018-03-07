addLoadEvent(displayAccessKeys);
function displayAccessKeys(){
    if (!document.getElementsByTagName) return false;

    // 取得文档中所有链接
    var links = document.getElementsByTagName("a");
    // 创建一个数组，保存访问键
    var akeys = new Array();
    // 遍历链接
    for (var i = 0; i < links.length; i++){
        var link = links[i];
        // 如果没有 accesskey 属性，继续循环
        if (!link.getAttribute("accesskey")) continue;

        // 取得 accesskey 属性值
        var key = link.getAttribute("accesskey");
        // 取得链接文本
        var text = link.lastChild.nodeValue;
        // 添加到数组
        akeys[key] = text;
    }

    // 创建列表
    var list = document.createElement("ul");
    // 遍历访问键
    for (key in akeys){
        var text = akeys[key];
        // 创建放到列表中的字符串
        var str = key + ":" + text;
        // 创建列表项
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        // 将列表项添加到列表中
        list.appendChild(item);
    }

    // 创建标题
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);

    // 将标题添加到页面主体
    document.body.appendChild(header);
    // 将列表添加到页面主体
    document.body.appendChild(list);
}