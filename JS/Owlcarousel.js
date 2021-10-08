$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})