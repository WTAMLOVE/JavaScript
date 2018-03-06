/** 
 * 此方法通过对象检测技术检测了 XMLHttpRequest。如果失败，则继续检测其他方法，最终返回 false 或一个新的 XMLHttpRequest(或 XMLHTTP)对象。
 * 要使用XMLHttpRequest 对象时，可以将这个新对象直接复制给一个变量。
*/
function getHTTPObject(){
    if (typeof XMLHttpRequest == "undefined"){
        XMLHttpRequest = function(){
            try{
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            }catch(e){}

            try{
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }catch(e){}

            try{
                return new ActiveXObject("Msxml2.XMLHTTP");
            }catch(e){}
            return false;
        }
    }
    return new XMLHttpRequest();
}