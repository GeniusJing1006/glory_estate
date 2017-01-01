//跳转到首页
$('.bottom-index').on('tap',function(){
    location.href = '../index/index.html'
})

//跳转到信息
$('.bottom-info').on('tap',function(){
    location.href = '../msg/msg_info.html'
})

//跳转到"我"的页面
$('.bottom-me').on('tap',function(){
    location.href = '../info/info_logged.html'
})


//接单
$('.btn_receive').on('tap',function(){
    $(this).css('width','90px').css('background','#fff').css('color','#646464').text('已接单，待反馈').css('text-align','right');
})

//左滑
$('.subscribe_cell').on('swipeLeft',function(){
    $(this).css('left','-68px');
    $(this).find('.delete').css('display','block').css('right','-68px');
    $('.subscribe_cell').not($(this)).css('left','0');
    $('.subscribe_cell').not($(this)).find('.delete').hide();
}).on('swipeRight',function(){
    $(this).css('left','0');
    $(this).find('.delete').hide();
})
//删除
$('.delete').on('tap',function(){
    $(this).parent().remove();
})

$('.house_img').on('tap',function(){
    location.href = './building.html'
})

//点击收藏
$('.icon_collect').on('tap',function(){
    if($(this).hasClass('icon_active')){
        $(this).removeClass('icon_active')
    }else{
        $(this).addClass('icon_active')
    }
})
//返回预约页面
$('.icon-back').on('tap',function(){
    location.href = './subscribe.html'
})
//预约看房
$('.house_order').on('tap',function(){
    location.href = '../info/info_house.html'
})