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


const menuBtn=document.querySelector('.menu_button');
const menu=document.querySelector('.menu');
const menu_items=document.querySelectorAll('.menu_items');
const closeBtn=document.querySelector('.cross_button');
menuBtn.addEventListener('click',()=>{
    menu.classList.add('active');
})
closeBtn.addEventListener('click',()=>{
    menu.classList.remove('active');
})

if(menu.classList.contains('active')==="true")
{
    console.log("YO")
    const home=document.querySelector('#home');
    const about=document.querySelector('#about');
    const skill=document.querySelector('#skills');
    const work=document.querySelector('#home');
    const gallery=document.querySelector('#gallery');
    const contact=document.querySelector('#contact');
    home.addEventListener('click',()=>{
        menu.classList.remove('active');
    })
    about.addEventListener('click',()=>{
        menu.classList.remove('active');
    })
    skill.addEventListener('click',()=>{
        menu.classList.remove('active');
    })
    work.addEventListener('click',()=>{
        menu.classList.remove('active');
    })
    gallery.addEventListener('click',()=>{
        menu.classList.remove('active');
    })
    contact.addEventListener('click',()=>{
        menu.classList.remove('active');
    })
}
