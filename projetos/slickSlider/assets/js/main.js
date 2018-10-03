$('.main').slick({     
    centerMode: true,    
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 3,    
    
    autoplaySpeed: 3000,
    autoplay:false,
    lazyLoad: 'progressive',
    infinite: true,
    speed: 300,
    dots:false,
    arrows:false,

    asNavFor: '.mobile-thumbs',

    responsive: [
        {
            breakpoint: 601,
            settings: {                
                centerMode: true,
                centerPadding: '0px',
                
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                arrows:false,
                appendDots:$(".Slick-Navigation")
            }
        },
        {
            breakpoint: 376,
            settings: {
                
                centerMode: true,
                centerPadding: '0px',                
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                arrows:false,
                appendDots:$(".Slick-Navigation")
            }
        }
    ]
});

$('.mobile-thumbs').slick({
    slidesToShow: 5,            
    slidesToScroll: 1,

    centerMode: true,
    centerPadding: '50px',

    autoplaySpeed: 5000,
    autoplay:false,            
    infinite: true,
    focusOnSelect: true,

    speed: 300,
    dots:false,
    arrows:true,
    asNavFor: '.main',    
});

$('.main').on('afterChange', function(){

    $(".img-thumb").removeClass('thumb-active');
    $(".img-thumb").addClass('thumb-inactive');
    
    var index = $('.main').slick('slickCurrentSlide');

    $(".thumbs > .img-thumb").eq(index-1).addClass('thumb-active');
    $(".thumbs > .img-thumb").eq(index).addClass('thumb-active');
    $(".thumbs > .img-thumb").eq(index+1).addClass('thumb-active');

}) 

$(".altprev").click(function(){    
    $(".main").slick('slickGoTo', $('.main').slick('slickCurrentSlide') - 3);
});

$(".altnext").click(function(){    
    $(".main").slick('slickGoTo', $('.main').slick('slickCurrentSlide') + 3);
});

$(".img-thumb").click(function(){    
    $(".main").slick('slickGoTo', $(this).index());    
    parent.postMessage("anchor" ,'*');    
});
$('.main').on('lazyLoaded', function(){    
    parent.postMessage($("html").height() + 50 ,'*');    
});
$(window).on("load", function (e) {})