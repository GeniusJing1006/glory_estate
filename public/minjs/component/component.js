var $radioList=$(".radio_box .radio_block");$radioList.on("tap",function(){var s=$(this);s.hasClass("selected")||($radioList.removeClass("selected"),s.addClass("selected"))});var $radioLi=$(".res_radio .radio_block");$radioLi.on("tap",function(){var s=$(this);s.hasClass("selected")?s.removeClass("selected"):($radioLi.removeClass("selected"),s.addClass("selected"))});var $radioLi=$(".res_radio2 .radio_block");$radioLi.on("tap",function(){var s=$(this);s.hasClass("selected")?s.removeClass("selected"):($radioLi.removeClass("selected"),s.addClass("selected"))});var $radioLi=$(".res_radio3 .radio_block");$radioLi.on("tap",function(){var s=$(this);s.hasClass("selected")?s.removeClass("selected"):($radioLi.removeClass("selected"),s.addClass("selected"))});var $resTitle=$(".res_list"),$resList=$(".resource_list");$resTitle.on("tap",function(){$(this).siblings(".resource_list").toggle()}),$resList.find(".resource_li").on("tap",function(){var s=$(this),e=s.parent(".resource_list"),o=s.text(),i=s.data("val");e.siblings(".res_list").text(o).data("val",i),e.hide()}),$(".demand_info").on("focus",function(){this.value==this.defaultValue&&(this.value="",$(this).css("color","#646464"))}),$(".demand_info").on("blur",function(){""==this.value&&(this.value=this.defaultValue,$(this).css("color","#b4b4b4"))}),$(".demand_input").on("focus",function(){this.value==this.defaultValue&&$(this).css("color","#b4b4b4")}),$(".header_sure").on("tap",function(){$(".cover").css("display","block"),$(".publish_success").css("display","block")}),$(".publish_sure").on("tap",function(){setTimeout(function(){location.href="../info/info_demand.html"},800)}),$(".header_cancle").on("tap",function(){$(".cover").css("display","block"),$(".publish_cancle").css("display","block"),$(".resource_out").css("display","block")}),$(".cancle_sure").on("tap",function(){setTimeout(function(){location.href="../index/index.html"},800)}),$(".order_no").on("tap",function(){$(".cover").css("display","none"),$(".publish_cancle").css("display","none"),$(".resource_out").css("display","none")}),$(".resource_sure").on("tap",function(){setTimeout(function(){location.href="../index/index.html"},800)}),$(".btn_res").on("tap",function(){$(".cover").css("display","block"),$(".publish_out").css("display","block")}),$(".publish_sure").on("tap",function(){setTimeout(function(){location.href="../info/house_publish.html"},800)}),$(".search_input").on("focus",function(){$(".search_close").css("display","inline-block")}),$(".search_input").on("blur",function(){$(".search_close").css("display","none")}),$(".search_close").on("tap",function(){document.getElementById("search").value=""}),$(".house_add").on("tap",function(){location.href="./publish_houseadd.html"}),$(".icon-back").on("tap",function(){location.href="./publish.html"}),$(".demand_push").on("tap",function(){""!=$(".demand_add").val()&&($(".cover").css("background","#a7a7aa").css("display","block"),$(".house_add").css("display","block"))}),$(".house_sure").on("tap",function(){location.href="./publish.html"});