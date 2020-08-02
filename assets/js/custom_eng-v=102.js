$(document).ready(function() {
    $(".bg-pop").click(function() {
        $(this).hide();
    });
    $(document).keyup(function(event) {
        if (event.keyCode == 27) {
            $(".bg-pop").hide();
        }
    });
    $(".popup img").eq(2).click(function() {
        (".bg-pop").hide();
    });
    $(".banner p").click(function() {
        var move = $(".banner").attr("data-index");
        var height = $(move).offset().top;

        $("html,body").stop().animate({ "scrollTop": height }, 1000);
    })
    $(".banner>div").click(function() {
        $(".banner").hide();
        $(".wrap-section").eq(0).css({ "margin-top": 0 });
        $(".header-line").css({ "height": 128 });
    });
    $(".nav>li").click(function() {
        var move = $(this).attr("data-index");
        var height = $(move).offset().top;

        $("html,body").stop().animate({ "scrollTop": height }, 1500);
    });
    $(".Footer-Nav>li").click(function() {
        var move = $(this).attr("data-index");
        var height = $(move).offset().top;

        $("html,body").stop().animate({ "scrollTop": height }, 1500);
    });
    $(".arrow-down").mouseenter(function() {
        $(this).hide();
        $(".language li").eq(0).addClass("on");
        $(".language li").show();
    });
    $(".language").mouseleave(function() {
        $(".language li").eq(0).removeClass("on");
        $(this).children("li:nth-child(n+2)").hide();
        $(".arrow-down").show();
    });
    $(".mobile-gnb>li").click(function() {
        var move = $(this).attr("data-index");
        var height = $(move).offset().top;

        $("html,body").stop().animate({ "scrollTop": height }, 1500);
    });
    var burger = 0;
    $(".burger").click(function() {
        $(".burger-nav").stop().animate({ "left": 0 }, 700);
        $(".background-black").show();
        $(".Close-video").hide();
        burger = 1;
    });
    $(".close-burger").click(function() {
        $(".burger-nav").stop().animate({ "left": -192 }, 700);
        $(".background-black").hide();
        burger = 0;
    });

    $(".button>li").first().click(function() {
        var learn_height = $("#Wrap-Money").offset().top;
        $("html,body").stop().animate({ "scrollTop": learn_height }, 1200);
    })
    $(".button>li").last().click(function() {
        var subs_height = $("#Subscribe").offset().top;
        $("html,body").stop().animate({ "scrollTop": subs_height }, 1200);
    })

    var left = -236;
    var auto2 = setInterval(function() {
        left = left - 2;
        $(".list-logo").css({ "left": left });
        if (left == -238) {
            $(".list-logo li").first().appendTo(".list-logo");
        } else if (left < -472) {
            left = -236;
        }
    }, 20);

    $(".list-logo li img").mouseenter(function() {
        clearInterval(auto2);
        var org = $(this).attr("src");
        var add = $(this).attr("data-add");
        $(this).attr("src", add);
        $(this).attr("data-add", org);
    });
    $(".list-logo li img").mouseleave(function() {
        var add = $(this).attr("src");
        var org = $(this).attr("data-add");
        $(this).attr("src", org);
        $(this).attr("data-add", add);
        auto2 = setInterval(function() {
            left = left - 2;
            $(".list-logo").css({ "left": left });
            if (left == -238) {
                $(".list-logo li").first().appendTo(".list-logo");
            } else if (left < -472) {
                left = -236;
            }
        }, 20);
    });

    var org = new Array(6);
    var color = new Array(6);
    for (var i = 0; i < 7; i++) {
        org[i] = $(".m-list-logo li").eq(i).children("img").attr("src");
        color[i] = $(".m-list-logo li").eq(i).children("img").attr("data-add");
    }
    var list = 0;
    var auto_mobile = setInterval(function() {
        for (var j = 0; j < 7; j++) {
            $(".m-list-logo li").eq(j).children("img").attr("src", org[j]);
        }
        if (list < 7) {
            $(".m-list-logo li").eq(list).children("img").attr("src", color[list]);
            list++;
        } else if (list == 7) {
            list = 0;
        }
    }, 3000);
    $(".m-list-logo li img").mouseenter(function() {
        for (var i = 0; i < 7; i++) {
            $(".m-list-logo li").eq(i).children("img").attr("src", org[i]);
        }
        clearInterval(auto_mobile);
        var orgadd = $(this).attr("src");
        var add = $(this).attr("data-add");
        $(this).attr("src", add);
        $(this).attr("data-add", orgadd);
    });
    $(".m-list-logo li img").mouseleave(function() {
        var add = $(this).attr("src");
        var orgadd = $(this).attr("data-add");
        $(this).attr("src", orgadd);
        $(this).attr("data-add", add);
        auto_mobile = setInterval(function() {
            for (var j = 0; j < 7; j++) {
                $(".m-list-logo li").eq(j).children("img").attr("src", org[j]);
            }
            if (list < 7) {
                $(".m-list-logo li").eq(list).children("img").attr("src", color[list]);
                list++;
            } else if (list == 7) {
                list = 0;
            }
        }, 3000);
    });
    $("#videoSection").click(function() {
        $("iframe").fadeIn(500);
        $(".background-black").show();
        $(".Close-video").show();
    });

    $(".background-black").click(function() {
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $("iframe").hide();
        $(this).hide();
        if (burger != 0) {
            $(".burger-nav").stop().animate({ "left": -192 }, 700);
            burger = 0;
        }
    });
    $(document).keyup(function(event) {
        if (event.keyCode == 27) {
            $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            $("iframe").hide();
            $(".background-black").hide();
            if (burger != 0) {
                $(".burger-nav").stop().animate({ "left": -192 }, 700);
                burger = 0;
            }
        }
    });
    var confirm_hide = 0;
    $(".Field input").last().click(function() {
        if ($(".Field input").last().attr("value") == "Loading...") {
            setTimeout(function() {
                $(".Background-white").show();
                $(".Confirm").show();
                confirm_hide = 1;
            }, 2000);
        }
        $(".Field input").first().val("");
    });

    $(".Confirm img").first().click(function() {
        $(".Background-white").hide();
        $(".Confirm").hide();
        confirm_hide = 0;
    });
    $(document).keyup(function(event) {
        if (event.keyCode == 13) {
            if (confirm_hide == 1) {
                $(".Background-white").hide();
                $(".Confirm").hide();
                confirm_hide = 0;
            }
        }
    });
    $(document).keyup(function(event) {
        if (event.keyCode == 27) {
            if (confirm_hide == 1) {
                $(".Background-white").hide();
                $(".Confirm").hide();
                confirm_hide = 0;
            }
        }
    });
    $("#Team .See-more-box").click(function() {
        $(this).hide();
        $(this).parent("div").animate({ "height": 1500 }, 500);
        $(this).siblings(".Profile-view").css({ "overflow": "visible" });
        $(this).siblings(".Profile-view ul").stop().slideDown(1000);
    });

    $("#Team .See-more-box-mobile").click(function() {
        $(this).hide();
        $(this).parent("div").animate({ "height": 1800 }, 500);
        $(this).siblings(".Profile-view").css({ "overflow": "visible" });
        $(this).siblings(".Profile-view ul").stop().slideDown(1000);
    });

    $(".Tab-Menu>li").click(function() {
        $(".Tab-Menu>li").removeClass("on");
        $(this).addClass("on");
    });

    $(".Tab-Menu>li").click(function() {
        var list = $(this).index();

        $(".Tab").removeClass("show");
        $(".Tab").eq(list).addClass("show");
    });

    $(".Faq-Title>li").click(function() {
        $(this).siblings("li").removeClass("on");
        $(this).toggleClass("on");
        $(this).childeren(".Faq-Content").stop().slideToggle();
    });

    $(".top").click(function() {
        $("html,body").stop().animate({ "scrollTop": 0 }, 1700);
    });
    $("#team .See-more-box").click(function() {
        $(".wrap-team").css({ "height": "1600px" });
    });

    $("#team .See-more-box-mobile").click(function() {
        $(".wrap-team").css({ "height": "1900px" });
    });

});