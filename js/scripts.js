 // 

$( document ).ready(function() {
    //functions callback
    slickThumbnail();
    paddingTopPage();


    function paddingTopPage(){
        var h = $('#header').height();
        $("body").css("padding-top", h + 30);
    }

    function slickThumbnail() {
        $('.slider-for').slick({
            slidesToShow: 1,
            arrows: true,
            dots: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: false,
            variableWidth: false,
            asNavFor: '.slider-for',
            dots: false,
            arrows: true,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                      slidesToShow: 2,
                    }
                }
               ]
        });
    }
    function slickSimilarProducts() {
        $('.s-products .products').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            variableWidth: false,
            dots: true,
            arrows: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 2,
                    }
                }
               ]
        });
    }

    let w_width = $(window).width();

    function mediaQueryMobile() {
        $(".menu-mobile").on( "click", function() {
            $(".header-nav .menu").addClass('toggle');
        });
        $(".menu-close").on( "click", function() {
            $(".header-nav .menu").removeClass('toggle');
        });
    }
    if(w_width < 1041) {
        mediaQueryMobile();  
    }
    if(w_width < 992) { 
        slickSimilarProducts(); 
    }
});