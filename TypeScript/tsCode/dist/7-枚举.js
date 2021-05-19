var HTTP_CODE;
(function (HTTP_CODE) {
    HTTP_CODE[HTTP_CODE["OK"] = 200] = "OK";
    HTTP_CODE[HTTP_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_CODE[HTTP_CODE["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
})(HTTP_CODE || (HTTP_CODE = {}));
// HTTP_CODE.OK = 2; // 只读属性
var URLS;
(function (URLS) {
    URLS["URER_REGISTER"] = "/user/register";
    URLS["URER_LOGIN"] = "/user/login";
    URLS[URLS["index"] = 2] = "index";
})(URLS || (URLS = {}));
