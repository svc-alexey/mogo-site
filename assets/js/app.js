$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    /* Collapse */
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});


// accordeon
// const accordeon = document.getElementsByClassName('accordeon__item');

// for(let i=0; i<accordeon.length; i++) {
//     accordeon[i].addEventListener('click', function(){
//         this.classList.toggle('accordeon__item-active');
//     })
// }

//slider
// let slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlider(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides (n) {
// let slides = document.getElementsByClassName('quote__items');
// console.log(slides);

// if (n > slides.length) {
//     slideIndex = 1;
// }
// if(n < 1) {
//     slideIndex = slides.length;
// }
// for ( let i=0; i < slides.length; i++) {
//     slides[i].style.display='none';
// }
// slides[slideIndex-1].style.display = 'flex';
// }