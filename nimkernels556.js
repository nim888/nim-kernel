exports.nimkernel = function() {

    var toString = function(obj) {
        return ({}).toString.call(obj);
    };

    var ua = window.navigator.userAgent;
    jskit.isWechat = /MicroMessenger/i.test(ua); // 判断是否在微信浏览器
    jskit.isIphone = /iPhone/ig.test(ua);
    jskit.isAndroid = /Android|Linux/.test(ua);
    jskit.isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/ig.test(ua);

    var isLogin = function() {
        console.log('is login ...');
    };
}