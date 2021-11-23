const header = document.querySelector('.header');
const second=document.querySelector('.second');

window.onscroll=()=>{
    if(document.documentElement.scrollTop>25)
    {
        header.classList.add('colored_header');
        header.classList.remove('transparent_header');
        second.classList.remove('second');
    }
    else{
        header.classList.remove('colored_header');
        header.classList.add('transparent_header');
        second.classList.add('second');
    }
}
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});