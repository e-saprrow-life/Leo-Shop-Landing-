// Слайдер в хедере
$('.single-slide').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    draggable: true,
    responsive: [
                {
                 breakpoint: 767,
                     settings: {
                     arrows: false
                    }
                }
                ]
});

// Настройки слайдера в сейдбаре
$('.fade').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    arrows: false
});