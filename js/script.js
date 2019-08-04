    // document.getElementById('pesan').addEventListener('click', function () {
    //     document.querySelector('.bg-popup').style.display = 'flex';
    // });
    // // close
    // document.querySelector('.close').addEventListener('click', function () {
    //     document.querySelector('.bg-popup').style.display = 'none';
    // });




// SLIDER
$(".food_slider_area").owlCarousel({
    autoPlay: true,
    slideSpeed:1000,
    items : 3,
    loop: true,
    nav:true,
    navText:['<i class="fa fa-hand-o-left"></i>','<i class="fa fa-hand-o-right"></i>'],
    margin: 30,
    dots: true,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:2
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
