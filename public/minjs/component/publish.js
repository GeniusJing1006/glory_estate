$(".bottom-more").on("tap",function(){$(".publish_cover").removeClass("publish_none"),$(".publish").removeClass("publish_none"),$(".publish_bottom").removeClass("publish_none"),$(".publish_close").removeClass("publish_none")}),$(".publish_close").on("tap",function(){$(".publish_cover").addClass("publish_none"),$(".publish").addClass("publish_none"),$(".publish_bottom").addClass("publish_none"),$(".publish_close").addClass("publish_none")}),$(".demand").on("tap",function(){location.href="../component/publish_demand.html"});