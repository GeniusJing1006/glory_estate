$(".bt-reg").on("tap",function(){location.href="./register.html"}),$(".bt-passwd").on("tap",function(){location.href="./forget.html"}),$(".icon-back").on("tap",function(){location.href="../loading.html"}),$(window).on("keyup",function(){var n=$("#tel").val(),t=$("#password").val(),o=/^\d{11}$/;""!=n&&o.test(n)&&t.length>=6&&$("#btnlogin").on("tap",function(){location.href="../index/index.html"}).css("background","#ea5404")});