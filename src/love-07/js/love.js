function onNavigation(e) {
    if (e.progress == 2) {
        //bug
        // player.pause();
    }
}
Flowtime.showProgress(true);
Flowtime.addEventListener("flowtimenavigation", onNavigation, false);
Flowtime.start();
$(function() {
    var URL = document.URL.substr(0, document.URL.indexOf('#'));
    setInterval(function() {
        $(".showtip").removeClass("showtip").hide().siblings("span").addClass("showtip").fadeIn();
    }, 5000);

    var bgmMusic = document.getElementById("bgmMusic");
    $("#on").click(function() {
        bgmMusic.pause();
        $("#on").hide(200);
        $("#off").css({ "display": "inline-block" }, 300);
    });
    $("#off").click(function() {
        bgmMusic.play();
        $("#off").hide(200);
        $("#on").css({ "display": "inline-block" }, 300);
    });
    var sharetext = $("#text-75").text() + "love" + $("#text-76").text() + $("#text-77").text();
    sharedesc = $("#text-1").text() + $("#text-2").text() + $("#text-3").text() + $("#text-4").text() + $("#text-5").text() + $("#text-6").text() + $("#text-7").text() + $("#text-8").text() + "......",
        shareurl = $("#write-url u").eq(0).text();
    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": sharetext,
            "bdDesc": sharedesc,
            "bdUrl": shareurl + $("#text-href").text() + ".html",
            "bdMini": "2",
            "bdMiniList": ["mshare", "qzone", "tsina", "bdysc", "weixin", "renren", "tqq", "bdxc", "kaixin001", "tqf", "tieba", "douban", "tsohu", "bdhome", "sqq", "thx", "qq", "ibaidu", "taobao", "hi", "baidu", "sohu", "t163", "qy", "meilishuo", "mogujie", "diandian", "huaban", "leho", "share189", "duitang", "hx", "tfh", "fx", "youdao", "sdo", "qingbiji", "ifeng", "people", "xinhua", "ff", "mail", "kanshou", "isohu", "yaolan", "wealink", "xg", "ty", "iguba", "fbook", "twi", "deli", "s139"],
            "bdPic": URL + "/img/319280.jpg",
            "bdStyle": "1",
            "bdSize": "32"
        },
        "share": {}
    };
    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
})
