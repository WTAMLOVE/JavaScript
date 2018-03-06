function getNewContent(){
    var request = getHTTPObject();
    if (request){
        request.open("GET", "example.txt", true);
        // onreadystatechange 是一个事件处理函数，它会在服务器给XMLHttpRequest 对象送回相应的时候被触发执行。
        // 在这个处理函数中，可以根据服务器具体相应做相应的处理。
        request.onreadystatechange = function(){
            if (request.readyState == 4){
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        // 指定请求目标，也明确了如何处理相应之后，就可以用 send 方法来发送请求了
        request.send(null);
    }else{
        alert("Sorry, your browser doesn't support XMLHttpRequest");
    }
}
addLoadEvent(getNewContent);