// 购物车
$('.topbar-cart').mouseenter(function () {
    $('.cart-menu').css('display', 'block')
    $(' .cart-mini').css({ 'color': '#ff6700 ', 'background': '#fff' })
})
$('.topbar-cart').mouseleave(function () {
    $('.cart-menu').css('display', 'none')
    $(' .cart-mini').css({ 'color': '#b0b0b0 ', 'background': '#424242' })
})
// 搜索
$('.search-text').click(function () {
    $('.search-text').css('border-color', '#ff6700')
    $('.search-btn').css('border-color', '#ff6700')
    $('.search-hot-words').css('display', 'none')
})
$('.search-text').mouseleave(function () {
    $('.search-text').css('border-color', '#b0b0b0')
    $('.search-btn').css('border-color', '#b0b0b0')
    $('.search-hot-words').css('display', 'block')
})
// 导航
$('.nav-item').mouseenter(function (e) {
    $('#J_navMenu').slideDown("slow")
    e.target.style = "color: #ff6700"
    // $(e.target).next('.item-children').slideDown("slow")
console.log($(e.target))    
})
$('.nav-item').mouseleave(function (e) {
    $('#J_navMenu').slideUp("slow")
    e.target.style = "color:#333"
    // $(e.target).next('.item-children').slideUp("slow")
})
$('.category-item a').mouseenter(function (e) {
    // console.log(e)
    var target = e.target
    target.style = "background: #ff6700"
    $(e.target).next('.children').show()

})
$('.category-item a').mouseleave(function (e) {
    var target = e.target
    target.style = "background:none"
    $(e.target).next('.children').hide()
})
$('.site-category-list .children-list li').mouseenter(function (e) {
    e.target.style = "color: #ff6700"
})
$('.site-category-list .children-list li').mouseleave(function (e) {
    e.target.style = "color: #333"
})
// 轮播图
var index = 0;
var sildeTimer = setInterval(changeIndex, 5000);
function changeIndex() {
    index = index >= $('.xm-slider .slide').length - 1 ? 0 : index + 1
    slideImage()
}
function slideImage() {
    $('.xm-slider .slide').eq(index).fadeIn('fast').siblings('.slide').fadeOut('fast')
    $('.xm-slider .ui-pager .ui-pager-item a').eq(index).addClass('active').siblings().removeClass('active')
    console.log('ss')
}
$('.xm-slider .ui-pager .ui-pager-item .ui-pager-link').hover(function () {
    clearInterval(sildeTimer);
    index = $(this).index()
    slideImage()
}, function () {
    sildeTimer = setInterval(changeIndex, 5000)
})
// 点击 < 和 > 切换上一张和下一张
$('.ui-controls .ui-controls-direction .ui-prev').click(function () {
    index = index <= 0 ? $('.xm-slider .slide').length - 1 : index - 1;
    slideImage();
});
$('.ui-controls .ui-controls-direction .ui-next').click(function () {
    changeIndex();
});

// 开始闪购
$('.control-prev ').click(function () {
   var prev= $('.xm-carousel-wrapper .xm-flashPurchase-list').children()
   for(var i=prev.length/2;i<prev.length;i++){
    $(prev[i]).hide()
}
   for(var i=0;i<prev.length/2;i++){
              $(prev[i]).show()
   }
   $('.control-prev ').attr('disabled',false)
   $('.control-next').attr('disabled',true)

})
$('.control-next').click(function(){
    var prev= $('.xm-carousel-wrapper .xm-flashPurchase-list').children()
    for(var i=0;i<prev.length/2;i++){
        $(prev[i]).hide()
    }
   for(var i=prev.length/2;i<prev.length;i++){
       $(prev[i]).show()
   }
   $('.control-prev ').attr('disabled',true)
   $('.control-next').attr('disabled',false)
})
// 家电
$('.tab-list li').click(function (e) {
    console.log(e)
    e.target.style="color: #ff6700;border-bottom:2px solid #ff6700" 
    $(e.target).siblings().css({'color': '#333','border':'none'})
    
    var index=$(e.target).index()
   var name_content= $('#homeelec-content .brick-list')
//    console.log(name_content)
     $(name_content[index]).show()
     $(name_content[index]).siblings().hide()
})


// 主内容
$('.brick-item').mouseenter(function(e){
    e.target.style='box-shadow:10px 10px 5px #e0e0e0'
    console.log($(e.target))
    console.log($(e.target).children().last())
    // $(e.target).children().last().css('display','block')
   
})
$('.brick-item').mouseleave(function(e){
    e.target.style='box-shadow: none'
    // $(e.target).children().last().slideUp()
})
