$(document).ready(function(){
    
    
    $(".con04List").slick({
        prevArrow:"<div class='sliderBtn btnLeft'><img src='images/allowLW.png'></div>",
        nextArrow:"<div class='sliderBtn btnRight'><img src='images/allowRW.png'></div>",
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect:true,
        autoplay:true,
        autoplaySpeed:1000,
        arrows:false,
        variableWidth:true,  /*헤이트값 비율상관없이 먹는 아이*/
    });
    
})