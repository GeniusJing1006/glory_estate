//获取轮播每个元素
var $slider = $('.slider_block');
//获取轮播容器
var $sliderCon = $('.slider_container');
//获取所有的点
var $point = $('.point_block');

//获取屏幕宽度
var wd = $(window).width();
//获取轮播个数
var lg = $slider.length;
//计算容器宽度
var allWd = wd * lg;
//计算元素高度
var hg = wd * 0.85;
//设置容器宽度
$sliderCon.width(allWd);
//设置元素宽高
$slider.width(wd).height(hg);

//表示当前元素
var swipeNow = 0;
var slideTime;
//添加滑动事件
$sliderCon.on('swipeLeft', function(){
    clearTimeout(slideTime);
    if(swipeNow < lg - 1){
        //计算滑动距离，改变当前元素
        var swipeWd = (++swipeNow) * wd;
        $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
        //改变点的选中
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});
$sliderCon.on('swipeRight', function(){
    clearTimeout(slideTime);
    if(swipeNow > 0){
        //计算滑动距离，改变当前元素
        var swipeWd = (--swipeNow) * wd;
        $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
        //改变点的选中
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});

function autoSwipe(){
    slideTime = setTimeout(function(){
        if(swipeNow < lg - 1){
            //计算滑动距离，改变当前元素
            var swipeWd = (++swipeNow) * wd;
            $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
            //改变点的选中
            $point.removeClass('active').eq(swipeNow).addClass('active');
            autoSwipe();
        }
    }, 2000);
}
autoSwipe();

var $queryBlock = $('.query_block')
$('.query_block').on('tap',function(){
    var $self = $(this);
    var index = $(this).index();
    if($self.hasClass('active')){
        $self.removeClass('active')
    }else{
        $queryBlock.removeClass('active')
        $self.addClass('active')
        $('.down-box').hide().eq(index).show();
    }
})

/**
var $queryPrice = $('.query_price');
$('.query_price').on('tap',function(){

})
*/