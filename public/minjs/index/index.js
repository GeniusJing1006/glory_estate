function autoSwipe(){slideTime=setTimeout(function(){if(swipeNow<lg-1){var e=++swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}},2e3)}$(".bottom-pre").on("tap",function(){location.href="../order/subscribe.html"}),$(".bottom-info").on("tap",function(){location.href="../msg/msg_info.html"}),$(".bottom-me").on("tap",function(){location.href="../info/info_logged.html"});var $slider=$(".slider_block"),$sliderCon=$(".slider_container"),$point=$(".point_block"),wd=$(window).width(),lg=$slider.length,allWd=wd*lg,hg=.85*wd;$sliderCon.width(allWd),$slider.width(wd).height(hg);var swipeNow=0,slideTime;$sliderCon.on("swipeLeft",function(){if(clearTimeout(slideTime),swipeNow<lg-1){var e=++swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}}),$sliderCon.on("swipeRight",function(){if(clearTimeout(slideTime),swipeNow>0){var e=--swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}}),autoSwipe(),$(".search_input").on("tap",function(){location.href="./index_search.html"}),$("#price").on("tap",function(){$(this).hasClass("asc_price")?($(this).removeClass("asc_price").addClass("desc_price"),$("#prinfo").removeClass("price-info"),$("#descinfo").removeClass("price_none"),$("#ascinfo").addClass("price_none")):$(this).hasClass("desc_price")?($(this).removeClass("desc_price"),$("#prinfo").addClass("price-info")):($(this).addClass("asc_price"),$("#prinfo").removeClass("price-info"),$("#descinfo").addClass("price_none"))}),$(".index_img").on("tap",function(){$(this).hasClass("index_collect")?$(this).removeClass("index_collect"):$(this).addClass("index_collect")});var $queryBlock=$(".query_block");$(".query_block").on("tap",function(){var e=$(this),o=$(this).index();e.hasClass("active")?(e.removeClass("active"),$(".down-box").hide(),e.children(".icon").removeClass("icon_active"),$(".back_top").show(),$(".index_cover").hide(),e.children(".text").css("color","#646464")):(e.addClass("active"),$queryBlock.not(e).removeClass("active"),$(".down-box").hide().eq(o).show(),e.children(".icon").addClass("icon_active"),$(".back_top").hide(),$(".index_cover").show(),e.children(".text").css("color","#ea5404"))}),$(".area_li").on("tap",function(){$(this).addClass("area_choose"),$(".area_li").not(this).removeClass("area_choose")}),$(".area_list li.area_pd").on("tap",function(){$(".area_right").removeClass("area_none")}),$(".area_list li.area_li").not($(".area_pd")).on("tap",function(){$(".area_right").addClass("area_none")}),$(".right_li").on("tap",function(){var e=$(this).text();$(".query_area").text(e),$(".block_area").removeClass("active").children(".icon").removeClass("icon_active"),$(".down_area").hide(),$(".index_cover").hide(),$(".back_top").show()}),$(".proportion_li").on("tap",function(){$(this).addClass("area_choose"),$(".proportion_li").not(this).removeClass("area_choose")}),$(".proportion_li").on("tap",function(){var e=$(this).text();$(".query_proportion").text(e),$(".block_proportion").removeClass("active").children(".icon").removeClass("icon_active"),$(".down_proportion").hide(),$(".index_cover").hide(),$(".back_top").show()}),$(".fill_sub").on("tap",function(){var e=/^\d{0,6}$/,o=$(".min").val(),t=$(".max").val();e.test(o)&&e.test(t)&&o<=t&&($(".query_proportion").text(o+"-"+t+"m2"),$(".block_proportion").removeClass("active").children(".icon").removeClass("icon_active"),$(".down_proportion").hide(),$(".index_cover").hide(),$(".back_top").show())}),$(".price_li").on("tap",function(){$(this).addClass("area_choose"),$(".price_li").not(this).removeClass("area_choose")}),$(".price_li").on("tap",function(){var e=$(this).text();$(".price_text").text(e).css("font-size","12px"),$(".block_price").removeClass("active").children(".icon").removeClass("icon_active"),$(".down_price").hide(),$(".index_cover").hide(),$(".back_top").show()}),$(".fill_refer").on("tap",function(){var e=/^\d{0,5}$/,o=$(".minprice").val(),t=$(".maxprice").val();e.test(o)&&e.test(t)&&o<=t&&($(".price_text").text(o+"-"+t+"元/m2/天"),$(".block_price").removeClass("active").children(".icon").removeClass("icon_active"),$(".down_price").hide(),$(".index_cover").hide(),$(".back_top").show())}),$(".more_li").on("tap",function(){$(this).addClass("area_choose"),$(".more_li").not(this).removeClass("area_choose")}),$(".block_more").on("tap",function(){$(".down_more").css("height","420px")}),$(".more_tube").on("tap",function(){$(".tube").removeClass("status"),$(".type").addClass("status"),$(".fitment").addClass("status"),$(".down_more").css("height","420px")}),$(".more_type").on("tap",function(){$(".tube").addClass("status"),$(".type").removeClass("status"),$(".fitment").addClass("status"),$(".down_more").css("height","370px")}),$(".more_fitment").on("tap",function(){$(".tube").addClass("status"),$(".type").addClass("status"),$(".fitment").removeClass("status"),$(".down_more").css("height","280px")}),$(".tube_li").on("tap",function(){var e=$(this).text();$(".more_text").text(e).css("font-size","12px"),$(".block_more").removeClass("active").children(".icon").removeClass("icon_active"),$(".down_more").hide(),$(".index_cover").hide(),$(".back_top").show()}),$(".type_li").on("tap",function(){var e=$(this).text();$(".more_text").text(e).css("font-size","12px"),$(".block_more").removeClass("active").children(".icon").removeClass("icon_active"),$(".down_more").hide(),$(".index_cover").hide(),$(".back_top").show()}),$(".fitment_li").on("tap",function(){var e=$(this).text();$(".more_text").text(e).css("font-size","12px"),$(".block_more").removeClass("active").children(".icon").removeClass("icon_active"),$(".down_more").hide(),$(".index_cover").hide(),$(".back_top").show()}),window.onload=function(){document.documentElement.clientWidth||document.body.clientWidth,document.documentElement.clientHeight||document.body.clientHeight;window.onscroll=function(){document.documentElement.scrollTop||document.body.scrollTop},$("#backtop").on("tap",function(){document.documentElement.scrollTop=document.body.scrollTop=0})},$(".city_back").on("tap",function(){location.href="./index_city.html"}),$(".icon-close").on("tap",function(){location.href="./index.html"}),$(".city_li").on("tap",function(){var e=$(this).text();location.href="./index.html",$(".icon-back").text(e)}),$(".search_del").on("tap",function(){location.href="./index.html"}),$(".near_right").on("tap",function(){$(".search_cells").remove()}),$(".block_box").on("tap",function(){location.href="../order/building.html"});